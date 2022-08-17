import React from "react"

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
	setHeadComponents([
		// <link key={0} rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css"
		// 	  integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
		// 	  crossOrigin="anonymous" />
	])
	setPostBodyComponents([
		<script key={0} src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"
				integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"
				defer></script>,
		<script key={1} src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"
				integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
				crossOrigin="anonymous" defer></script>
	])
}
