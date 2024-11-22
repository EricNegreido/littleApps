export function NavBar() {
  return (
    <ul className="nav justify-content-center navBar">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sobre Mi</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Otro</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
      </li> */}
    </ul>
  )
} 