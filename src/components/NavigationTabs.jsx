import { useNavigate } from 'react-router-dom'

function NavigationTabs() {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear()
  const months = [
    { name: 'JULY', count: 1 }
  ]

  const handleMonthClick = (monthName) => {
    navigate(`/${currentYear}/${monthName.toLowerCase()}`)
  }

  return (
    <div className="navigation-tabs">
      {months.map((month, index) => (
        <div 
          key={index} 
          className="tab-item"
          onClick={() => handleMonthClick(month.name)}
        >
          <span className="month-name">{month.name}</span>
          <span className="post-count">({month.count})</span>
        </div>
      ))}
    </div>
  )
}

export default NavigationTabs 