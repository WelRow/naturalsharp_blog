import { useNavigate } from 'react-router-dom'
import slogo2 from '../assets/slogo2.png'

function Logo() {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <div className="logo-container">
      <img 
        src={slogo2} 
        alt="Logo" 
        className="logo-image"
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}
      />
    </div>
  )
}

export default Logo 