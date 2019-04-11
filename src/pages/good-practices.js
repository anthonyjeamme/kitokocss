import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 className="measure">Good practices</h1>

    <section className="measure">
      <h2>Grid is a guide, not a restraint</h2>

      <p>
        Sometimes, some images sizes can't be controlled to stick the grid.
        Some components like hero fullheight aren't aligned the the grid too. Just let it be.
      </p>
    </section>
    <section className="measure">
      <h2>A website content is like a song</h2>

      <p>
        Typography give to your website content a rythmic.
        Your visitor should eat your content, you have to make the read as fluid as possible.
        The typefaces you choose are important but most important are the width of your paragraphs,
        size/weight and the space between lines should be your main focus.
      </p>
    </section>
  </Layout>
)

export default SecondPage
