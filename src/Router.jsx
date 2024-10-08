import { useEffect, useState } from "react"
import { EVENTS } from "./consts"


export function Router ({routes = [], defaultComponent : DefaultComponent = () => <h1> 404 </h1>}){
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSH, onLocationChange)
    window.addEventListener(EVENTS.POP, onLocationChange)

    return() => {
      window.removeEventListener(EVENTS.PUSH, onLocationChange)
      window.removeEventListener(EVENTS.POP, onLocationChange)
    }
  },[])

  const Page = routes.find(({path}) => path == currentPath)?.Component
  return Page ? <Page /> : <DefaultComponent />
}