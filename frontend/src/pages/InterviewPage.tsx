type InterviewPageProps = {
  onNavigate: (path: string) => void
}

export default function InterviewPage({ onNavigate }: InterviewPageProps) {
  return (
    <main className="workspace">
      <div className="workspace-inner">
        <div className="page-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> AI INTERVIEW PRACTICE</span>
            <h1>Your next great answer starts here.</h1>
            <p>A safe space to practice, find your rhythm, and build confidence.</p>
          </div>
          <a className="back-link" href="/" onClick={(event) => { event.preventDefault(); onNavigate('/') }}>← Back to home</a>
        </div>
        <div className="interview-layout">
          <section className="panel interview-main">
            <div className="panel-head">
              <div><h2 className="panel-title">Product Designer · Practice session</h2><span className="subtle">Behavioral interview · Question 2 of 5</span></div>
              <span className="live-tag">IN PROGRESS</span>
            </div>
            <div className="progress-line"><span /></div>
            <div className="question-box">
              <span className="question-label">Tell me about a time...</span>
              <h2>Tell me about a time you had to balance user needs with business goals. How did you approach it?</h2>
            </div>
            <textarea className="answer-area" aria-label="Your interview answer" placeholder="Take a breath, then share your answer. There’s no rush..." />
            <div className="interview-bottom">
              <div className="tool-row"><button className="tool-chip">◉ Record answer</button><button className="tool-chip">◖ Listen to question</button><button className="tool-chip">✎ Take a note</button></div>
              <button className="button button-primary">Continue <span aria-hidden="true">→</span></button>
            </div>
          </section>
          <aside className="panel interview-side">
            <div className="coach-header"><span className="coach-avatar">✳</span><div><h3>Your AI interview coach</h3><p>Here to help you feel prepared</p></div></div>
            <div className="question-label">A little guidance</div>
            <p className="subtle" style={{ lineHeight: 1.7, marginTop: 8 }}>Try using the STAR method to structure your story. Keep it specific, and don’t forget to share the outcome.</p>
            <div className="side-label">Answer framework</div>
            <span className="skill-tag">Situation</span><span className="skill-tag">Task</span><span className="skill-tag">Action</span><span className="skill-tag">Result</span>
            <div className="side-label">Session focus</div>
            <span className="skill-tag">Communication</span><span className="skill-tag">Problem solving</span>
            <div className="tip-box"><strong>Remember:</strong> This is practice, not a test. Take your time and answer in your own words.</div>
          </aside>
        </div>
      </div>
    </main>
  )
}
