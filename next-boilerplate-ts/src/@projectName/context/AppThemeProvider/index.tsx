'use client';
import React, { ReactElement } from 'react';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';
import { getAntTheme } from '@/@projectName/helpers/themeHelper';
import { useThemeContext } from '../AppContextProvider/ThemeContextProvider';

interface AppThemeProviderProps {
	children: ReactElement;
}

const AppThemeProvider: React.FC<AppThemeProviderProps> = props => {
	const { theme } = useThemeContext();

	return (
		<ThemeProvider theme={theme}>
			<ConfigProvider
				theme={{
					token: getAntTheme(theme),
				}}
			>
				{props.children}
			</ConfigProvider>
		</ThemeProvider>
	);
};

export default React.memo(AppThemeProvider);
