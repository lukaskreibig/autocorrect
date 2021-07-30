import React from "react";
import { useState } from "react";

function AutocorrectTextarea({ corrections }) {
  const [autoCorrection, setAutoCorrection] = useState("");
  const [lastWord, setLastWord] = useState("");

  const correctionHandler = () => {
    if (autoCorrection.length > 0) {
      setLastWord(autoCorrection);
      for (let key in corrections) {
        console.log(key);
        console.log(corrections[key]);
        if (key === lastWord) {
          setAutoCorrection(corrections[key]);
          console.log(lastWord);
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
          onChange={(e) => {
            setAutoCorrection(e.target.value);
            correctionHandler();
          }}
          rows={10}
          cols={80}
          className="card"
        />
      </div>
    </div>
  );
}

export default AutocorrectTextarea;
