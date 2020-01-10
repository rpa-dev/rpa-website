import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Testimonials from '../components/Testimonials'

function getTestimonials() {
  return [{
    quote: '"We have had a wonderful experience at this school. Thoughtful teachers, welcoming space, playground and community of families. Includes Spanish, movement and music enrichment thru a play-based model. My kids have loved this preschool."'
  }]
}

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient about-us">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
          
            <Testimonials testimonials={getTestimonials()} />
            
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
      }
    }
  }
`
