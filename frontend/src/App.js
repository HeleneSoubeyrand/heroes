import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HeroesProvider } from './context/Heroes'

import { ThemeProvider } from '@mui/material/styles';
import Theme from './components/Theme'
import Header from './components/Header'
import Home from './pages/Home'
import Hero from './pages/Hero'


const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <HeroesProvider>
          <div style={{ margin: "0 100px" }} >
            <Header/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Routes>
                <Route exact path="/heroes" element={<Home />} />
                <Route path="/heroes/:slug" element={<Hero />} />
              </Routes>
            </div>
          </div>
        </HeroesProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App


