import React, { useState, useEffect, useContext } from "react";
import Dice from "./components/tenzies/Dice";
import ThemeContext from "./themeContext";

function Tenzies() {
  const [dices, setDices] = useState(
    new Array(10).fill(1).map(() => {
      return { score: rollADice6(), locked: false };
    })
  );
  const [lastChange, setLastChange] = useState(Date.now());
  const [isWon, setIsWon] = useState(false);
  const theme = useContext(ThemeContext);
  
  useEffect(() => {
    setIsWon(checkIsWon());
  }, [dices]);

  function rollADice6() {
    return Math.ceil(Math.random() * 6);
  }

  function RollAllDices() {
    setDices((oldDices) =>
      oldDices.map((oldDice) =>
        oldDice.locked ? oldDice : { ...oldDice, score: rollADice6() }
      )
    );
  }

  function Reset() {
    setDices((oldDices) =>
      oldDices.map((oldDice) => {
        return { locked: false, score: rollADice6() };
      })
    );
  }

  function checkIsWon() {
    for (let index = 1; index < dices.length; index++) {
      const element = dices[index];
      const previousElement = dices[index - 1];
      if (element.score != previousElement.score) {
        return false;
      }
    }
    return true;
  }

  console.log(JSON.stringify(dices));
  console.log(isWon);

  return (
    <div className="h-screen flex items-center justify-center bg-sky-900">
      <div className="h-[320px] w-[320px] bg-stone-200 flex items-center flex-col p-6 rounded-md">
        <h2 className="font-bold">Tenzies {theme}</h2>
        <p>
          Roll until all dices are the same. Click each dice to freeze it at its
          current value between rolls
        </p>
        <div className="flex flex-row justify-center gap-3 flex-wrap mt-4">
          {dices.map((dice) => (
            <span
              onClick={() => {
                dice.locked = !dice.locked;
                setLastChange(Date.now());
              }}
            >
              <Dice score={dice.score} locked={dice.locked} />
            </span>
          ))}
        </div>

        {isWon ? (
          <button
            className="w-28 mt-5 bg-sky-800 text-sky-50 font-bold py-2 px-3 rounded-md"
            onClick={Reset}
          >
            You won ! Reset
          </button>
        ) : (
          <button
            className="w-28 mt-5 bg-sky-800 text-sky-50 font-bold py-2 px-3 rounded-md"
            onClick={RollAllDices}
          >
            Roll all dices
          </button>
        )}
      </div>
    </div>
  );
}

export default Tenzies;
