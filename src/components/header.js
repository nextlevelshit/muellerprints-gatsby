import * as React from "react"
import config from "../../config/site-config"
import { graphql, useStaticQuery } from "gatsby"

const Header = ({ title: pageTitle }) => {
	const { allMdx: { nodes } } = useStaticQuery(graphql`
		query navigationQuery {
		  allMdx(
			filter: {frontmatter: {navigation: {ne: null}, order: {ne: null}}}
			sort: {fields: frontmatter___order}
		  ) {
			nodes {
			  slug
			  frontmatter {
			  	background
			  	badge
				description
				title
			  }
			}
		  }
		}
	`)

	const navigation = nodes.map(({ slug, frontmatter: { background, description, title }}) => ({ background, description, slug, title }))

	return (
		<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">

			{/* <div class="navbar-logo">
			  <div class="container">
				<a href="//www.muellerprints.de">MUELLERPRINTS.</a>
			  </div>
			</div> */}

			<div className="container">
				{/* MOBILE ONLY */}

				<div className="navbar-header">
					<div className="row">
						<div className="col-xs-12">
							<a className="navbar-mobile navbar-mobile-menu {% if page.background %}text-{{ page.background }}{% endif %}" data-toggle="collapse"
							   data-target="#navbar" aria-expanded="false" aria-controls="navbar">
								<span className="glyphicon glyphicon-menu-hamburger"/>
								<small>Menü</small>
							</a>
							<div className="navbar-brand {% if page.background %}text-{{ page.background }}{% endif %}">
								{pageTitle ?? config.siteBrand}
							</div>
						</div>
					</div>

				</div>
				{/* DESKTOP ONLY */}
				<div id="navbar" className="collapse navbar-collapse" aria-expanded="false">
					<ul className="nav navbar-nav">
						{navigation.map((nav, i) => (
							<li key={i} className={`navbar-nav-${nav.background} ${nav.title === pageTitle && "active"}`}>
								<a href={`/${nav.slug}`}>
									{nav.title}
									{nav.badge && <span className="badge">{nav.badge}</span>}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>


			<div className="navbar-logo">

				<div className="container">
					<div className="navbar-logo-text {% if page.background %}text-{{ page.background }}{% endif %}">
						{pageTitle ?? config.siteBrand}
					</div>
				</div>

			</div>
		</nav>
	)
}

export default Header
