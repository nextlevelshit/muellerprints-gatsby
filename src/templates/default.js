import React from "react"
import Meta from "../components/meta"
import Header from "../components/header"
import Footer from "../components/footer"

import "./main.css"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Helmet from "react-helmet"

const DefaultTemplate = ({ location, pageContext: { body, description, title, fading, background } }) => {
	return (
		<>
			<Meta pageSEO={{ title, description }} />
			<Header title={title} color={background} />

			<main className={`${fading && "fading"} canvas-${background}`}>
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
		</>
	)
}

export default DefaultTemplate
