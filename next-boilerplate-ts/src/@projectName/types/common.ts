export type QueryParamsType = string | string[] | undefined | number | boolean | object;

export interface IMeta {
	limit: number;
	page: number;
	total: number;
}
export interface IErrorMessage {
	path: string;
	message: string;
}

export interface IError {
	data: string;
	status: string | undefined;
}

export type ResponseSccessType = {
	meta?: IMeta;
	data: any;
};

export type ResponseErrorType = {
	statusCode: number;
	message: string;
	errorMessages: IErrorMessage[];
};
