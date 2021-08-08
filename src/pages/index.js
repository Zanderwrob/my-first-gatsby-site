// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>Da Home Page :D</p>
      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage