import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/sidebar'
import Dashboard from './components/dashboard'
import CardProfile from './components/card-profile'
import CreateProfile from './components/create-profile'
import CardRequest from './components/card-request'
import RequestDetails from './components/request-details'


function App() {
  return (
    <Router>
      <div className="flex min-w-[1400px] max-w-full">
        {/* Static Sidebar */}
        <Sidebar className="w-[280px] fixed left-0 top-0 bottom-0 z-50" />

        {/* Main Content Area */}
        <div className="ml-[280px] flex-1 p-4 min-w-[calc(100%-280px)] overflow-x-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/card-profile" element={<CardProfile />} />
            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="/card-request" element={<CardRequest />} />
            <Route path="/request-details" element={<RequestDetails/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
