type LandingPageProps = {
  onNavigate: (path: string) => void
}

const features = [
  { icon: '✳', title: 'AI-powered mock interviews', text: 'Practice realistic questions tailored to your role, experience, and goals.' },
  { icon: '▣', title: 'Face-to-face practice', text: 'Build confidence with a focused video interview experience, from anywhere.' },
  { icon: '</>', title: 'Live coding sessions', text: 'Solve role-specific challenges in a collaborative, interview-ready code editor.' },
]

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <main className="landing">
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT ROLE STARTS HERE</div>
          <h1>Show up ready.<br /> <span>Stand out.</span></h1>
          <p className="hero-copy">
            Practice the interviews that matter with your personal AI coach.
            Get sharper, feel more confident, and land the role you deserve.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => onNavigate('/interview')}>Start practicing <span aria-hidden="true">→</span></button>
            <button className="button button-outline" onClick={() => onNavigate('/video')}>Explore the platform</button>
          </div>
          <div className="trust-row">
            <div className="avatar-stack" aria-hidden="true">
              <span className="avatar">M</span><span className="avatar">J</span><span className="avatar">A</span><span className="avatar">K</span>
            </div>
            <span>Helping candidates feel ready for what’s next</span>
          </div>
        </div>
        <div className="hero-art" aria-label="AI interview practice preview">
          <div className="art-orbit" />
          <div className="float-note note-one"><span className="float-icon">✓</span>Answer clarity +12%</div>
          <div className="float-note note-two"><span className="float-icon">✦</span>Personalized feedback</div>
          <div className="ai-card">
            <div className="ai-card-top">
              <div className="card-brand"><span className="mini-mark">✳</span> Interview session</div>
              <span className="live-tag">● LIVE</span>
            </div>
            <div className="question-label">Question 03 · Behavioral</div>
            <p className="ai-question">Tell me about a time you solved a difficult problem.</p>
            <div className="answer-wave" aria-label="Voice answer waveform">
              {Array.from({ length: 24 }, (_, index) => <span className="wave-bar" key={index} />)}
              <span className="wave-caption">00:42</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-heading">
          <span className="eyebrow">BUILT FOR YOUR BIG MOMENT</span>
          <h2>Everything you need to feel prepared</h2>
          <p>One calm, focused space to practice every part of the interview process.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">YOUR PRACTICE, YOUR PACE</span>
          <h2>Go from “what if?” to “I’ve got this.”</h2>
          <p>A simple routine turns interview nerves into a real advantage.</p>
        </div>
        <div className="how-grid">
          <article className="step"><span className="step-num">01</span><h3>Choose your interview</h3><p>Pick a role and a practice format that fits your next opportunity.</p></article>
          <article className="step"><span className="step-num">02</span><h3>Practice for real</h3><p>Work through thoughtful questions in a realistic interview setting.</p></article>
          <article className="step"><span className="step-num">03</span><h3>Grow with feedback</h3><p>Reflect on your answers and come back even more prepared.</p></article>
        </div>
      </section>
    </main>
  )
}
