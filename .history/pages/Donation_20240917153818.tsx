import Header from "../components/Header"
import "../app/globals.css";
import { useState } from 'react';



const DonateButton = () => {
    const [amount, setAmount] = useState('');


function Donation() {
    return (
        <div className="bg-gray-400">
            <Header/>

            <div className="text-center">
      <form onSubmit={}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mb-4 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-red-600 text-white font-bold py-2 px-6 rounded-full mt-4 inline-block hover:bg-red-700 transition duration-300"
        >
          Donate Now
        </button>
      </form>
    </div>

        </div>

    )
};

export default Donation;


