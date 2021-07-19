import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ReactorkutStyles } from "../src/lib/ReactorkutCommons";


const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		background-color: #D9E6F6;
	}

	#__next{
		min-height: 100vh;
		display: flex;
		flex-direction: column
	}

	img {
		max-width: 100%;
		height: auto;
		display: block;
	}

	${ReactorkutStyles}
`;

const theme = {
	colors: {
		primary: "#0070f3",
	},
};

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
