import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

function Home() {
  return (
    <main className="page-shell">
      <div className="hero-grid">
        <section className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> YOUR WORKSPACE, IN FLOW</span>
          <h1>Make room for<br /><span>great work.</span></h1>
          <p className="hero-description">
            A calmer place to bring your projects, people, and big ideas together. Start with a clear view of what matters.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/signup">Get started <span aria-hidden="true">↗</span></Link>
              <Link className="button button-secondary" to="/dashboard">Explore dashboard</Link>
          </div>
          <div className="social-proof">
            <div className="avatar-stack" aria-label="Workspace members">
              <span className="avatar avatar-one">AM</span><span className="avatar avatar-two">JK</span><span className="avatar avatar-three">SL</span><span className="avatar avatar-four">+</span>
            </div>
            <span>Thoughtful work starts here</span>
          </div>
        </section>
        <section className="preview-card" aria-label="Dashboard preview">
          <div className="preview-topline"><span className="preview-label">WEEKLY OVERVIEW</span><span className="preview-menu">•••</span></div>
          <div className="preview-title-row"><div><span className="muted-label">MONDAY, OCTOBER 12</span><h2>Your week, at a glance</h2></div><span className="sparkle">✳</span></div>
          <div className="metric-row">
            <div className="metric-card"><span className="metric-icon icon-lilac">↗</span><strong>12</strong><span>Active projects</span><small className="positive">↑ 2 this week</small></div>
            <div className="metric-card"><span className="metric-icon icon-peach">✓</span><strong>84%</strong><span>Tasks completed</span><small className="positive">↑ 8% this week</small></div>
          </div>
          <div className="focus-card">
            <div className="focus-heading"><span>YOUR FOCUS</span><span className="focus-count">3 ITEMS</span></div>
            <div className="focus-item"><span className="task-check checked">✓</span><span>Finalize project brief</span><span className="task-tag tag-purple">Today</span></div>
            <div className="focus-item"><span className="task-check"></span><span>Review team feedback</span><span className="task-tag tag-orange">Soon</span></div>
            <div className="focus-item"><span className="task-check"></span><span>Share the first draft</span><span className="task-tag tag-green">On track</span></div>
          </div>
          <div className="preview-footer"><span className="status-dot" /> Everything is moving along nicely</div>
        </section>
        <div className="decor decor-one" /><div className="decor decor-two" />
      </div>
      <section className="feature-strip">
        <div><span className="feature-number">01</span><strong>See the whole picture</strong><span>Everything your team is working on, in one clear view.</span></div>
        <div><span className="feature-number">02</span><strong>Find your next step</strong><span>Turn the busywork into a simple, focused plan.</span></div>
        <div><span className="feature-number">03</span><strong>Move forward together</strong><span>Make good collaboration feel effortless.</span></div>
      </section>
    </main>
  );
}

function Dashboard() {
  return (
    <main className="page-shell dashboard-page">
      <div className="dashboard-heading">
        <div><span className="eyebrow"><span className="eyebrow-dot" /> MONDAY, OCTOBER 12</span><h1>Good morning, Alex <span className="wave">✳</span></h1><p>Here's what's happening across your workspace today.</p></div>
        <Link className="button button-primary" to="/signup">+ New project</Link>
      </div>
      <div className="dashboard-stats">
        <article className="stat-card"><div className="stat-top"><span>Active projects</span><span className="stat-symbol lavender">↗</span></div><strong>12</strong><small><b>+2</b> from last week</small></article>
        <article className="stat-card"><div className="stat-top"><span>Tasks completed</span><span className="stat-symbol apricot">✓</span></div><strong>84%</strong><small><b>+8%</b> from last week</small></article>
        <article className="stat-card"><div className="stat-top"><span>Team members</span><span className="stat-symbol mint">♧</span></div><strong>08</strong><small>Across <b>3 teams</b></small></article>
      </div>
      <div className="dashboard-columns">
        <section className="panel project-panel">
          <div className="panel-heading"><div><span className="muted-label">KEEP THINGS MOVING</span><h2>Projects in motion</h2></div><Link to="/home" className="text-link">View all <span>→</span></Link></div>
          <Project name="Brand refresh" team="Design team" progress={72} tone="violet" initials="BR" />
          <Project name="Spring campaign" team="Marketing" progress={48} tone="peach" initials="SC" />
          <Project name="Product roadmap" team="Product team" progress={91} tone="green" initials="PR" />
        </section>
        <section className="panel focus-panel">
          <div className="panel-heading"><div><span className="muted-label">A LITTLE AT A TIME</span><h2>Your focus</h2></div><span className="focus-count">3 TASKS</span></div>
          <div className="focus-item"><span className="task-check checked">✓</span><span>Finalize project brief</span><span className="task-tag tag-purple">Today</span></div>
          <div className="focus-item"><span className="task-check"></span><span>Review team feedback</span><span className="task-tag tag-orange">Soon</span></div>
          <div className="focus-item"><span className="task-check"></span><span>Share the first draft</span><span className="task-tag tag-green">On track</span></div>
          <Link className="add-task" to="/signup">＋ Add a task</Link>
        </section>
      </div>
    </main>
  );
}

function Project({ name, team, progress, tone, initials }) {
  return <div className="project-row"><span className={`project-avatar ${tone}`}>{initials}</span><div className="project-info"><div className="project-title"><strong>{name}</strong><span>{progress}%</span></div><div className="project-subtitle">{team}</div><div className="progress-track"><span className={tone} style={{ width: `${progress}%` }} /></div></div></div>;
}

function AuthPage({ signup = false }) {
  const [submitted, setSubmitted] = React.useState(false);
  const title = signup ? "Create your account" : "Welcome back";
  return (
    <main className="auth-wrap">
      <section className="auth-card">
        <Link className="auth-back" to="/home">← Back to home</Link>
        <div className="auth-mark">r<span>.</span></div>
        <span className="eyebrow"><span className="eyebrow-dot" /> A BETTER WAY TO WORK</span>
        <h1>{title}</h1>
        <p className="auth-intro">{signup ? "Create a free account to bring your team's work together." : "Sign in to pick up right where you left off."}</p>
        {submitted ? <div className="success-message" role="status">{signup ? "Thanks for signing up! Your demo account is ready." : "You're signed in for this demo. Welcome back!"}</div> : null}
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
          {signup && <label>Full name<input type="text" name="name" placeholder="Alex Morgan" autoComplete="name" required /></label>}
          <label>Email address<input type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></label>
          <label>Password<input type="password" name="password" placeholder="At least 8 characters" autoComplete={signup ? "new-password" : "current-password"} minLength="8" required /></label>
          {!signup && <div className="form-extra"><label className="checkbox-label"><input type="checkbox" /> Remember me</label><Link to="/login">Forgot password?</Link></div>}
          <button className="button button-primary auth-submit" type="submit">{signup ? "Create account" : "Sign in"} <span aria-hidden="true">→</span></button>
        </form>
        <div className="auth-switch">{signup ? "Already have an account?" : "New to Route Studio?"} <Link to={signup ? "/login" : "/signup"}>{signup ? "Sign in" : "Create an account"}</Link></div>
        <p className="auth-note">This is a frontend demo. No account data is stored or sent.</p>
      </section>
      <aside className="auth-aside"><div className="aside-orbit orbit-large" /><div className="aside-orbit orbit-small" /><div className="aside-content"><span className="aside-quote-mark">“</span><blockquote>Give your best ideas the space to become your best work.</blockquote><span className="aside-caption">A little more clarity. A lot more momentum.</span></div><div className="aside-footer">ROUTE STUDIO <span>·</span> BUILT FOR WHAT'S NEXT</div></aside>
    </main>
  );
}

function Login() { return <AuthPage />; }
function Signup() { return <AuthPage signup />; }
