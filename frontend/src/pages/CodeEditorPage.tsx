type CodeEditorPageProps = {
  onNavigate: (path: string) => void
}

const sourceLines = [
  <><span className="code-purple">function</span> <span className="code-blue">twoSum</span>(nums, target) {'{'}</>,
  <>  <span className="code-purple">const</span> seen = <span className="code-purple">new</span> Map();</>,
  <></>,
  <>  <span className="code-purple">for</span> (<span className="code-purple">let</span> i = <span className="code-orange">0</span>; i &lt; nums.length; i++) {'{'}</>,
  <>    <span className="code-purple">const</span> complement = target - nums[i];</>,
  <>    <span className="code-purple">if</span> (seen.has(complement)) {'{'}</>,
  <>      <span className="code-purple">return</span> [seen.get(complement), i];</>,
  <>    {'}'}</>,
  <>    seen.set(nums[i], i);</>,
  <>  {'}'}</>,
  <></>,
  <>  <span className="code-purple">return</span> [];</>,
  <>{'}'}</>,
]

export default function CodeEditorPage({ onNavigate }: CodeEditorPageProps) {
  return (
    <main className="workspace">
      <div className="workspace-inner">
        <div className="page-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> LIVE CODING PRACTICE</span>
            <h1>Think out loud. Code with confidence.</h1>
            <p>A collaborative coding space for solving real interview challenges.</p>
          </div>
          <a className="back-link" href="/" onClick={(event) => { event.preventDefault(); onNavigate('/') }}>← Back to home</a>
        </div>
        <div className="editor-layout">
          <section className="panel editor-panel">
            <div className="editor-toolbar">
              <div className="editor-tabs"><span className="editor-tab">two-sum.js</span><span className="subtle">● Saved</span></div>
              <select className="language-select" aria-label="Programming language"><option>JavaScript</option><option>Python</option><option>TypeScript</option></select>
            </div>
            <div className="code-area" aria-label="Code editor preview">
              {sourceLines.map((line, index) => <div className="code-line" key={index}><span className="line-number">{index + 1}</span><span>{line}</span></div>)}
            </div>
            <div className="editor-actions">
              <span className="editor-hint">⌘ + Enter to run your solution</span>
              <button className="button button-primary">▶ Run code</button>
            </div>
          </section>
          <aside className="panel editor-sidebar">
            <div className="sidebar-section">
              <div className="panel-head"><h2 className="panel-title">Two Sum</h2><span className="skill-tag">Easy</span></div>
              <p className="subtle" style={{ lineHeight: 1.7, marginTop: 12 }}>Given an array of integers and a target, return the indices of the two numbers that add up to the target.</p>
              <div className="side-label">Example</div>
              <div className="console">Input: nums = [2, 7, 11, 15]<br />target = 9<br /><br />Output: [0, 1]</div>
            </div>
            <div className="sidebar-section">
              <div className="panel-head"><h2 className="panel-title">Test cases</h2><span className="subtle">2 / 3 passed</span></div>
              <div className="test-case"><span>Basic pair</span><span className="test-pass">✓ Passed</span></div>
              <div className="test-case"><span>Negative numbers</span><span className="test-pass">✓ Passed</span></div>
              <div className="test-case"><span>No matching pair</span><span className="subtle">○ Pending</span></div>
              <button className="button button-outline" style={{ width: '100%', marginTop: 13 }} onClick={() => onNavigate('/video')}>Switch to video room</button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
