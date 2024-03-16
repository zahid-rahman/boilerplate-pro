import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../axios/axiosBaseQuery';
import { tagTypeList } from '@/@projectName/constants/redux/api-tagtype';
import { ENV } from '@/@projectName/config/env';

const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: axiosBaseQuery({
		baseUrl: ENV.baseUrlApi as string,
	}),
	endpoints: () => ({}),
	tagTypes: tagTypeList,
});

export default baseApi;
