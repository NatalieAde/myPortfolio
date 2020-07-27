import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import header2 from "../components/header2"

const IndexPage = () => (
  // <Layout>
    <div>
      <SEO title="Home" />
    
      <header2 />
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div> */}
      <Link to="/about/">About</Link> <br />
    </div>
    
  // </Layout>
)

export default IndexPage
