import { useMemo, useState } from 'react'
import './App.css'

type IconName =
  | 'grid'
  | 'calendar'
  | 'users'
  | 'layers'
  | 'chart'
  | 'settings'
  | 'search'
  | 'bell'
  | 'chevron'
  | 'arrow'
  | 'download'
  | 'more'
  | 'clock'
  | 'spark'
  | 'check'
  | 'menu'
  | 'close'

const iconPaths: Record<IconName, string> = {
  grid: 'M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z',
  calendar: 'M8 2v4 M16 2v4 M3 9h18 M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  users: 'M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M20 8v6 M23 11h-6',
  layers: 'm12 2 9 5-9 5-9-5 9-5z M3 12l9 5 9-5 M3 17l9 5 9-5',
  chart: 'M3 3v18h18 M18 17V9 M13 17V5 M8 17v-3',
  settings: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 3-.2-.1a1.7 1.7 0 0 0-1.8.1l-.2.1h-3.5l-.1-.2a1.7 1.7 0 0 0-1.5-1l-.2.1-3-1.7.1-.2a1.7 1.7 0 0 0-.1-1.8l-.1-.2v-3.5l.2-.1a1.7 1.7 0 0 0 1-1.5l-.1-.2 1.7-3 .2.1a1.7 1.7 0 0 0 1.8-.1l.2-.1h3.5l.1.2a1.7 1.7 0 0 0 1.5 1l.2-.1 3 1.7-.1.2a1.7 1.7 0 0 0 .1 1.8l.1.2v3.5z',
  search: 'm20 20-4.4-4.4 M18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z',
  bell: 'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9 M10 21h4',
  chevron: 'm9 18 6-6-6-6',
  arrow: 'M7 17 17 7 M7 7h10v10',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3',
  more: 'M5 12h.01 M12 12h.01 M19 12h.01',
  clock: 'M12 8v4l3 2 M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z',
  spark: 'm12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3z M19 14l1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14z',
  check: 'm5 12 4 4L19 6',
  menu: 'M4 6h16 M4 12h16 M4 18h16',
  close: 'm18 6-12 12 M6 6l12 12',
}

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={iconPaths[name]} />
    </svg>
  )
}

const navigation: { label: string; icon: IconName }[] = [
  { label: 'Overview', icon: 'grid' },
  { label: 'Interviews', icon: 'calendar' },
  { label: 'Candidates', icon: 'users' },
  { label: 'Question bank', icon: 'layers' },
  { label: 'Analytics', icon: 'chart' },
]

const candidates = [
  { name: 'Olivia Rhye', email: 'olivia.rhye@email.com', role: 'Product Designer', date: 'Today, 10:42 AM', score: 92, status: 'Completed', initials: 'OR', color: 'lilac' },
  { name: 'Phoenix Baker', email: 'phoenix.baker@email.com', role: 'Frontend Engineer', date: 'Today, 9:18 AM', score: 86, status: 'Completed', initials: 'PB', color: 'peach' },
  { name: 'Lana Steiner', email: 'lana.steiner@email.com', role: 'Product Manager', date: 'Yesterday, 4:36 PM', score: 78, status: 'In progress', initials: 'LS', color: 'mint' },
  { name: 'Demi Wilkinson', email: 'demi.wilkinson@email.com', role: 'UX Researcher', date: 'Yesterday, 2:05 PM', score: 0, status: 'Scheduled', initials: 'DW', color: 'rose' },
  { name: 'Candice Wu', email: 'candice.wu@email.com', role: 'Backend Engineer', date: 'Oct 22, 11:24 AM', score: 88, status: 'Completed', initials: 'CW', color: 'blue' },
]

const chartData: Record<string, number[]> = {
  '7 days': [28, 37, 34, 54, 48, 66, 61, 78, 70, 86, 74, 94],
  '30 days': [24, 31, 28, 42, 39, 55, 49, 64, 59, 73, 68, 88],
  '90 days': [18, 25, 23, 34, 31, 47, 41, 58, 52, 68, 63, 82],
}

const pageDescriptions: Record<string, string> = {
  Overview: 'Here’s what’s happening with your interviews today.',
  Interviews: 'Keep track of interview sessions across your workspace.',
  Candidates: 'Review candidate activity and interview performance.',
  'Question bank': 'Manage the questions powering your interview sessions.',
  Analytics: 'Understand engagement and outcomes across your interviews.',
  Settings: 'Manage your workspace preferences.',
}

function App() {
  const [activePage, setActivePage] = useState('Overview')
  const [range, setRange] = useState('7 days')
  const [search, setSearch] = useState('')
  const [noticeOpen, setNoticeOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [toast, setToast] = useState('')

  const filteredCandidates = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return candidates
    return candidates.filter((candidate) =>
      `${candidate.name} ${candidate.email} ${candidate.role} ${candidate.status}`
        .toLowerCase()
        .includes(term),
    )
  }, [search])

  const notify = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2600)
  }

  const selectPage = (page: string) => {
    setActivePage(page)
    setMobileOpen(false)
  }

  const graphPoints = chartData[range]
    .map((value, index) => `${(index / (chartData[range].length - 1)) * 720},${174 - value * 1.55}`)
    .join(' ')

  return (
    <div className="admin-shell">
      {mobileOpen && <button className="mobile-scrim" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}
      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
        <a className="brand" href="#" onClick={(event) => { event.preventDefault(); selectPage('Overview') }}>
          <span className="brand-mark">✳</span>
          <span>interview<span className="brand-light">ly</span></span>
          <span className="brand-admin">ADMIN</span>
        </a>

        <div className="workspace-switcher">
          <span className="workspace-avatar">A</span>
          <span className="workspace-copy"><strong>Acme workspace</strong><small>Free plan</small></span>
          <span className="workspace-chevron"><Icon name="chevron" size={15} /></span>
        </div>

        <div className="nav-label">WORKSPACE</div>
        <nav className="primary-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <button
              className={`nav-item ${activePage === item.label ? 'nav-item-active' : ''}`}
              key={item.label}
              onClick={() => selectPage(item.label)}
            >
              <Icon name={item.icon} size={18} />
              <span>{item.label}</span>
              {item.label === 'Interviews' && <span className="nav-count">12</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-spacer" />
        <div className="sidebar-tip">
          <span className="tip-icon"><Icon name="spark" size={17} /></span>
          <strong>Make every interview count</strong>
          <p>Explore insights to help your candidates shine.</p>
          <button onClick={() => selectPage('Analytics')}>Explore analytics <span>→</span></button>
        </div>
        <button className={`nav-item settings-link ${activePage === 'Settings' ? 'nav-item-active' : ''}`} onClick={() => selectPage('Settings')}>
          <Icon name="settings" size={18} /><span>Settings</span>
        </button>
        <div className="profile">
          <span className="profile-avatar">JD</span>
          <span className="profile-copy"><strong>Jamie Dawson</strong><small>Admin</small></span>
          <button className="icon-button profile-more" aria-label="Profile options" onClick={() => notify('Profile options are coming soon.')}><Icon name="more" /></button>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button className="mobile-menu icon-button" aria-label="Open navigation" onClick={() => setMobileOpen(true)}><Icon name="menu" /></button>
          <div className="breadcrumb"><span>Workspace</span><Icon name="chevron" size={14} /><strong>{activePage}</strong></div>
          <div className="topbar-actions">
            <label className="search-box">
              <Icon name="search" size={17} />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search candidates..." aria-label="Search candidates" />
              <kbd>⌘ K</kbd>
            </label>
            <div className="notice-wrap">
              <button className={`icon-button notification-button ${noticeOpen ? 'icon-button-selected' : ''}`} aria-label="Notifications" onClick={() => setNoticeOpen(!noticeOpen)}>
                <Icon name="bell" size={19} /><span className="notification-dot" />
              </button>
              {noticeOpen && (
                <div className="notification-popover">
                  <strong>You’re all caught up</strong>
                  <p>New interview updates will show up here.</p>
                </div>
              )}
            </div>
            <button className="top-avatar" aria-label="Open profile menu" onClick={() => notify('Signed in as Jamie Dawson.')}>JD</button>
          </div>
        </header>

        <div className="page-content">
          <section className="page-heading">
            <div>
              <div className="date-kicker">MONDAY, OCTOBER 26, 2026 <span className="live-indicator"><i /> LIVE OVERVIEW</span></div>
              <h1>{activePage === 'Overview' ? 'Good morning, Jamie' : activePage}<span className="heading-wave">{activePage === 'Overview' ? '✦' : ''}</span></h1>
              <p>{pageDescriptions[activePage]}</p>
            </div>
            <div className="heading-actions">
              <span className="preview-label"><i /> Preview data</span>
              <button className="button button-outline" onClick={() => notify('Your report is being prepared.')}><Icon name="download" size={16} /> Export report</button>
              <button className="button button-primary" onClick={() => notify('New interview setup is coming soon.')}><span className="plus">+</span> New interview</button>
            </div>
          </section>

          {activePage === 'Question bank' ? (
            <QuestionBank onAction={notify} />
          ) : activePage === 'Settings' ? (
            <SettingsPage onAction={notify} />
          ) : (
            <>
              <section className="metric-grid" aria-label="Workspace statistics">
                <MetricCard label="Total interviews" value="1,284" change="+12.8%" note="vs. last month" icon="calendar" color="purple" sparkline="0,22 14,18 26,20 39,12 51,15 64,7 76,10 90,2" />
                <MetricCard label="Active candidates" value="846" change="+8.2%" note="vs. last month" icon="users" color="blue" sparkline="0,19 13,21 26,13 38,16 50,8 63,12 76,4 90,6" />
                <MetricCard label="Completion rate" value="78.4%" change="+4.6%" note="vs. last month" icon="check" color="green" sparkline="0,21 14,17 26,19 39,11 51,13 64,6 76,8 90,1" />
                <MetricCard label="Average score" value="82.6" change="+2.4%" note="vs. last month" icon="spark" color="orange" sparkline="0,22 13,16 25,19 38,13 50,15 63,7 76,11 90,3" />
              </section>

              <section className="insights-grid">
                <article className="panel performance-panel">
                  <div className="panel-heading">
                    <div><h2>Interview activity</h2><p>Interview sessions over time</p></div>
                    <div className="range-switch" role="group" aria-label="Chart time range">
                      {Object.keys(chartData).map((item) => (
                        <button key={item} className={range === item ? 'range-active' : ''} onClick={() => setRange(item)}>{item}</button>
                      ))}
                    </div>
                  </div>
                  <div className="chart-summary"><strong>342</strong><span>interviews</span><span className="chart-change"><Icon name="arrow" size={13} /> 18.2%</span><small>vs. previous period</small></div>
                  <div className="chart-wrap">
                    <div className="chart-y-labels"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div>
                    <div className="chart-area">
                      <div className="chart-gridlines"><i /><i /><i /><i /><i /></div>
                      <svg className="activity-chart" viewBox="0 0 720 190" preserveAspectRatio="none" role="img" aria-label={`Interview activity over the last ${range}`}>
                        <defs><linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#7960e8" stopOpacity=".2" /><stop offset="100%" stopColor="#7960e8" stopOpacity="0" /></linearGradient></defs>
                        <polygon points={`0,190 ${graphPoints} 720,190`} fill="url(#chart-fill)" />
                        <polyline points={graphPoints} fill="none" stroke="#7659df" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                        <circle cx="458" cy={174 - chartData[range][7] * 1.55} r="5" fill="#fff" stroke="#7659df" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                      </svg>
                      <div className="chart-x-labels"><span>Oct 20</span><span>Oct 21</span><span>Oct 22</span><span>Oct 23</span><span>Oct 24</span><span>Oct 25</span><span>Oct 26</span></div>
                    </div>
                  </div>
                  <div className="chart-legend"><span><i className="legend-dot" /> Interviews completed</span><span><i className="legend-dot legend-dot-muted" /> Previous period</span></div>
                </article>

                <article className="panel breakdown-panel">
                  <div className="panel-heading">
                    <div><h2>Interview breakdown</h2><p>By interview type</p></div>
                    <button className="icon-button subtle-more" aria-label="More breakdown options" onClick={() => notify('More breakdown options are coming soon.')}><Icon name="more" /></button>
                  </div>
                  <div className="donut-wrap">
                    <div className="donut-chart"><div><strong>1,284</strong><span>Total</span></div></div>
                  </div>
                  <div className="breakdown-list">
                    <div><span className="breakdown-name"><i className="breakdown-dot dot-one" /> Behavioral</span><strong>48% <small>616</small></strong></div>
                    <div><span className="breakdown-name"><i className="breakdown-dot dot-two" /> Technical</span><strong>32% <small>411</small></strong></div>
                    <div><span className="breakdown-name"><i className="breakdown-dot dot-three" /> Culture fit</span><strong>20% <small>257</small></strong></div>
                  </div>
                </article>
              </section>

              <section className="panel candidates-panel">
                <div className="panel-heading candidates-heading">
                  <div><h2>{activePage === 'Interviews' ? 'Recent interviews' : activePage === 'Candidates' ? 'All candidates' : 'Recent candidates'}</h2><p>A quick look at your latest candidate activity</p></div>
                  <div className="table-actions">
                    <button className="button button-outline filter-button" onClick={() => notify('Showing all interview statuses.')}><span className="filter-bars">☷</span> Filters</button>
                    <button className="button button-text" onClick={() => selectPage('Candidates')}>View all <span>→</span></button>
                  </div>
                </div>
                <div className="table-scroll">
                  <table>
                    <thead><tr><th>Candidate</th><th>Role</th><th>Last activity</th><th>Score</th><th>Status</th><th><span className="sr-only">Actions</span></th></tr></thead>
                    <tbody>
                      {filteredCandidates.map((candidate) => (
                        <tr key={candidate.email}>
                          <td><div className="candidate-cell"><span className={`candidate-avatar avatar-${candidate.color}`}>{candidate.initials}</span><span><strong>{candidate.name}</strong><small>{candidate.email}</small></span></div></td>
                          <td className="role-cell">{candidate.role}</td>
                          <td className="activity-cell">{candidate.date}</td>
                          <td>{candidate.score ? <span className="score-value">{candidate.score}<small>/100</small></span> : <span className="score-pending">—</span>}</td>
                          <td><StatusBadge status={candidate.status} /></td>
                          <td><button className="icon-button row-more" aria-label={`Options for ${candidate.name}`} onClick={() => notify(`${candidate.name}'s profile options are coming soon.`)}><Icon name="more" /></button></td>
                        </tr>
                      ))}
                      {filteredCandidates.length === 0 && <tr><td className="empty-cell" colSpan={6}>No candidates match “{search}”. Try a different search.</td></tr>}
                    </tbody>
                  </table>
                </div>
                <div className="table-footer"><span>Showing <strong>{filteredCandidates.length ? 1 : 0}-{filteredCandidates.length}</strong> of <strong>1,284</strong> candidates</span><div><button disabled aria-label="Previous page">←</button><button className="current-page">1</button><button onClick={() => notify('More candidate records are coming soon.')}>2</button><button onClick={() => notify('More candidate records are coming soon.')}>3</button><span>...</span><button onClick={() => notify('More candidate records are coming soon.')}>→</button></div></div>
              </section>

              <footer className="page-footer"><span>© 2026 Interviewly, Inc.</span><span><i /> All systems operational</span><button onClick={() => notify('Help center is coming soon.')}>Need help?</button></footer>
            </>
          )}
        </div>
      </main>

      {toast && <div className="toast-message" role="status"><span><Icon name="check" size={16} /></span>{toast}</div>}
    </div>
  )
}

function MetricCard({ label, value, change, note, icon, color, sparkline }: {
  label: string
  value: string
  change: string
  note: string
  icon: IconName
  color: string
  sparkline: string
}) {
  return (
    <article className="metric-card">
      <div className={`metric-icon metric-${color}`}><Icon name={icon} size={18} /></div>
      <span className="metric-label">{label}</span>
      <strong className="metric-value">{value}</strong>
      <div className="metric-bottom"><span className="metric-change"><Icon name="arrow" size={12} /> {change}</span><span className="metric-note">{note}</span></div>
      <svg className={`sparkline sparkline-${color}`} viewBox="0 0 90 25" preserveAspectRatio="none" aria-hidden="true"><polyline points={sparkline} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </article>
  )
}

function StatusBadge({ status }: { status: string }) {
  const className = status === 'Completed' ? 'status-completed' : status === 'In progress' ? 'status-progress' : 'status-scheduled'
  return <span className={`status-badge ${className}`}><i />{status}</span>
}

function QuestionBank({ onAction }: { onAction: (message: string) => void }) {
  const questions = [
    { category: 'Behavioral', title: 'Tell me about a time you solved a difficult problem.', usage: 'Used 248 times', color: 'lilac' },
    { category: 'Technical', title: 'How would you design a system to handle millions of requests?', usage: 'Used 186 times', color: 'blue' },
    { category: 'Culture fit', title: 'What kind of team environment helps you do your best work?', usage: 'Used 132 times', color: 'peach' },
    { category: 'Behavioral', title: 'Tell me about a time you received feedback you disagreed with.', usage: 'Used 98 times', color: 'mint' },
  ]
  return (
    <section className="panel secondary-page-panel">
      <div className="panel-heading candidates-heading"><div><h2>Question library</h2><p>Sample questions used in your interview sessions</p></div><button className="button button-primary" onClick={() => onAction('Question editor is coming soon.')}><span className="plus">+</span> Add question</button></div>
      <div className="question-list">{questions.map((question) => <article className="question-row" key={question.title}><span className={`question-category category-${question.color}`}>{question.category}</span><strong>{question.title}</strong><span className="question-usage">{question.usage}</span><button className="icon-button row-more" aria-label={`Options for ${question.title}`} onClick={() => onAction('Question options are coming soon.')}><Icon name="more" /></button></article>)}</div>
      <div className="preview-note"><Icon name="spark" size={16} /> These are preview questions. Connect your workspace API to manage live content.</div>
    </section>
  )
}

function SettingsPage({ onAction }: { onAction: (message: string) => void }) {
  const [remindersEnabled, setRemindersEnabled] = useState(true)
  const [summaryEnabled, setSummaryEnabled] = useState(false)

  return (
    <section className="panel settings-panel">
      <div className="panel-heading"><div><h2>Workspace settings</h2><p>Control the basics of your interview workspace</p></div></div>
      <div className="settings-row"><div><strong>Workspace name</strong><p>This is the name shown to your team.</p></div><input defaultValue="Acme workspace" aria-label="Workspace name" /></div>
      <div className="settings-row"><div><strong>Interview reminders</strong><p>Send a reminder before a scheduled interview.</p></div><button className={`toggle-switch ${remindersEnabled ? 'toggle-on' : ''}`} role="switch" aria-checked={remindersEnabled} aria-label="Interview reminders" onClick={() => setRemindersEnabled(!remindersEnabled)}><i /></button></div>
      <div className="settings-row"><div><strong>Weekly summary</strong><p>Get a weekly overview of candidate activity.</p></div><button className={`toggle-switch ${summaryEnabled ? 'toggle-on' : ''}`} role="switch" aria-checked={summaryEnabled} aria-label="Weekly summary" onClick={() => setSummaryEnabled(!summaryEnabled)}><i /></button></div>
      <div className="settings-actions"><span className="preview-note"><Icon name="spark" size={15} /> Settings are saved locally in this preview.</span><button className="button button-primary" onClick={() => onAction('Settings saved for this preview.')}>Save changes</button></div>
    </section>
  )
}

export default App
