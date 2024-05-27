import React from "react";

const SampleProgram = () => {
  const Speak = () => {
    let text = document.getElementById("note").value;
    let speakText = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(speakText)
  };

  return (
    <div>
      <input type="text" name="speaknote" id="note" />
      <button type="button" onClick={Speak}>Speak</button>
    </div>
  );
};

export default SampleProgram;
