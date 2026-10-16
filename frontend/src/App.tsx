import { useEffect, useState, type FormEvent } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import InterviewPage from './pages/InterviewPage'
import VideoConferencePage from './pages/VideoConferencePage'
import CodeEditorPage from './pages/CodeEditorPage'

function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [authMode, setAuthMode] = useState<'login' | 'signup' | null>(null)
  const [authMessage, setAuthMessage] = useState('')

  useEffect(() => {
    const syncPath = () => setPath(window.location.pathname)
    window.addEventListener('popstate', syncPath)
    return () => window.removeEventListener('popstate', syncPath)
  }, [])

  const navigate = (nextPath: string) => {
    if (nextPath !== window.location.pathname) window.history.pushState({}, '', nextPath)
    setPath(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAuth = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setAuthMessage('Account access will be available soon. Thanks for your interest!')
  }

  let page
  switch (path) {
    case '/interview':
      page = <InterviewPage onNavigate={navigate} />
      break
    case '/video':
      page = <VideoConferencePage onNavigate={navigate} />
      break
    case '/coding':
      page = <CodeEditorPage onNavigate={navigate} />
      break
    default:
      page = <LandingPage onNavigate={navigate} />
  }

  return (
    <>
      <Navbar
        path={path}
        onNavigate={navigate}
        onLogin={() => { setAuthMessage(''); setAuthMode('login') }}
        onSignup={() => { setAuthMessage(''); setAuthMode('signup') }}
      />
      {page}
      <Footer />
      {authMode && (
        <div className="auth-backdrop" onClick={() => setAuthMode(null)}>
          <section className="auth-dialog" role="dialog" aria-modal="true" aria-labelledby="auth-title" onClick={(event) => event.stopPropagation()}>
            <button className="auth-close" onClick={() => setAuthMode(null)} aria-label="Close dialog">×</button>
            <span className="brand-mark">✳</span>
            <h2 id="auth-title">{authMode === 'login' ? 'Welcome back' : 'Your next chapter starts here'}</h2>
            <p>{authMode === 'login' ? 'Log in to pick up where your practice left off.' : 'Create an account and start preparing with confidence.'}</p>
            <form onSubmit={handleAuth}>
              <input className="auth-field" type="email" placeholder="Email address" aria-label="Email address" required />
              <input className="auth-field" type="password" placeholder="Password" aria-label="Password" required minLength={8} />
              <button className="button button-primary auth-submit" type="submit">{authMode === 'login' ? 'Log in' : 'Create account'}</button>
            </form>
            {authMessage && <p className="auth-message" role="status">{authMessage}</p>}
            <p style={{ marginTop: 14, textAlign: 'center' }}>
              {authMode === 'login' ? 'New here? ' : 'Already have an account? '}
              <button className="back-link" style={{ border: 0, background: 'none' }} onClick={() => { setAuthMessage(''); setAuthMode(authMode === 'login' ? 'signup' : 'login') }}>
                {authMode === 'login' ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </section>
        </div>
      )}
    </>
  )
}

export default App
