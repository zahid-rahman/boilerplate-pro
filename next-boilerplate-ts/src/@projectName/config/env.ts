export const ENV = {
    nodeEnv: process.env.NEXT_PUBLIC_NODE_ENV,
    isDevelopment: process.env.NEXT_PUBLIC_NODE_ENV === 'development',
	isStaging: process.env.NEXT_PUBLIC_NODE_ENV === 'staging',
	isUat: process.env.NEXT_PUBLIC_NODE_ENV === 'uat',
    baseUrlApi: process.env.NEXT_PUBLIC_API_BASE_URL,
}