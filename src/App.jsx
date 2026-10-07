import { Link, NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header className="site-header">
        <NavLink className="brand" to="/home" aria-label="Route Studio home"><span className="brand-mark">r<span>.</span></span><span>route<span className="brand-light">studio</span></span></NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Dashboard</NavLink>
        </nav>
        <div className="header-actions"><NavLink className="login-link" to="/login">Log in</NavLink><NavLink className="button button-small" to="/signup">Get started <span aria-hidden="true">↗</span></NavLink></div>
      </header>
      <Outlet />
      <footer className="site-footer"><span>© 2026 Route Studio</span><span>Make room for great work.</span><Link to="/login">Your workspace <span>→</span></Link></footer>
    </>
  );
}
