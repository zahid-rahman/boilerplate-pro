import { FooterType, MenuStyle, ThemeMode, ThemeStyle } from './appEnum';
import { purple } from '@ant-design/colors';

/**
 *  this are the default config
 */

export const LightSidebar = {
	sidebarBgColor: '#fff',
	sidebarTextColor: 'rgba(0, 0, 0, 0.60)',
	sidebarHeaderColor: '#fff',
	sidebarMenuSelectedBgColor: '#F4F7FE',
	sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
	mode: ThemeMode.LIGHT,
};

export const defaultTheme = {
	primaryColor: purple.primary,
};

const defaultConfig = {
	sidebar: {
		borderColor: '#757575',
		menuStyle: MenuStyle.DEFAULT as string,
		allowSidebarBgImage: false,
		sidebarBgImageId: 1,
		colorSet: LightSidebar,
	},

	locale: {
		languageId: 'english',
		locale: 'en',
		name: 'English',
		icon: 'us',
	},
	themeStyle: ThemeStyle.STANDARD,
	themeMode: process.env.NEXT_PUBLIC_THEME_MODE as string,
	footerType: FooterType.FLUID,
	navStyle: process.env.NEXT_PUBLIC_NAV_STYLE as string,
	layoutType: process.env.NEXT_PUBLIC_LAYOUT_TYPE as string,
	footer: false,
	rtlLocale: ['ar'],
};
export default defaultConfig;
