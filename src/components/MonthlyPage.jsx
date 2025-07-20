import { useParams } from 'react-router-dom'
import Logo from './Logo'
import NavigationTabs from './NavigationTabs'
import IMG_8407 from '../assets/IMG_8407.jpeg'
import SUPERMANCOMIC from '../assets/supermancomic.jpg'
import CURRENTHISTORY from '../assets/currentHistory.png'

function MonthlyPage() {
  const { year, month } = useParams()

  const formatDate = (dateString) => {
    // Create date in EST timezone
    const date = new Date(dateString + 'T00:00:00-05:00') // EST offset
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
    
    const dayName = days[date.getDay()]
    const monthName = months[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    
    return `${dayName}, ${monthName} ${day}, ${year}`
  }

  // Posts data with actual creation dates
  const posts = [
    {
      id: 1,
      image: CURRENTHISTORY,
      imageAlt: "GitHub Branches",
      subtitle: "seeing github branches branchout like this is satisfying",
      title: "PLAY ALONG PROGRESS",
      createdAt: "2025-07-20" // July 20, 2025
    },
    {
      id: 2,
      image: SUPERMANCOMIC,
      imageAlt: "Superman Comic",
      subtitle: "I can't be as super as him, but can I still be the man he is. such a great movie.",
      title: "PUNK ROCKER YES I AM",
      createdAt: "2025-07-16" // Superman post on July 16th, 2025
    },
    {
      id: 3,
      image: IMG_8407,
      imageAlt: "Project Image",
      subtitle: "face reveal",
      title: "This a software company btw",
      createdAt: "2025-07-15" // Face reveal post on July 15th, 2025
    }
  ]

  return (
    <div className="app-container">
      <div className="header">
        <Logo />
      </div>
      <NavigationTabs />
      <div className="monthly-content">
        {posts.map((post) => (
          <div key={post.id}>
            <div className="images-container">
              <img src={post.image} alt={post.imageAlt} className="content-image" />
            </div>
            <div className="post-info">
              <div className="post-subtitle">{post.subtitle}</div>
              <div className="post-date">{formatDate(post.createdAt)}</div>
              <div className="post-title">{post.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MonthlyPage 