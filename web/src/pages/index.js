import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {useSpring, animated} from 'react-spring'
import {Spring} from 'react-spring/renderprops'
import Toggle from '../components/Toggle'

function IndexPage(){
  const props = useSpring({ config: { duration: 500 }, opacity: 1, from: {opacity: 0}})
  
  return (
    <animated.div style={props}>
      <Layout>
        <SEO title="Home" />
        <Toggle />
        <p>This website is here to try and test some fun components + learn some new css.</p>
      </Layout>
    </animated.div>
  )
}

export default IndexPage
