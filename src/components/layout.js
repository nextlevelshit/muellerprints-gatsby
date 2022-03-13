import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

import "./main.css"

const Layout = ({ children, title, description }) => {
	return (
		<>
			<SEO pageSEO={{ title, description }} />
			<Header title={title} />

			<main>
				<article>{children}</article>
			</main>

			<Footer />
		</>
	)
}

export default Layout
