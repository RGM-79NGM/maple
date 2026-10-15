export function returnColorTheme(themeName: string) {
	if (!themeName) return;

	return themes[themeName];
}

export function returnColorIntensity(theme: Theme, num: number) {
	if (!theme || num == null || num == undefined) return;

	switch (num) {
		case 0:
			return theme.block1;
		case 1:
			return theme.block2;
		case 2:
			return theme.block3;
		case 3:
			return theme.block4;
		case 4:
			return theme.block5;
		default:
			return theme.block4; // Default highlight color
	}
}

export type Theme = {
	bg: string;
	bgDarker: string;
	highlight: string;
	text: string;
	textFaint: string;
	textDark: string;
	error: string;
	errorDarker: string;
	colorfulError: string;
	colorfulErrorDarker: string;
	block1: string;
	block2: string;
	block3: string;
	block4: string;
	block5: string;
};

export const themes: Record<string, Theme> = {
	terminal: {
		bg: 'hsl(210 3.8% 10.2%)',
		bgDarker: 'hsl(210 4.8% 8.2%)',
		text: 'hsl(78 19.2% 89.8%)',
		textFaint: 'hsl(220 2% 28.8%)',
		textDark: 'hsl(210 3.8% 10.2%)',
		error: 'hsl(0 75.7% 37.1%)',
		errorDarker: 'hsl(0 75.6% 25.7%)',
		colorfulError: 'hsl(0 75.7% 37.1%)',
		colorfulErrorDarker: 'hsl(0 75.6% 25.7%)',
		highlight: 'hsl(79 75.7% 37.1%)', // Base color
		block1: 'hsl(210 3.8% 10.2%)', // neutral - same as bg
		block2: 'hsl(79 75.7% 23.74%)', // - 5%
		block3: 'hsl(79 75.7% 29.68%)', // - 5%
		block4: 'hsl(79 75.7% 37.1%)', // Base color
		block5: 'hsl(79 75.7% 44.52%)', // + 5%
	},
	dar: {
		bg: 'hsl(210 3.8% 10.2%)',
		bgDarker: 'hsl(210 4.8% 8.2%)',
		text: 'hsl(78 19.2% 89.8%)',
		textFaint: 'hsl(220 2% 28.8%)',
		textDark: 'hsl(210 3.8% 10.2%)',
		error: 'hsl(0 75.7% 37.1%)',
		errorDarker: 'hsl(0 75.6% 25.7%)',
		colorfulError: 'hsl(0 75.7% 37.1%)',
		colorfulErrorDarker: 'hsl(0 75.6% 25.7%)',
		highlight: 'hsl(79 75.7% 37.1%)', // Base color
		block1: 'hsl(210 3.8% 10.2%)', // neutral - same as bg
		block2: 'hsl(79 75.7% 23.74%)', // - 5%
		block3: 'hsl(79 75.7% 29.68%)', // - 5%
		block4: 'hsl(79 75.7% 37.1%)', // Base color
		block5: 'hsl(79 75.7% 44.52%)', // + 5%
	},
	derk: {
		bg: 'hsl(210 3.8% 10.2%)',
		bgDarker: 'hsl(210 4.8% 8.2%)',
		text: 'hsl(78 19.2% 89.8%)',
		textFaint: 'hsl(220 2% 28.8%)',
		textDark: 'hsl(210 3.8% 10.2%)',
		error: 'hsl(0 75.7% 37.1%)',
		errorDarker: 'hsl(0 75.6% 25.7%)',
		colorfulError: 'hsl(0 75.7% 37.1%)',
		colorfulErrorDarker: 'hsl(0 75.6% 25.7%)',
		highlight: 'hsl(79 75.7% 37.1%)', // Base color
		block1: 'hsl(210 3.8% 10.2%)', // neutral - same as bg
		block2: 'hsl(79 75.7% 23.74%)', // - 5%
		block3: 'hsl(79 75.7% 29.68%)', // - 5%
		block4: 'hsl(79 75.7% 37.1%)', // Base color
		block5: 'hsl(79 75.7% 44.52%)', // + 5%
	},
	kom: {
		bg: 'hsl(210 3.8% 10.2%)',
		bgDarker: 'hsl(210 4.8% 8.2%)',
		text: 'hsl(78 19.2% 89.8%)',
		textFaint: 'hsl(220 2% 28.8%)',
		textDark: 'hsl(210 3.8% 10.2%)',
		error: 'hsl(0 75.7% 37.1%)',
		errorDarker: 'hsl(0 75.6% 25.7%)',
		colorfulError: 'hsl(0 75.7% 37.1%)',
		colorfulErrorDarker: 'hsl(0 75.6% 25.7%)',
		highlight: 'hsl(79 75.7% 37.1%)', // Base color
		block1: 'hsl(210 3.8% 10.2%)', // neutral - same as bg
		block2: 'hsl(79 75.7% 23.74%)', // - 5%
		block3: 'hsl(79 75.7% 29.68%)', // - 5%
		block4: 'hsl(79 75.7% 37.1%)', // Base color
		block5: 'hsl(79 75.7% 44.52%)', // + 5%
	},
};
