import { useParams } from 'react-router-dom'
import Logo from './Logo'
import NavigationTabs from './NavigationTabs'
import IMG_8407 from '../assets/IMG_8407.jpeg'

function MonthlyPage() {
  const { year, month } = useParams()
  
  const formatMonth = (monthStr) => {
    return monthStr.charAt(0).toUpperCase() + monthStr.slice(1).toUpperCase()
  }

  const getCurrentDate = () => {
    const today = new Date()
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
    
    const dayName = days[today.getDay()]
    const monthName = months[today.getMonth()]
    const date = today.getDate()
    const year = today.getFullYear()
    
    return `${dayName}, ${monthName} ${date}, ${year}`
  }

  return (
    <div className="app-container">
      <div className="header">
        <Logo />
      </div>
      <NavigationTabs />
      <div className="monthly-content">
        <div className="images-container">
          <img src={IMG_8407} alt="Project Image" className="content-image" />
        </div>
        <div className="post-info">
          <div className="post-subtitle">face reveal</div>
          <div className="post-date">{getCurrentDate()}</div>
          <div className="post-title">This a software company btw</div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyPage 