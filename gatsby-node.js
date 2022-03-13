const path = require("path")
const slug = require("slug")

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	const resolveTemplate = (template) => path.resolve(`src/templates/${template}.js`)

	return graphql(`
    query allPagesQuery {
      allMdx {
        nodes {
			body
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

		result.data.allMdx.nodes.forEach(({ frontmatter, body  }) => {
			createPage({
				path: "landingpage" === frontmatter.layout ? "/" : slug(frontmatter.title),
				component: resolveTemplate(frontmatter.layout),
				context: {
					...frontmatter,
					body
				}
			})
		})
	})
}
