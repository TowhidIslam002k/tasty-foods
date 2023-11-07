import { useEffect } from 'react';
import ActiveLink from '../../SHARED/Activelink/ActiveLink';

function OffcanvasNavbar() {
  useEffect(() => {
    // Load Bootstrap CSS dynamically
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css';
    document.head.appendChild(cssLink);

    // Load the Bootstrap JavaScript dynamically
    const jsScript = document.createElement('script');
    jsScript.src = 'https://code.jquery.com/jquery-3.7.1.min.js'; // Include jQuery (required for Bootstrap JavaScript)
    jsScript.async = true;
    jsScript.onload = () => {
      const bootstrapScript = document.createElement('script');
      bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js';
      document.body.appendChild(bootstrapScript);
    };
    document.body.appendChild(jsScript);

    return () => {
      // Remove the CSS and JavaScript when the component is unmounted
      cssLink.parentNode.removeChild(cssLink);
      jsScript.parentNode.removeChild(jsScript);
    };
  }, []);

  return (
    <nav className="navbar bg-dark navbar-expand-lg text-white">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Offcanvas navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title text-black" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
          <ActiveLink to="/recipe">Home</ActiveLink>
          </li>
          <li className="nav-item">
          <ActiveLink to="/recipe">Home</ActiveLink>
          </li>
        </ul>
          <button className="btn btn-outline-success" type="submit">Login</button>
      </div>
    </div>
  </div>
</nav>
  );
}

export default OffcanvasNavbar;
