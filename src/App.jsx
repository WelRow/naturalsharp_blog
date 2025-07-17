import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Logo from './components/Logo'
import NavigationTabs from './components/NavigationTabs'
import MonthlyPage from './components/MonthlyPage'

function App() {
  const currentYear = new Date().getFullYear()
  const currentMonth = 'JULY'

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${currentYear}/${currentMonth.toLowerCase()}`} replace />} />
        <Route path="/:year/:month" element={<MonthlyPage />} />
      </Routes>
    </Router>
  )
}

export default App
