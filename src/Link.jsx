import { EVENTS } from './consts'


function navigate(href) {
  window.history.pushState({}, '', href)
  const navEvent = new Event(EVENTS.PUSH)
  window.dispatchEvent(navEvent)
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {

    const isMainEvent = event.button == 0
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target == undefined || target == '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return (<>
    <a onClick={handleClick} href={to} target={target} {...props}>
      <div className="card" style={{ width: '15rem' }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBb5OoSABHmzaFV4WcjDaRcsjTXfNk6irxA&s" className="card-img-top img-card-App" alt="..." />
        <div className="card-body">
          <p className="card-text">{props.children}</p>
        </div>
      </div>
    </a>
  </>)
}