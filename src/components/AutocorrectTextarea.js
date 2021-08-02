import React from "react";
import { useState } from "react";

function AutocorrectTextarea({ corrections }) {
  const [autoCorrection, setAutoCorrection] = useState("");
  const [lastWord, setLastWord] = useState([]);

  const correctionHandler = (e) => {
    let input = e;
    setAutoCorrection(input);
    if (input.indexOf(" ") !== -1) {
      setLastWord(input.split(" "));
      for (let key in corrections) {
        if (key === lastWord[lastWord.length - 2]) {
          setAutoCorrection(input.replace(key, corrections[key]));
        }
      }
    }
  };

  return (
    <div>
      <div className="text-center">
        <textarea
          data-testid="textarea"
          value={autoCorrection}
          onChange={(e) => correctionHandler(e.target.value)}
          rows={10}
          cols={80}
          className="card"
        />
      </div>
    </div>
  );
}

export default AutocorrectTextarea;
