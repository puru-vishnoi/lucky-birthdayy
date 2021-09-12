import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const Lucky = () => {
    return <p>Your birthday is lucky!! </p>;
  };

  const unLucky = () => {
    return <p>Your Birthday Is Not Lucky!! </p>;
  };

  const calculateDob = (dob) => {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
      sum = sum + Number(dob.charAt(i));
    }
    return sum;
  };

  const checkLucky = (e) => {
    e.preventDefault();
    const sum = calculateDob(birthdate);

    if (sum % Number(luckynumber) === 0) {
      setLuckymsg(Lucky);
    } else {
      setLuckymsg(unLucky);
    }
  };

  const [birthdate, setBirthdate] = useState(undefined);
  const [luckynumber, setLuckynumber] = useState(undefined);
  const [visible, setVisible] = useState(true);
  const [luckymsg, setLuckymsg] = useState(null);

  return (
    <div className="App">
      <div className="main">
        <div className="box">
          <h1>Is Your Birthday Lucky?</h1>
        </div>
      </div>

      <div className="main" id="content">
        <div className="box2">
          {visible && (
            <div className="privacynotice">
              <div className="noticeinner">
                <span>We are not Storing Your Data. You're Safe!!</span>
                <span className="close" onClick={() => setVisible(false)}>
                  x
                </span>
              </div>
            </div>
          )}

          <div className="formcontainer">
            <form className="form-data" onSubmit={checkLucky}>
              <label htmlFor="date">Enter Your Birth-Date</label>
              <input
                type="date"
                required
                onChange={(e) => setBirthdate(e.target.value)}
              />
              <label htmlFor="number">Enter Your Lucky Number</label>
              <input
                type="number"
                required
                onChange={(e) => setLuckynumber(e.target.value)}
              />
              <button type="submit">Result</button>
            </form>
          </div>
          <div className="output">{luckymsg}</div>

          <footer className="footer">
            <div className="footer-header">
              <h3> connect with me </h3>
              <ul className="list-no-bullet">
                <li className="list-item-inline">
                  <a href="mailto:vishnoi.puru24@gmail.com">
                    <img src="https://img.icons8.com/color/48/000000/gmail-new.png" />
                  </a>
                </li>

                <li className="list-item-inline">
                  <a href="https://github.com/puru-vishnoi" target="_blank">
                    <img src="https://img.icons8.com/material-sharp/48/000000/github.png" />
                  </a>
                </li>

                <li className="list-item-inline">
                  <a href="https://twitter.com/PV__123" target="_blank">
                    <img src="https://img.icons8.com/fluency/48/000000/twitter.png" />
                  </a>
                </li>

                <li className="list-item-inline">
                  <a
                    href="htthttps://www.linkedin.com/in/puru-vishnoi-8b312a110/"
                    target="_blank"
                  >
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
