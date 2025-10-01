import { Link } from 'react-router-dom'
import nauticalLogo from '../assets/NauticalLogo.png'
import './NauticalLabs.css'

function NauticalLabs() {
  return (
    <div className="nautical-landing">
      <div className="nautical-hero">
        <img src={nauticalLogo} alt="Nautical Labs Logo" className="nautical-logo" />
        <h1 className="nautical-title">Nautical Labs</h1>
        <p className="nautical-tagline">Navigating Innovation through Effort</p>
        <div className="vision-mission-container">
          <div className="vision-section">
            <h2 className="section-title">Our Vision</h2>
            <p className="vision-text">
              To foster and create a worldwide culture of innovation and applied creativity by building a global network of student-led innovation hubs.
            </p>
          </div>
          <div className="mission-section">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              Our mission is to unite student engineers and designers at UNC Charlotte to execute the ambitious, project-based work that represents the next step to more meaningful research and development.
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

