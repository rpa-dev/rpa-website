import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

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

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.heading || item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '100%',
                maxHeight: '350px',
                overflow: 'hidden',
                display: 'inline-block',
              }}
            >
              {item.heading && (<h3>{item.heading}</h3>)}
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <br/>
          {item.text && renderDescription(item.text)}
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
