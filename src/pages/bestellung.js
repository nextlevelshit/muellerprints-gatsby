import * as React from "react"
import { graphql } from "gatsby"

/**
 * UniquePage
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const BestellungPage = (props) => {
	console.log(props)

	return (
		<main>
			<title>Bestellung</title>

			<article>
				<h1>Bestellung</h1>
			</article>
		</main>
	)
}

export const query = graphql`
	query BestellungPageQuery {
		site {
			siteMetadata {
				description
			}
		}
	}
`

export default BestellungPage
