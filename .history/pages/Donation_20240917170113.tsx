import Header from "../components/Header";
import "../app/globals.css";
import { useState, FormEvent } from 'react';

function Donation() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Donating ${amount} NGN`);
  };

  return (
    <div className="bg-gray-400">
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-3xl font-bold text-emerald-600 mb-6">Donate Today,Help us  for the Better Tomorrow</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <button
              type="submit"
              className="bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition duration-300"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Donation;
