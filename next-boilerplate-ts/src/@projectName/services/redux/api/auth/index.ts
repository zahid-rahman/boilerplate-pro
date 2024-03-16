import { BASE_AUTH } from '@/@projectName/constants/redux/api-tagtype';
import baseApi from '../../baseApi';

const authApi = baseApi.injectEndpoints({
	endpoints: build => ({
		register: build.mutation({
			query: data => {
				return {
					url: `${BASE_AUTH}/register`,
					method: 'POST',
					data: data,
				};
			},
		}),
		login: build.mutation({
			query: data => {
				return {
					url: `${BASE_AUTH}/login`,
					method: 'POST',
					data: data,
				};
			},
		}),
		forgotPassword: build.mutation({
			query: data => ({
				url: `${BASE_AUTH}/forgot-password`,
				method: 'POST',
				data: data,
			}),
		}),
		resetPassword: build.mutation({
			query: data => ({
				url: `${BASE_AUTH}/reset-password`,
				method: 'POST',
				data: data,
			}),
		}),
		changePassword: build.mutation({
			query: data => ({
				url: `${BASE_AUTH}/change-password`,
				method: 'POST',
				data: data,
			}),
		}),
	}),
});

export const {
	useRegisterMutation,
	useLoginMutation,
	useForgotPasswordMutation,
	useResetPasswordMutation,
	useChangePasswordMutation,
} = authApi;

export default authApi;
