import { useEffect, useState } from "react";

type InterviewPageProps = {
  onNavigate: (path: string) => void
}

export default function InterviewPage({ onNavigate }: InterviewPageProps) {

  const [questions, setQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [answer, setAnswer] = useState("");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch(
          "http://localhost:5000/api/interview/questions"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch interview questions");
        }

        const data = await response.json();

        setQuestions(data.questions);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  function handleContinue() {
    if (!answer.trim()) {
      alert("Please enter your answer first!");
      return;
    }

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answer;

    setAnswers(updatedAnswers);
    setAnswer("");

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setFinished(true);
    }
  }
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
        <div>
          {loading && <p>Loading interview questions...</p>}

          {error && <p>{error}</p>}

          {questions.length > 0 && (
            <ul>
              {questions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          )}
        </div>
        {finished ? (

  <div className="panel interview-main">
    <div className="question-box">
      <h2>Interview Completed! 🎉</h2>
      <p>You have answered all the questions.</p>
    </div>

```
<h3>Your answers</h3>

{answers.map((userAnswer, index) => (
  <div className="question-box" key={index}>
    <h3>Question {index + 1}</h3>
    <p>{questions[index]}</p>
    <p><strong>Your answer:</strong></p>
    <p>{userAnswer}</p>
  </div>
))}
```

  </div>
) : (
  <div className="interview-layout">
    <section className="panel interview-main">
      <div className="panel-head">
        <div>
          <h2 className="panel-title">
            Product Designer · Practice session
          </h2>
          <span className="subtle">
            Behavioral interview · Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>
        <span className="live-tag">IN PROGRESS</span>
      </div>

```
  <div className="progress-line">
    <span
      style={{
        width: `${(currentQuestionIndex / questions.length) * 100}%`
      }}
    />
  </div>

  <div className="question-box">
    <span className="question-label">INTERVIEW QUESTION</span>
    <h2>{questions[currentQuestionIndex]}</h2>
  </div>

  <textarea
    className="answer-area"
    aria-label="Your interview answer"
    placeholder="Take a breath, then share your answer. There’s no rush..."
    value={answer}
    onChange={(e) => setAnswer(e.target.value)}
  />

  <div className="interview-bottom">
    <div className="tool-row">
      <button className="tool-chip">◉ Record answer</button>
      <button className="tool-chip">◖ Listen to question</button>
      <button className="tool-chip">✎ Take a note</button>
    </div>

    <button
      className="button button-primary"
      onClick={handleContinue}
      disabled={loading || questions.length === 0}
    >
      Continue <span aria-hidden="true">→</span>
    </button>
  </div>
</section>

<aside className="panel interview-side">
  <div className="coach-header">
    <span className="coach-avatar">✳</span>
    <div>
      <h3>Your AI interview coach</h3>
      <p>Here to help you feel prepared</p>
    </div>
  </div>

  <div className="question-label">A little guidance</div>
  <p className="subtle" style={{ lineHeight: 1.7, marginTop: 8 }}>
    Try using the STAR method to structure your story. Keep it specific,
    and don’t forget to share the outcome.
  </p>

  <div className="side-label">Answer framework</div>
  <span className="skill-tag">Situation</span>
  <span className="skill-tag">Task</span>
  <span className="skill-tag">Action</span>
  <span className="skill-tag">Result</span>

  <div className="side-label">Session focus</div>
  <span className="skill-tag">Communication</span>
  <span className="skill-tag">Problem solving</span>

  <div className="tip-box">
    <strong>Remember:</strong> This is practice, not a test. Take your time
    and answer in your own words.
  </div>
</aside>

  </div>
)}

      </div>
    </main>
  )
}
