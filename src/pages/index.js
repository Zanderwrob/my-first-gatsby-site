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
        src="https://i.pinimg.com/236x/ff/81/2d/ff812df7e425bcff4fb92e578e139f83.jpg"
        />
      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage