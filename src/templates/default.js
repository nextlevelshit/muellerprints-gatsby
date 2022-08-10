import React from "react"
import Meta from "../components/meta"
import Header from "../components/header"
import Footer from "../components/footer"
import "./main.css"

import { MDXRenderer } from "gatsby-plugin-mdx"

const DefaultTemplate = ({ location, pageContext: { body, description, title, fading, background, layout } }) => {
	return (
		<article className={`${fading && "fading"} canvas-${background}`}>
			<Meta pageSEO={{ title, description }} />
			<Header title={title} color={background} pagination={layout === "pagination"} location={location} />

			<main>
				<div className="container">
					<MDXRenderer>{body}</MDXRenderer>
				</div>
			</main>

			<Footer />
		</article>
	)
}

export default DefaultTemplate
