import React from "react";
import { BsSlack, BsGithub } from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import profile from "./profile.jpg";

function App() {
  const zuri_link = "www.";
  const zuri_team = "www.";
  const zuri_books = "www.";
  const python_book = "www.";
  const check_link = "www.";
  const desgin_book = "www.";

  return (
    <div className={`App ${theme}`}>
      <header className="header">
        <p>
          <CiDark className="theme-btn" onClick={toggleTheme} />
        </p>
        <img src={profile} alt="profile-img" className="skeng" />
        <p>Odemakin Victoria</p>
      </header>
      <main className="links">
        <button type="button"></button>
        <a href={zuri_link}> Twitter Link</a>
        <button type="button">
          <a href={zuri_team}>
            {" "}
            Zuri Team <br>Join the Zuri Team</br>{" "}
          </a>{" "}
        </button>
        <button type="button">
          <a href={zuri_books}>
            {" "}
            Zuri Books{" "}
            <br>
              Zuri has complied a wide range of books on programming just for
              you.
            </br>{" "}
          </a>
        </button>
        <button type="button">
          <a href={python_book}>
            {" "}
            Zuri Team{" "}
            <br>
              Eager to automate tasks using python, i have the perfect books for
              you
            </br>{" "}
          </a>
        </button>
        <button type="button">
          <a href={check_link}>
            {" "}
            Background Check fpr Coders
            <br>
              Review your candidate before the interview stage with our
              background checks
            </br>{" "}
          </a>
        </button>
        <button type="button">
          <a href={desgin_book}>
            {" "}
            Design Books{" "}
            <br>
              Want to learn Design, click her efor a free copy to get your
              journey started.
            </br>{" "}
          </a>
        </button>
        <div className="sml-icons">
          <BsSlack className="footer-icon" />{" "}
          <BsGithub className="footer-icon" />
        </div>
      </main>
      <hr />
      <footer className="footer">
        <div>
          <h4>Zuri Internship</h4>
        </div>

        <div className="ingressive-sect">
          <p className="world-icn">
            <BiWorld />
          </p>
          <h4 className="world">
            Ingressive <br /> For Good
          </h4>
        </div>
      </footer>
    </div>
  );
}

export default App;
