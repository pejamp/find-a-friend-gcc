import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/global'
import LocationContextProvider from './context/locationContext'
import PetsContextProvider from './context/petsContext'

function App() {
  return (
    <LocationContextProvider>
      <PetsContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </PetsContextProvider>
    </LocationContextProvider>
  )
}

export default App
