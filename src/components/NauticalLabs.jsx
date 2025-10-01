import { Link } from 'react-router-dom'
import nauticalLogo from '../assets/NauticalLogo.png'
import './NauticalLabs.css'

function NauticalLabs() {
  return (
    <div className="nautical-landing">
      <div className="nautical-hero">
        <img src={nauticalLogo} alt="Nautical Labs Logo" className="nautical-logo" />
        <h1 className="nautical-title">Nautical Labs</h1>
        <p className="nautical-tagline">Fostering Innovation Through Applied Creativity</p>
        <div className="vision-mission-container">
          <div className="vision-section">
            <h2 className="section-title">Our Vision</h2>
            <p className="vision-text">
              To foster a global culture of innovation that builds tools for the mind and advances humankind.
            </p>
          </div>
          <div className="mission-section">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              Our mission is to assemble a dedicated, interdisciplinary team to solve a core challenge in personal flight. We will design, build, and test a proof-of-concept for a hovering propulsion system.
            </p>
          </div>
        </div>
        <div className="cta-buttons">
          <Link to="/nauticallabs/manifesto" className="cta-secondary">Manifesto</Link>
        </div>
      </div>
    </div>
  )
}

export default NauticalLabs

