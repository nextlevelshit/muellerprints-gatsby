import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

import "./main.css"
import { MDXRenderer } from "gatsby-plugin-mdx"

const LandingpageTemplate = ({ location, pageContext: { body, description, title, fading, background } }) => {

	return (
		<main className={`${fading && "fading"} canvas-${background}`}>
			<SEO pageSEO={{ title, description }} />

			<Header title={title} />

			<MDXRenderer>
				{body}
			</MDXRenderer>

			<Footer />
		</main>
	)
}

export default LandingpageTemplate
