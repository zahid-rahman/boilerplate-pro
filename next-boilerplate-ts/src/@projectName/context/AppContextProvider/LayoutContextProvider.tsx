'use client';
import defaultConfig from '@/@projectName/constants/defaultConfig';
import React, { createContext, ReactNode, useContext, useState } from 'react';

export type LayoutData = {
	layoutType: string;
	navStyle: string;
	footerType: string;
	footer: boolean;
};

export type LayoutActions = {
	updateLayoutType: (layout: string) => void;
	updateNavStyle: (navStyle: string) => void;
	setFooterType: (footerType: string) => void;
	setFooter: (footer: boolean) => void;
};

const LayoutContext = createContext<LayoutData>({
	footer: defaultConfig.footer,
	navStyle: defaultConfig.navStyle,
	layoutType: defaultConfig.layoutType,
	footerType: defaultConfig.footerType,
});

const LayoutActionsContext = createContext<LayoutActions>({
	updateLayoutType: () => {},
	updateNavStyle: () => {},
	setFooterType: () => {},
	setFooter: () => {},
});

export const useLayoutContext = () => useContext(LayoutContext);

export const useLayoutActionsContext = () => useContext(LayoutActionsContext);

type LayoutContextProviderProps = {
	children: ReactNode;
};

const LayoutContextProvider: React.FC<LayoutContextProviderProps> = ({ children }) => {
	const [layoutType, updateLayoutType] = useState<string>(defaultConfig.layoutType);
	const [navStyle, updateNavStyle] = useState<string>(defaultConfig.navStyle);
	const [footerType, setFooterType] = useState<string>(defaultConfig.footerType);
	const [footer, setFooter] = useState<boolean>(defaultConfig.footer);

	return (
		<LayoutContext.Provider
			value={{
				navStyle,
				footerType,
				footer,
				layoutType,
			}}
		>
			<LayoutActionsContext.Provider
				value={{
					setFooter,
					setFooterType,
					updateNavStyle,
					updateLayoutType,
				}}
			>
				{children}
			</LayoutActionsContext.Provider>
		</LayoutContext.Provider>
	);
};

export default LayoutContextProvider;
