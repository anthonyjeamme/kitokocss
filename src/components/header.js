import PropTypes from 'prop-types'
import React from 'react'

const Header = () => (
  <header>
    <nav className='navbar background-primary'>
      <div className="navbar-container">
        <div className="navbar-start">
          <div className="navbar-item">
            <small>
              <i className="fas fa-flag"></i> {' '}
              Getting Started
            </small>
          </div>

          <div className="navbar-item">
            <small>
              <i className="fas fa-book"></i> {' '}
              Docs
            </small>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <a href="https://github.com/tonyjahim/kitokocss" rel="noopener noreferrer" target='_blank'>
              <i className="fab fa-github fa-2x" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
