module.exports = {
    siteMetadata: {
        title: `MUELLERPRINTS.`,
        siteUrl: `https://muellerprints.de/`
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
        // {
        //     resolve: "gatsby-plugin-mdx",
        //     options: {
        //         defaultLayouts: {
        //             // default: require.resolve("./src/templates/default.template.js"),
        //         },
        //     },
        // }
    ]
};
