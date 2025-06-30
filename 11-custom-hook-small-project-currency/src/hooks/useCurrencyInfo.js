import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async ()=>{
            let stringData  = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`); // this data comes in string so we have to convert it in json and then use 
            let convertedData = await stringData.json();
            setData(convertedData[currency]);
            console.log(data);


        }

        fetchData();



    }, [currency])
    
    return data;
    
}

export default useCurrencyInfo;