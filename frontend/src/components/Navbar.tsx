import { useState, type MouseEvent } from 'react'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'AI Interview', path: '/interview' },
  { label: 'Video Room', path: '/video' },
  { label: 'Live Coding', path: '/coding' },
]

type NavbarProps = {
  path: string
  onNavigate: (path: string) => void
  onLogin: () => void
  onSignup: () => void
}

export default function Navbar({ path, onNavigate, onLogin, onSignup }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, nextPath: string) => {
    event.preventDefault()
    onNavigate(nextPath)
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand" href="/" onClick={(event) => handleNavigation(event, '/')} aria-label="Interviewly home">
        <span className="brand-mark">✳</span><span>Interview AI </span>
      </a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>☰</button>
      <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            className={`nav-link${path === item.path ? ' active' : ''}`}
            href={item.path}
            key={item.path}
            onClick={(event) => handleNavigation(event, item.path)}
          >{item.label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="button button-quiet" onClick={onLogin}>Log in</button>
        <button className="button button-primary" onClick={onSignup}>Sign up</button>
      </div>
    </header>
  )
}
