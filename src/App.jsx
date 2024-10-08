import './App.css'
import HomePage from './pageModuls/Home.jsx'
import AboutPage from './pageModuls/About.jsx'
import { Router } from './Router.jsx'
import { ConvertBin } from './pageModuls/convertBin/ConvertBin.jsx'
import { BorderRadius } from './pageModuls/borderRadius/BorderRadius.jsx'
import { Calculator } from './pageModuls/calculator/Calculator.jsx'
import { ChristmasLights} from './pageModuls/christmas Lights/christmasLights.jsx'

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
  },
  {
    path:'/christmasLights',
    Component: ChristmasLights
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
