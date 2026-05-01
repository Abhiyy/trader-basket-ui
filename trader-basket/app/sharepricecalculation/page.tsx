import Link from "next/link";

export default function SharePriceCalculation() {
  return (
    <div>
      <h1>Share Price Calculation</h1>
      <p>This page will display the share price calculation results.</p>
      <Link href="/" className="text-blue-600 hover:underline"> Back </Link>
    </div>
  );
}