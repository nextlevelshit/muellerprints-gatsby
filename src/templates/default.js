import React from "react"
import Meta from "../components/meta"
import Header from "../components/header"
import Footer from "../components/footer"

import "./main.css"
import { MDXRenderer } from "gatsby-plugin-mdx"

const DefaultTemplate = ({ location, pageContext: { body, description, title, fading, background, robots, layout } }) => {
	return (
		<article className={`${fading && "fading"} canvas-${background}`}>
			<Meta pageSEO={{ title, description }} />
			<Header title={title} color={background} pagination={layout === "pagination"} />

			<main>
				<div className="container">
					<MDXRenderer>{body}</MDXRenderer>
				</div>
			</main>

			<Footer />
			<script type="text/javascript" src="/libs/jquery.min.js" />
			<script type="text/javascript" src="/libs/bootstrap.min.js"/>
			<script type="text/javascript" src="/libs/bootstrap-select.js" />
			<script type="text/javascript" src="/libs/bootstrap-datepicker.min.js" />
			<script type="text/javascript" src="/libs/bootstrap-datepicker.de.min.js" />
			<script type="text/javascript" src="/scripts/scroll-top.js" />
			<script type="text/javascript" src="/scripts/send-inquiry.js" />
			<script type="text/javascript" src="/scripts/send-checklist.js" />
			<script type="text/javascript" src="/scripts/hardcover-calculation.js" />
		</article>
	)
}

export default DefaultTemplate
