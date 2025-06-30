import {Input} from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const currencyOptions = Object.keys(currencyInfo);

  const handleSwap = ()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to]);
  }
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?_gl=1*h19z5b*_ga*NTI2ODM0MzQ1LjE3NDUxNTc4MjI.*_ga_8JE65Q40S6*czE3NTExOTE2MzUkbzMkZzEkdDE3NTExOTE2ODckajgkbDAkaDA.')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <Input label="From" currencyOptions={currencyOptions} amount={amount} onCurrencyChange={(currency) => setFrom(currency)} selectCurrency={from} onAmountChange={(amount)=>setAmount(amount)}/>
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 hover:bg-blue-500 cursor-pointer text-white px-2 py-0.5"
                  onClick={handleSwap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <Input label="To" currencyOptions={currencyOptions} amount={convertedAmount} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={to}/>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-400 cursor-pointer transition-all ease-in 1s text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
