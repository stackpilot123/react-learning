import { useState, useCallback, useEffect, useRef } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  const genratePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) {
      str += "0123456789";
    }
    if (isChar) {
      str += "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";
    }

    for (let i = 1; i <= length; i++) {
      let char = str[Math.floor(Math.random() * str.length)];
      pass += char;
    }
    setPassword(pass);
  }, [isNumber, isChar, length]);

  const passwordRef = useRef(null);

  const handleCopy = useCallback(
    () => {
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password);
     0 
    },
    [password],
  )
  

  useEffect(() => {
    genratePassword();
  }, [length, isNumber, isChar]);

  
  return (
    <>
      <div className="min-h-screen w-screen bg-zinc-800 text-white p-10">
        <h1 className="text-center text-4xl mb-5">Password Generator</h1>
        <div className="min-w-md bg-gray-700 p-8 rounded-2xl ">
          <div className="bg-white p-2 rounded-2xl flex">
            <input
              type="text"
              className="mx-auto w-full text-black text-2xl px-3 py-2"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button className="bg-blue-500 p-3 cursor-pointer rounded-md" onClick={handleCopy}>
              Copy
            </button>
          </div>

          <div className="mt-5 flex gap-4 text-lg ">
            <input
              type="range"
              min={6}
              max={100}
              className="w-3xs cursor-pointer"
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length({length})</label>
            <div>
              <input
                type="checkbox"
                name="number"
                id="number"
                className="mr-2"
                onChange={(e) => {
                  setIsNumber((prev)=>!prev)
                }}
              />
              <label htmlFor="number">Numbers</label>
            </div>

            <div>
              <input type="checkbox" name="character" id="character" onChange={(e)=>{e.target.checked?setIsChar(true):setIsChar(false)}} className="mr-2"/>
              <label htmlFor="character">Special characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
