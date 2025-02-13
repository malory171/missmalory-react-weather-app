import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        Coded by{" "}
        <a
          href="https://www.shecodes.io/graduates/135692-malory-mezierre"
          target="_blank"
          rel="noreferrer"
        >
          Malory Mézierre
        </a>{" "}
        🔆 and{" "}
        <a
          href="https://github.com/malory171/missmalory-react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
