const config = require("./config/site-config")
const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix

module.exports = {
	siteMetadata: {
		siteUrl: config.siteUrl + pathPrefix
	},
	plugins: [
		{
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "pages",
				"path": "./pages/"
			},
			__key: "pages"
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		},
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-plugin-mdx",
		{
			resolve: "gatsby-plugin-sitemap",
			options: {
				output: `/sitemap.xml`,
				exclude: [],
				query: `
					{
						site {
							siteMetadata {
								siteUrl
							}
						}
						allSitePage {
							nodes {
								path
							}
						}
					}
				`
			}
		},
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: config.siteTitleAlt,
				short_name: config.siteTitlePrefix,
				description: config.siteDescription,
				start_url: config.pathPrefix,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: "standalone",
				icon: config.favicon
			}
		}
	]
}
