import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import Layout from "../components/layout/Layout";

const theme = {
	color: {
		primary: "#f0f0f0"
	}
};

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<ThemeProvider theme={theme}>
					<>
						<GlobalStyle />
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</>
				</ThemeProvider>
			</Container>
		);
	}
}

export default MyApp;
