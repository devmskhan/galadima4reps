import Header from "../components/Header";
import "../app/globals.css";
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Import Firestore database

function Membership() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [occupation, setOccupation] = useState('');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Push form data to Firestore
      await addDoc(collection(db, "memberships"), {
        fullName,
        email,
        phone,
        address,
        occupation,
        reason,
        createdAt: new Date()
      });

      alert('Form submitted successfully!');
      setFullName(''); // Clear input fields
      setEmail('');
      setPhone('');
      setAddress('');
      setOccupation('');
      setReason('');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Error submitting the form. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-400">
      <Header />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center text-emerald-600 mb-6">
            Membership Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter your address"
                required
              />
            </div>

            <div>
              <label htmlFor="occupation" className="block text-gray-700">
                Occupation
              </label>
              <input
                type="text"
                id="occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter your occupation"
                required
              />
            </div>

            <div>
              <label htmlFor="reason" className="block text-gray-700">
                Why do you want to join?
              </label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Explain why you want to join the political movement"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition ${loading && 'cursor-not-allowed'}`}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Membership;
