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



// import "./App.css";
// import { Configuration, OpenAIApi } from "openai";
// import OptionSelection from "./components/OptionSelection";
// import Translation from "./components/Translation";
// import { arrayItems } from "./AIOptions";
// import { useState } from "react";

// function App() {
//   const configuration = new Configuration({
//     apiKey: "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",
//     // apiKey: "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"
//     // apiKey: import.meta.env.VITE_Open_AI_Key,
//   });
//   const openai = new OpenAIApi(configuration);
//   const [option, setOption] = useState({});
//   const [result, setResult] = useState("");
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   // console.log(import.meta.env.VITE_Open_AI_Key);
//   const selectOption = (option) => {
//     setOption(option);
//   };

//   const doStuff = async () => {
//     setLoading(true)
//     let object = { ...option, prompt: input };

//     const response = await openai.createCompletion(object);

//     setResult(response.data.choices[0].text);
//     setLoading(false);
//   };

//   return (
//     <div className="App">
//       {Object.values(option).length === 0 ? (
//         <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
//       ) : (
//         <Translation doStuff={doStuff} setInput={setInput} result={result} loading={loading} />
//       )}
//     </div>
//   );
// }

// export default App;
