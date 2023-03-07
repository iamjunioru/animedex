import React from "react";
import "./About.css";

export default function About() {
  return (
    <div id="about" className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
          <h2>About AnimeDex</h2>

          <h4>
            just a anime search site, made with React and Kitsu API by
            Junior and Juan.
          </h4>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <br />
          <button class="cssbuttons-io">
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              code
            </span>
          </button>
        </div>
        <div className="col-sm-4"></div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12">
          <h2>Dupla</h2>
          <ul>
            <li>
              <strong>R. Junior</strong> - Desenvolvedor Web
            </li>
            <li>
              <strong>Juan</strong> - Designer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
