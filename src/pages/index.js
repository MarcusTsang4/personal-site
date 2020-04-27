import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="My Personal Portfolio | Marcus Tsang" />
    <h1>Marcus Tsang</h1>
    <p>Software developer</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">About Me</Link>
  </Layout>
)

export default IndexPage
