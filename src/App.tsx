import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
// Single-page: remove extra routes; all sections render on Home

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        {/* Section anchors handled on the home page */}
      </Route>
    </Routes>
  )
}

export default App
