import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import CreatePage from './pages/CreatePage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/today' element={<ExplorePage />} />
      <Route path='/pin-creation-tool' element={<CreatePage />} />
    </Routes>
  )
}

export default App
