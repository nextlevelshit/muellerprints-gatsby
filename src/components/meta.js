import React from "react"
import Helmet from "react-helmet"
import config from "../../config/site-config"

const Meta = ({ pagePath = "", pageSEO }) => {
	let title
	let description
	let image
	const prefix = config.pathPrefix === "/" ? "" : config.pathPrefix
	const baseUrl = config.siteUrl + prefix
	const url = baseUrl + pagePath

	title = pageSEO?.title ? `${config.siteTitlePrefix} ${pageSEO.title}` : config.siteTitleAlt
	description = pageSEO?.description ?? config.siteDescription
	image = baseUrl + (pageSEO?.image ?? config.siteBanner)

	const schemaOrgJSONLD = [
		{
			"@context": "http://schema.org",
			"@type": "WebSite",
			"@id": url,
			url,
			name: title,
			description: config.siteDescription,
			alternateName: config.siteTitleAlt ?? "",
			author: {
				"@type": "Person",
				name: config.siteAuthor,
			},
			publisher: {
				"@type": "Organization",
				name: config.siteAuthor,
				logo: {
					"@type": "ImageObject",
					url: baseUrl + config.siteLogo,
				},
			},
			isPartOf: baseUrl,
			mainEntityOfPage: {
				"@type": "WebSite",
				"@id": url,
			},
		},
	]

	return (
		<Helmet>
			<html lang={config.siteLanguage} />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="image" content={image} />
			<script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
			<meta property="og:locale" content={config.siteLanguage} />
			<meta property="og:site_name" content={config.siteBrand ?? ""} />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:type" content={"website"} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta name="twitter:card" content={"summary_large_image"} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:url" content={url} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
			/>
			{/* Matomo */}
			<script type="text/javascript"
					dangerouslySetInnerHTML={{
						__html: `
							var _paq = window._paq || [];
							/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
							_paq.push(['trackPageView']);
							_paq.push(['enableLinkTracking']);
							(function() {
							var u="//picasso.uber.space/matomo/";
							_paq.push(["setTrackerUrl", u+"matomo.php"]);
							_paq.push(["setSiteId", "2"]);
							var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0];
							g.type="text/javascript"; g.async=true; g.defer=true; g.src=u+"matomo.js"; s.parentNode.insertBefore(g,s);
						})
						();
						`
					}}
			/>
			{/* End Matomo Code */}

		</Helmet>
	)
}

export default Meta
