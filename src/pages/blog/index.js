import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import COLORS from '../../utils/colors'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: `0.5rem 0 0 ${COLORS.primaryLight}, -0.5rem 0 0 ${COLORS.primaryLight}`,
              backgroundColor: `${COLORS.primaryLight}`,
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest News
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
