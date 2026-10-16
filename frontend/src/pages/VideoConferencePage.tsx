type VideoConferencePageProps = {
  onNavigate: (path: string) => void
}

export default function VideoConferencePage({ onNavigate }: VideoConferencePageProps) {
  return (
    <main className="workspace">
      <div className="workspace-inner">
        <div className="page-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> LIVE VIDEO PRACTICE</span>
            <h1>Make room for a great conversation.</h1>
            <p>Get comfortable on camera with a realistic, distraction-free interview room.</p>
          </div>
          <a className="back-link" href="/" onClick={(event) => { event.preventDefault(); onNavigate('/') }}>← Back to home</a>
        </div>
        <div className="conference-layout">
          <section className="panel call-stage">
            <div className="call-top"><span className="call-status"><span className="status-dot" /> Interview room ready</span><span className="call-time">00:18:42</span></div>
            <div className="video-placeholder">
              <span className="camera-off">▧ Camera preview</span>
              <span className="participant-name">Alex Morgan · AI Interviewer</span>
              <span className="self-view" aria-label="Your self-view">AM</span>
            </div>
            <div className="call-controls">
              <button className="control-button" aria-label="Toggle microphone">♩</button>
              <button className="control-button" aria-label="Toggle camera">▣</button>
              <button className="control-button" aria-label="Share screen">▱</button>
              <button className="control-button" aria-label="Open chat">▤</button>
              <button className="control-button danger">Leave room</button>
            </div>
          </section>
          <aside className="panel call-side">
            <div className="sidebar-section">
              <h2 className="panel-title">In this room <span className="subtle">(2)</span></h2>
              <div className="participant"><span className="participant-avatar">AM</span><span className="participant-info"><strong>Alex Morgan</strong><span>AI Interviewer</span></span><span className="mic-state">♫</span></div>
              <div className="participant"><span className="participant-avatar">YO</span><span className="participant-info"><strong>You</strong><span>Candidate</span></span><span className="mic-state">♫</span></div>
            </div>
            <div className="sidebar-section">
              <h2 className="panel-title">Session plan</h2>
              <div className="agenda-item"><span className="agenda-time">2 min</span><span>Warm up and introductions</span></div>
              <div className="agenda-item"><span className="agenda-time">15 min</span><span>Role-specific interview questions</span></div>
              <div className="agenda-item"><span className="agenda-time">5 min</span><span>Wrap up and reflect</span></div>
              <button className="button button-outline" style={{ width: '100%', marginTop: 8 }} onClick={() => onNavigate('/interview')}>Open interview practice</button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
