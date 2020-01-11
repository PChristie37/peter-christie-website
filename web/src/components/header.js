import { Link } from "gatsby"
import PropTypes from "prop-types"
import React,{ useState } from "react"
import { useSpring, animated } from "react-spring"

const Header = ({ siteTitle }) => {
  const [isToggled, setToggle] = useState(false)
  const fade = useSpring({
      margin:0,
      fontSize: isToggled ? 48 : 72,
      background:"linear-gradient(to right, #ff8a00 0%, #da1b60 100%)",
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
  })
  return(
    <header
      style={{
        background: `#324275`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <animated.h1 style={fade}>
          <Link
            onClick={()=>setToggle(!isToggled)}
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </animated.h1>
      </div>
    </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
