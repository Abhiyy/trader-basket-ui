"use client";
import Link from "next/link";
import { ButtonHTMLAttributes, useState } from "react";

export default function SharePriceCalculation() {
  const [np,setNP] = useState(0);
  const [shares,setShares] = useState(0);
  const [eps,setEPS] = useState(0);
  const [currentPrice,setCurrentPrice] = useState(0);
  const [peRatio,setPERatio] = useState(0);
  const [idealPrice,setIdealPrice] = useState(0);
  const [priceDifference,setPriceDifference] = useState(0);
  const calculateIdealPrice = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    //const eps = np / shares;
    // setEPS(eps);
    const idealPrice = eps * peRatio;
    setIdealPrice(idealPrice);
    const difference = idealPrice - currentPrice;
    setPriceDifference(difference);
  }
  return (
    <div>
      <h1>Share Price Calculation</h1> <hr />
      <form>
        {/* <div className="mb-4">
        <label htmlFor="netprofit">Enter Net Profit:</label>
        <input className="" type="number" id="netprofit" name="netprofit" onChange={(e) => setNP(parseFloat(e.target.value) || 0)} />
        </div>
        <div className="mb-4">
        <label htmlFor="shares">Number of Shares:</label>
        <input type="number" id="shares" name="shares" onChange={(e) => setShares(parseFloat(e.target.value) || 0)} />
        </div> */}
        <div className="mb-4">
        <label htmlFor="eps">EPS:</label>
        <input type="number" id="eps" name="eps" onChange={(e) => setEPS(parseFloat(e.target.value) || 0)} />
        </div>
        <div className="mb-4">
        <label htmlFor="peratio">P/E Ratio:</label>
        <input type="number" id="peratio" name="peratio" onChange={(e) => setPERatio(parseFloat(e.target.value) || 0)} />
        </div>
        <div className="mb-4">
        <label htmlFor="currentPrice">Current Share Price:</label>
        <input type="number" id="currentPrice" name="currentPrice" onChange={(e) => setCurrentPrice(parseFloat(e.target.value) || 0)} />
        </div>
        <button type="button" onClick={calculateIdealPrice}>
          Calculate Ideal Price
        </button>
      </form>
      <div className="mt-4">
      <p>Ideal Price: {idealPrice}</p>
      <p>Price Difference: {priceDifference}</p>
      </div>  
      <hr/>
      <Link href="/" className="text-blue-600 hover:underline"> Back </Link>
    </div>
  );
}