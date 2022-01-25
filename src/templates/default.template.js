import React from "react"
import {MDXProvider} from "@mdx-js/react"
import {Link} from "gatsby"
import OrderForm from "../ui/orderForm"

const shortcodes = {OrderForm, Link, wrapper: ({children}) => <>{children}</>}

const DefaultTemplate = ({children}) => (
	<MDXProvider components={shortcodes}>{children}</MDXProvider>
)

export default DefaultTemplate
