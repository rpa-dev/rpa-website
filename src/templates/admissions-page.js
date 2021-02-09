import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Content, { HTMLContent } from '../components/Content';
import { v4 } from 'uuid';

function renderDescription(txt = '', delim = ';;') {
  const [firstPart = '', ...parts] = txt.split(delim);

  return (
    <div>
      {firstPart}
      <ul>
        {parts.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

function renderParagraphDescription(txt = '', delim = ';;', newline = 'nl') {
  const parts = txt.split(delim);

  return (
    <div>
      {parts.map(t => (
        <div key={v4()}>{t === newline ? <br /> : t}</div>
      ))}
    </div>
  );
}

function renderMainDescription(txt = '', delim = ';;', newline = 'nl') {
  const [firstPart = '', ...parts] = txt.split(delim);

  return (
    <div className="has-text-centered">
      <div className="has-text-weight-bold is-size-4">{firstPart}</div>
      <br />
      {parts.map(t => (
        <div key={t}>
          {t === newline ? <div style={{ lineHeight: '8px' }}>&nbsp;</div> : t}
        </div>
      ))}
    </div>
  );
}

export const AdmissionsPageTemplate = ({
  content,
  contentComponent,
  image,
  title,
  heading,
  description,
  main,
  testimonials,
  fullImage,
  pricing,
  disclaimer
}) => {
  const PageContent = contentComponent || Content;

  const isShowingDownloadForm = false;

  return (
    <div className="content">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`
        }}
      >
        <h2 className="has-text-weight-bold is-size-1 boxyBg">{title}</h2>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
                {renderDescription(description)}
              </div>
            </div>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h2 className="has-text-weight-semibold is-size-2">
                  {pricing.heading}
                </h2>
                <Pricing data={pricing.plans} />
                <br />
                {isShowingDownloadForm && (
                  <div>
                    <div className="column is-12 has-text-centered">
                      <a
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={pricing.form_url}
                        title="Link to download the Registration PDF Form"
                      >
                        Download Registration Form
                      </a>
                    </div>
                    <br />
                  </div>
                )}
                {renderParagraphDescription(pricing.description)}
                <br />
                <h5>
                  <i>{disclaimer}</i>
                </h5>
                <div
                  className="full-width-image-container"
                  style={{
                    backgroundImage: `url(${
                      fullImage.childImageSharp
                        ? fullImage.childImageSharp.fluid.src
                        : fullImage
                    })`,
                    backgroundPosition: `top left`,
                    backgroundAttachment: `fixed`
                  }}
                />
                <h3 />
                <Testimonials testimonials={testimonials} />
                <h3 />
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main.heading}
                    </h3>
                    <div className="has-secondary-text">
                      {renderMainDescription(main.description)}
                    </div>
                  </div>
                </div>
                <PageContent className="content" content={content} />
                {isShowingDownloadForm && (
                  <div className="column is-12 has-text-centered">
                    <a
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={pricing.form_url}
                      title="Link to download the Registration PDF Form"
                    >
                      Download Registration Form
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AdmissionsPageTemplate.propTypes = {
  content: PropTypes.node,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array
  }),
  disclaimer: PropTypes.string
};

const AdmissionsPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <AdmissionsPageTemplate
        contentComponent={HTMLContent}
        content={html}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
        disclaimer={frontmatter.disclaimer}
      />
    </Layout>
  );
};

AdmissionsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.node,
      frontmatter: PropTypes.object
    })
  })
};

export default AdmissionsPage;

export const productPageQuery = graphql`
  query AdmissionsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
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
        description
        main {
          heading
          description
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          form_url
          plans {
            description
            plan
            price
          }
        }
        disclaimer
      }
    }
  }
`;
