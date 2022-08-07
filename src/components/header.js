import * as React from "react"
import config from "../../config/site-config"
import { graphql, useStaticQuery } from "gatsby"

const Header = ({ title: pageTitle, color, pagination }) => {
	const {
		allMdx: { nodes },
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
						badge
						description
						navigation
						title
					}
				}
			}
		}
	`)

	const navigation = nodes.map(({ slug, frontmatter }) => ({
		slug,
		...frontmatter,
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
								<small>Menü</small>
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
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="navbar-logo">
				<div className="container">
					<div className={`navbar-logo-text text-${color}`}>{pageTitle ?? config.siteBrand}</div>
					{pagination && <ul className="navbar-logo-pagination">

						<li className="navbar-logo-pagination-item">

							<span>1</span>

						</li>

						<li className="navbar-logo-pagination-item">

							<a href="/beispiele/2">2</a>

						</li>

						<li className="navbar-logo-pagination-item">

							<a href="/beispiele/3">3</a>

						</li>

						<li className="navbar-logo-pagination-item">

							<a href="/beispiele/4">4</a>

						</li>

						<li className="navbar-logo-pagination-item">

							<a href="/beispiele/5">5</a>

						</li>

						<li className="navbar-logo-pagination-item">

							<a href="/beispiele/6">6</a>

						</li>

						<li className="navbar-logo-pagination-item">

							<a href="/beispiele/7">7</a>

						</li>

					</ul>}
				</div>
			</div>
		</nav>
	)
}

export default Header
