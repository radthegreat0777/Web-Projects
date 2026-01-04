import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleAction = (val) => {
    if (val === "=") {
      try {
        setResult(evaluate(input).toString());
      } catch {
        setResult("Error");
      }
    } else if (val === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + val);
    }
  };

  const buttons = [
    "C", "(", ")", "/", "sin", "7", "8", "9", "*", "cos", 
    "4", "5", "6", "-", "tan", "1", "2", "3", "+", "log", 
    "0", ".", "sqrt", "^", "="
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 p-4">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-700">
        <div className="mb-4 p-4 bg-slate-950 rounded-lg text-right min-h-24">
          <div className="text-slate-400 text-sm h-6 truncate">{input}</div>
          <div className="text-white text-3xl font-bold truncate">{result || "0"}</div>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleAction(btn)}
              className={`p-3 rounded-lg text-sm font-semibold transition-all
                ${btn === "=" ? "bg-blue-600 hover:bg-blue-500 text-white col-span-1" : 
                  "bg-slate-700 hover:bg-slate-600 text-slate-200"}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
