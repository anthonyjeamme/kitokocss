import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Logo from "../../assets/logo.svg";

const IndexPage = () => {

  const [showGrid, setShowGrid] = useState(false)

  const toggleShowGrid = () => {
    setShowGrid(!showGrid)
  }

  return (
    <Layout className={`${showGrid && 'grid'}`}>
      <SEO title="Kitoko CSS" keywords={[`css`, `framework`, `typography`]} />

      <button className="top-4 right-1 danger" onClick={() => {

        toggleShowGrid()
      }} style={{ position: 'absolute' }}>{
          showGrid ? 'hide' : 'Behind the scene'
        }</button>

      <article className='text-center'>

        <div className='hero'>

          <div className="hero-body">

            <figure className="height-4 padding-1" style={{ backgroundColor: showGrid && 'rgba(256,256,200,0.4)' }}>
              <Logo style={{ height: '100%' }} />
            </figure>

            <h1
              className="margin-top-0 title color-info text-center"
              style={{ fontWeight: '900 !important', backgroundColor: showGrid && 'rgba(200,256,256,0.4)' }}
            >KitokoCSS</h1>

            <p className="subtitle" style={{ backgroundColor: showGrid && 'rgba(256,200,256,0.4)' }}>
              The Typography Based CSS Framework
            </p>

            <code className="text-lef" style={{
              width: 350,
              margin: 'auto',
              background: '#444',
              color: '#eee',
              borderRadius: 8,
              border: '2px solid #fff',
              boxShadow: '0 0 10px #000000AA inset'
            }}
            >
              npm install --save kitoko-css
        </code>

          </div>
        </div>

      </article>

      <div className="hero small background-primary">

        <div className="hero-body text-center">

          <article className="measure margin-auto">

            <h2>Everything is simpler</h2>

            <p>
              95% of the web is text. It's the reason why we have to care about how to present text properly.
            </p>

            <p>
              First set your typography parameters (typeface, line height, line width and font size) and then build your amazing website with proportions based on these parameters.
            </p>

          </article>

        </div>

      </div>
      <div className="hero small">

        <div className="hero-body text-center">

          <article className="measure margin-auto">

            <h2>Everything you need in one framework</h2>

            <p>

              There is plenty of amazing other CSS Frameworks out there. But with Kitoko you don't need them. Everything you need to build a wonderful website is included.

</p>
          </article>
        </div>
      </div>

      <div className="hero small background-primary">

        <div className="hero-body text-center">

          <article className="measure margin-auto">

            <h2>You don't need to be an expert in Typography to use KitokoCSS</h2>

            <p>
              Typography exists since centuries and good practices emerged.
              KitokoCSS helps you to implements these good practices.
              You only need to know some principles to produce a good typographed website
            </p>

            <p>
              If you are more advanced in typography, KitokoCSS will also help you with advanced parameters.
            </p>
          </article>
        </div>
      </div>


      <section className="hero small background-info">

        <div className="hero-body text-center">

          <article className="measure margin-auto">

            <h2>What is included ?</h2>

            <p>
              Heros, columns, forms, box, progressbar, table, tags and so on !
            </p>

          </article>

        </div>

      </section>

      <div className="hero small">

        <div className="hero-body text-center">

          <section className="measure margin-auto">

            <h2 className="text-center">Just try in a minute !</h2>

            <code className="margin-1-auto text-center" style={{
              width: 300,
              background: '#444',
              color: '#eee',
              border: 0,
            }}
            >
              npm install --save kitoko-css
        </code>
          </section>

        </div>

      </div>


    </Layout >
  )
}

export default IndexPage
