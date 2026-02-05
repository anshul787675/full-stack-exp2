import { useState } from "react";

function BootstrapSection() {
  const [page, setPage] = useState("home");

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-primary px-3">
        <span className="navbar-brand">Bootstrap Site</span>
        <ul className="navbar-nav ms-auto gap-2">
          <li className="nav-item">
            <button className="btn nav-link text-white" onClick={() => setPage("home")}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button className="btn nav-link text-white" onClick={() => setPage("about")}>
              About Me
            </button>
          </li>
          <li className="nav-item">
            <button className="btn nav-link text-white" onClick={() => setPage("degree")}>
              My Degree
            </button>
          </li>
          <li className="nav-item">
            <button className="btn nav-link text-white" onClick={() => setPage("contact")}>
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <div className="p-4">
        {page === "home" && (
          <>
            <h2>Home</h2>
            <p>This Home page that I have created using Bootstrap.</p>
          </>
        )}

        {page === "about" && (
          <>
            <h2>About Me</h2>
            <p>Hello My name is Prabhleen.</p>
            <p>I am a student learning Full Stack Development.</p>
          </>
        )}

        {page === "degree" && (
          <>
            <h2>My Degree</h2>
            <p>B.Tech in CSE specialising in AI&ML</p>
          </>
        )}

        {page === "contact" && (
          <>
            <h2>Contact</h2>
            <p>Email: student@cuchd.in</p>
            <p>Phone: +91 XXXXXXXXXX</p>
          </>
        )}
      </div>
    </>
  );
}

export default BootstrapSection;
