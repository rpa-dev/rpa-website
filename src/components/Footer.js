import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import backgroundCut from '../../static/img/green-and-white-cut.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter" >
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Resurrection"
            style={{ width: '14em', height: '8em', position: 'relative', top: '258px', zIndex: 2 }}
          />
          <img src={backgroundCut} style={{width: '100%', height: '200px', position: 'relative', top: '100px', zIndex: 1}}/>
        </div>
        <div className="content has-text-centered has-background-lightgreen has-text-white-ter" style={{position: 'relative', top: '-0px'}}>
          <div className="container has-background-lightgreen has-text-white-ter"  >
            <div className="columns" style={{position: 'relative', zIndex: 1}}>
              <div className="column is-4"  >
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/programs">
                        Programs
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/admissions">
                        Admissions
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        News
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li/>
                    <div className="block-address">
                      <li className="has-text-weight-bold">Martha Foster, Director</li>
                      <li>6201 Washington Boulevard</li>
                      <li>Arlington, VA 22205</li>
                      <li><a className="link-address" href="tel:+17035386232">Phone: (703) 538-6232</a></li>
                      <li><a className="link-address" href="mailto:rlwp@copper.net">rlwp@copper.net</a></li>
                    </div>
                  </ul>
                </section>
              </div>
              <div className="column is-1 social">
                <a title="facebook" href="https://www.facebook.com/RLWPreschool/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
