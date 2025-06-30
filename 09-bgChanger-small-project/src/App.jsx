import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  const allColors = [
    "red",
    "green",
    "blue",
    "olive",
    "gray",
    "yellow",
    "pink",
    "purple",
    "lavender",
    "white",
  ];
  const handleChange =(mainColor)=>{
    setColor(mainColor);
  }
  return (
    <div className="min-h-screen w-screen  px-10 relative flex justify-center" style={{backgroundColor: color}}>
        <div className="text-black p-2 bg-white rounded-xl flex gap-2 fixed bottom-10 shadow-gray-600 shadow-md">
          {allColors.map((color, index) => {
            return (
              <button
                className="rounded-4xl px-5 py-2 text-center cursor-pointer shadow-gray-600 shadow-md"
                key={index}
                style={{ backgroundColor: color }}
                onClick={()=>{handleChange(color)}}
              >
                {color}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default App;
