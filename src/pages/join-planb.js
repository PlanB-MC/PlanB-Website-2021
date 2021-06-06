import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import FloatingBar from '../components/floating-bar/floating-bar.component'
import {
  ContentContainer,
  HeaderImage,
  JoinContainer,
} from '../page-style/join-planb.styles'
import HowToApply from '../components/how-to-apply/how-to-apply.component'
import Application from '../components/application/application.component'

const JoinPlanB = (props) => {
  const search_params =
    typeof window === 'undefined' || !window.document
      ? null
      : new URL(document.location).searchParams
  const params = search_params
    ? {
        duuid: search_params.get('duuid'),
        discrim: search_params.get('discrim'),
        uname: search_params.get('uname'),
      }
    : {}

  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <Helmet title={`Join The Community   |   ${siteTitle}`} />
      <HeaderImage />
      <ContentContainer>
        <FloatingBar
          title={!params.duuid ? 'Join The Community!' : `Apply To Join PlanB`}
        />

        {params.duuid ? <Application params={params} /> : <HowToApply />}
      </ContentContainer>
    </Layout>
  )
}

export default JoinPlanB

export const pageQuery = graphql`
  query JoinQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
