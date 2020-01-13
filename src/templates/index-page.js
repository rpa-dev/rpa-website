import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import map from 'lodash/map';
import get from 'lodash/get';
import compact from 'lodash/compact';

import Layout from '../components/Layout'
import BlogRollFeatured from '../components/BlogRollFeatured'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'

function getTestimonials() {
  return [{
    quote: '"We have attended this preschool for 7 years with my third child there now.  We have had such an amazing experience.  The teachers have taught my kids so much about kindness and caring while giving them a great educational experience.  My older kids were more then ready for Kindergarten and still love going back to see their teachers with their younger sister."'
  }]
}

function getImages(blurbs) {
  return compact(map(blurbs, b => {
    const img = get(b, 'image.childImageSharp.fluid');
    return { caption: get(b, 'text'), ...img };
  }));
}

function renderDescription(txt = '', delim=";;") {
  const [firstPart = '', ...parts] = txt.split(delim);
   
  return (
    <div>
      {firstPart}
      <ul>
        {parts.map((t) => (<li key={t}>{t}</li>))}
      </ul>
    </div>
  );
}

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
  main2
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '250px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen boxyBg"
        >
          {title}
        </h1>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <p>{description}</p>
                    <div className="column is-12 has-text-centered">
                      <Link className="button" to="/about">
                        About Us
                      </Link>
                    </div>
                  </div>
                </div>
                <Gallery itemsPerRow={[2,5]} images={getImages(intro.blurbs)} />
                <h3/>
                <Testimonials testimonials={getTestimonials()} />
                <h3/>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/admissions">
                      Join Our Community
                    </Link>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {main.heading}
                  </h3>
                  {renderDescription(main.description)}
                  </div>
                </div>
                <div className="column is-12 has-text-centered">
                  <Link className="button" to="/programs">
                    See Our Programs
                  </Link>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {main2.heading}
                    </h3>
                    <BlogRollFeatured />
                    <div className="column is-12 has-text-centered">
                      <Link className="button" to="/blog">
                        More For Current Parents
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.object,
  main2: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        main2={frontmatter.main2}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
        }
        main2 {
          heading
          description
        }
      }
    }
  }
`
