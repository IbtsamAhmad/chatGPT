import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
const reload = () => {
  window.location.reload();
}
export default function Translation({ doStuff, setInput, result, loading }) {
  return (
    <div>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        Generate Response!
      </button>
        <button className="action-btn" onClick={reload}>
        Back
      </button>
      {
        loading ? <PropagateLoader 
        color="#242424"
        loading={loading}
        // cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
      }
 
    </div>
  );
}
