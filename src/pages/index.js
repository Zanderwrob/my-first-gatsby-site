// Step 1: Import React
import * as React from 'react'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>Da Home Page :D</p>
        <StaticImage
        alt="Wild Scrible"
        src="../images/wiloBanner.png"
        />
      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage