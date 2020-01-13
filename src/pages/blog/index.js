import React from 'react'

import Layout from '../../components/Layout'
import BlogRollAll from '../../components/BlogRollAll'

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
            className="has-text-weight-bold is-size-1 boxyBg"
          >
            Latest News
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRollAll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
