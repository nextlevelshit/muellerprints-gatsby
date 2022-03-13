const path = require("path")
const slugify = require("slug")
const config = require("./config/site-config")

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	const resolveTemplate = (template) => path.resolve(`src/templates/${template}.js`)
	const component = path.resolve("src/templates/default.js")

	return graphql(`
    query allPagesQuery {
      allMdx {
        nodes {
			body
			slug
			frontmatter {
			  background
			  description
			  layout
			  navigation
			  order
			  robots
			  title
			}
		  }
      }
    }
  `).then(result => {
		if (result.errors) {
			throw result.errors
		}

		result.data.allMdx.nodes.forEach(({ frontmatter, body, slug  }) => {
			createPage({
				path: slug || "/",
				component,
				context: {
					...frontmatter,
					body
				}
			})
		})
	})
}
