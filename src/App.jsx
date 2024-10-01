import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import { Router } from './Router.jsx'
import { ConvertBin } from './pages/ConvertBin.jsx'
import { BorderRadius } from './pages/BorderRadius.jsx'
import { Calculator } from './pages/Calculator.jsx'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path:'/convertBin',
    Component: ConvertBin
  },
  {
    path:'/borderRadius',
    Component: BorderRadius
  },
  {
    path:'/calculator',
    Component: Calculator
  }
]

function App() {

  return (
    <>
      <main>
        <Router routes={routes} />
      </main>
    </>
  )
}

export default App
