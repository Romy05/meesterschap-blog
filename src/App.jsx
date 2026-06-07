import { Routes, Route } from "react-router";

import { Navigation } from './components/index.js';
import { Home, WeeklyNerd, WeeklyNerds } from './pages/index.js'

function App() {

  return (
      <>
      <Navigation />
      <Routes>
          <Route index element={<Home />}/>

          <Route path="/weekly-nerds" element={<WeeklyNerds />} />
          <Route path="/weekly-nerds/:slug" element={<WeeklyNerd />} />
      </Routes>

    </>
  )
}

export default App
