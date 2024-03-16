/*eslint-disable*/
import { accessTokenKey } from '@/@projectName/constants/cookie';
import { ResponseErrorType, ResponseSccessType } from '@/@projectName/types/common';
import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create();
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers['Accept'] = 'application/json';

axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axiosInstance.defaults.timeout = 60000;

axiosInstance.interceptors.request.use(
	function (config) {
		const accessToken = Cookies.get(accessTokenKey);
		if (accessToken) {
			config.headers.Authorization = accessToken;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	// @ts-ignore
	function (response) {
		const responseObject: ResponseSccessType = {
			data: response?.data,
			meta: response?.data?.meta,
		};
		return responseObject;
	},
	function (error) {
		const responseObject: ResponseErrorType = {
			statusCode: error?.response?.data?.statusCode || 500,
			message: error?.response?.data?.message || 'Something Went Wrong',
			errorMessages: error?.response?.data?.message,
		};
		return Promise.reject(responseObject);
	}
);

export { axiosInstance };
