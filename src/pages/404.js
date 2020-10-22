import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <h1>PAs de pizza par ici!</h1>
    <a href='/'>Revenir à la page d'accueil</a>
  </Layout>
)

export default NotFoundPage
