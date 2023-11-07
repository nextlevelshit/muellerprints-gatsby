import * as React from "react"
import config from "../../config/site-config"
import { graphql, useStaticQuery } from "gatsby"

const Header = ({ title: pageTitle, color, pagination, location }) => {
	const isActivePagination = (int) => location?.pathname.indexOf(int) >= 0 ?? false

	const {
		allMdx: { nodes }
	} = useStaticQuery(graphql`
		query navigationQuery {
			allMdx(
				filter: { frontmatter: { navigation: { ne: null }, order: { ne: null } } }
				sort: { fields: frontmatter___order }
			) {
				nodes {
					slug
					frontmatter {
						background
						description
						badge
						navigation
						title
					}
				}
			}
		}
	`)

	const navigation = nodes.map(({ slug, frontmatter }) => ({
		slug,
		...frontmatter
	}))



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
							<button
								className={`navbar-mobile navbar-mobile-menu ${color && `text-${color}`}`}
								data-toggle="collapse"
								data-target="#navbar"
								aria-expanded="false"
								aria-controls="navbar"
							>
								<span className="glyphicon glyphicon-menu-hamburger" />
							</button>
							<div className={`navbar-brand text-${color}`}>{pageTitle ?? config.siteBrand}</div>
						</div>
					</div>
				</div>
				{/* DESKTOP ONLY */}
				<div id="navbar" className="collapse navbar-collapse" aria-expanded="false">
					<ul className="nav navbar-nav">
						{navigation.map((nav, i) => (
							<li
								key={i}
								className={`navbar-nav-${nav.background} ${nav.title === pageTitle && "active"}`}
							>
								<a href={`/${nav.slug}`}>
									<div dangerouslySetInnerHTML={{ __html: nav.navigation }} />
									{nav.badge && <span className="badge">{nav.badge}</span>}
								</a>

								{pagination && nav.slug.match(/beispiele/) && <ul className={"navbar-mobile-pagination"}>
									<ul className={"navbar-logo-pagination"}>
										{[...Array(9).keys()].slice(1).map((i) => <li key={i} className="navbar-mobile-pagination-item">
											{isActivePagination(i) ? <span>{i}</span> : <a href={`/beispiele/${i}`}>{i}</a>}
										</li>)}
									</ul>
								</ul>}
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="navbar-logo">
				<div className="container">
					<div className={`navbar-logo-text text-${color}`}>{pageTitle ?? config.siteBrand}</div>
					{pagination && <ul className="navbar-logo-pagination">

						{[...Array(9).keys()].slice(1).map((i) => <li key={i} className="navbar-logo-pagination-item">
							{isActivePagination(i) ? <span>{i}</span> : <a href={`/beispiele/${i}`}>{i}</a>}
						</li>)}
					</ul>}
				</div>
			</div>
		</nav>
	)
}

export default Header
