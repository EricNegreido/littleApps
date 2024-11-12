import './App.css'
import HomePage from './pageModuls/Home.jsx'
import AboutPage from './pageModuls/About.jsx'
import { Router } from './Router.jsx'
import { ConvertBin } from './pageModuls/convertBin/ConvertBin.jsx'
import { BorderRadius } from './pageModuls/borderRadius/BorderRadius.jsx'
import { Calculator } from './pageModuls/calculator/Calculator.jsx'
import { ChristmasLights } from './pageModuls/christmas Lights/christmasLights.jsx'

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
    path: '/convertBin',
    Component: ConvertBin
  },
  {
    path: '/borderRadius',
    Component: BorderRadius
  },
  {
    path: '/calculator',
    Component: Calculator
  },
  {
    path: '/christmasLights',
    Component: ChristmasLights
  },
  {
    path: '/colorCycles',
    Component: () => {
      window.location.href = '/pageModuls/colorCycles/colorcycles.html';
      return null;
    }
  },
  {
    path: '/personsList',
    Component: () => {
      window.location.href = '/pageModuls/personsList/personslist.html';
      return null;
    },
    path: '/countDown',
    Component: () => {
      window.location.href = '/pageModuls/countDown/countDown.html';
      return null;
    }

  },
 
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
