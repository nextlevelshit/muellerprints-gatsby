import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { useEffect, useState } from "react";
import { examples } from "../../../config/beispiele";

const ExamplePage = ({ params: { id = "0" } }) => {
	const [displayedExample, setDisplayedExample] = useState({ title: "", description: "", links: [], images: [] })

	useEffect(() => {

		setDisplayedExample(examples.find((_, i) => i === parseInt(id)))
	}, [id])

	return (
		<>
			{displayedExample && <article>
				<h2>{displayedExample.title}</h2>
				{displayedExample.description}
				{/*<ul>*/}
				{/*	{displayedExample.images?.map((src, key) => <li key={`image_${key}`}><StaticImage src={src} alt={displayedExample.title}/></li>)}*/}
				{/*</ul>*/}
			</article>}

			Selected:
			<pre>{JSON.stringify(displayedExample, null, 2)}</pre>
		</>
	)
}

export default ExamplePage
