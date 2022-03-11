const config = require(`./config/site.config.js`);
const pathPrefix = config.pathPrefix === `/` ? `` : config.pathPrefix;

module.exports = {
	siteMetadata: {
		siteUrl: config.siteUrl + pathPrefix,
	},
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
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
				icon: config.favicon,
			},
		},
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
					}`
			}
		},
        {
            resolve: "gatsby-source-filesystem",
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }, {
            resolve: "gatsby-source-filesystem",
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: "./src/pages",
            },
        },
        {
            resolve: "gatsby-plugin-mdx"
        }
    ]
};
