import * as React from "react"
import Lottie from "react-lottie"
import * as lottie404 from "../lottie/lottie404.json"

import Layout from "../components/layout/Layout"
import Seo from "../components/seo/Seo"

const NotFoundPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <Layout>
      <Seo title="404: Not found" />
      <Lottie options={defaultOptions} height={200} width={320} />
    </Layout>
  )
}

export default NotFoundPage
