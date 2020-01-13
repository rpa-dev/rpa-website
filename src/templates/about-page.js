import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Testimonials from '../components/Testimonials'

export const AboutPageTemplate = ({ title, testimonials, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient about-us">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
          
            <Testimonials testimonials={testimonials} />
            
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
            
            <div className="column is-12 has-text-centered">
              <Link className="btn" to="/admissions">
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  testimonials: PropTypes.array,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        testimonials={post.frontmatter.testimonials}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        testimonials {
          author
          quote
        }
      }
    }
  }
`
