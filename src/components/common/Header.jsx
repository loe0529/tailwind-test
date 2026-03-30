import { publicUrl } from '../../utils/publicUrl'

export default function Header() {
  return (
    <header className="desktop-header">
      <div className="desktop-header-inner">
        <h1 className="desktop-header-logo">
          <img src={publicUrl('images/logo.svg')} alt="J.YOUNG's portfolio logo" />
        </h1>
        <button className="desktop-header-menu-button" type="button" aria-label="Open menu">
          <img src={publicUrl('images/menu-open.svg')} alt="" aria-hidden="true" />
        </button>
        <nav className="desktop-header-nav">
          <a href="#" className="desktop-header-nav-link">
            HOME
          </a>
          <a href="#" className="desktop-header-nav-link">
            ABOUT
          </a>
          <a href="#" className="desktop-header-nav-link">
            SKILL
          </a>
          <a href="#" className="desktop-header-nav-link">
            PROJECT
          </a>
          <a href="#" className="desktop-header-nav-link">
            UIUX
          </a>
          <a href="#" className="desktop-header-nav-link">
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  )
}
