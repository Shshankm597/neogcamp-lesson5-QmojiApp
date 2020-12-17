// import React from "react";
import React, { useState } from "react";
import "./styles.css";

const qmojiDictionary = {
  "😪": "Sleepy face",

  "😤": "Expressing triumph after great frustration",

  "😯": "Hushed Face",

  "😥": "Disappointed but Relieved Face",

  "🤪": "Zany Face",

  "😛": "Tongue Face"
};

var emojisWeKnow = Object.keys(qmojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function qmojiInputHandler(event) {
    const userInput = event.target.value;
    var meaning = qmojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our Database";
    }
    setMeaning(meaning);
  }

  function qmojiClickHandler(emoji) {
    var meaning = qmojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav className="navigation">
        <img src="nav-img.png" alt="Thumbs Up Emoji" />
        <h1> Qmoji App</h1>
      </nav>
      <input
        placeholder="Enter emoji or Click from below"
        onChange={qmojiInputHandler}
      />

      <h2> {meaning} </h2>

      <hr />

      <h3> emojis we know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span key={emoji} onClick={() => qmojiClickHandler(emoji)}>
            {emoji} {""}
          </span>
        );
      })}

      <footer className="footer">
        <h2> Why this app? </h2>
        <hr className="footer-head-break1" />
        <div>
          {" "}
          We were looking at emojis that are often misunderstood; from the sad
          face that is actually someone with a runny nose, to the tired face
          that looks frustrated. To celebrate World Emoji Day we take a look at
          Emojis that mean something different to what you think...{" "}
        </div>

        <hr className="footer-head-break2" />

        <h5>
          made with 💖 by{" "}
          <a href="https://devshashank.netlify.app/">Shashank</a>
        </h5>
      </footer>
    </div>
  );
}
