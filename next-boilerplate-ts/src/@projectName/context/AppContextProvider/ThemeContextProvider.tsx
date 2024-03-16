'use client';
import { defaultTheme } from '@/@projectName/constants/defaultConfig';
import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

export interface ThemeData {
	theme: any;
	themeMode: string;
	themeStyle: string;
}

export interface ThemeActions {
	updateTheme: (theme: any) => void;
	updateThemeMode: (themeMode: string) => void;
	updateThemeStyle: (themeStyle: string) => void;
}

export const ThemeContext = createContext<ThemeData>({
	theme: defaultTheme,
	themeMode: 'light',
	themeStyle: '',
});

const ThemeActionsContext = createContext<ThemeActions>({
	updateTheme: () => {},
	updateThemeMode: () => {},
	updateThemeStyle: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const useThemeActionsContext = () => useContext(ThemeActionsContext);
type ThemeContextProviderProps = {
	children: ReactNode;
};

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<any>(defaultTheme);
	const [themeMode, updateThemeMode] = useState<string>('light'); // add your preferable theme mode
	const [themeStyle, updateThemeStyle] = useState<string>(''); // add your preferable theme style

	const updateTheme = useCallback((theme: any) => {
		setTheme(theme);
	}, []);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				themeStyle,
				themeMode,
			}}
		>
			<ThemeActionsContext.Provider
				value={{
					updateTheme,
					updateThemeStyle,
					updateThemeMode,
				}}
			>
				{children}
			</ThemeActionsContext.Provider>
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
