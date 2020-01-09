import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Gallery from '../components/Gallery'

const FeatureGrid = ({ gridItems }) => (
  <div className="tile is-ancestor">
  <div class="tile is-vertical is-9">
    {gridItems.map(item => (
      <div key={item.text} className="tilee">
        <section className="tile is-parent">
          <div className="tile is-child box has-text-centered">
              <PreviewCompatibleImage imageInfo={item} />
          </div>
          {item.text && (<p>{item.text}</p>)}
        </section>
      </div>
    ))}
    </div>
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
