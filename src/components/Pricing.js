import React from 'react'
import PropTypes from 'prop-types'

function renderParagraphDescription(txt = '', delim=";;") {
  const parts = txt.split(delim);
   
  return (
    <div>
        {parts.map((t) => (<div key={t}>{t}</div>))}
    </div>
  );
}

const Pricing = ({ data }) => (
  <div className="rows">
    {data.map(price => (
      <div key={price.plan + price.description} className="columns has-text-centered">
        <section className="column is-size-4 has-text-weight-semibold">
            {price.plan}
        </section>
        <div className="column has-text-weight-semibold">{renderParagraphDescription(price.description)}</div>
        <div className="column is-size-4 has-text-weight-bold has-text-primary">
          ${price.price}
        </div>
        <br/>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
    })
  ),
}

export default Pricing
