import Header from "../components/Header"
import "../app/globals.css";


function Membership() {
    return (
        <div className="bg-gray-400">
            <Header/>

            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-emerald-600 mb-6">
          PMembership Form
        </h2>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
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
              
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Explain why you want to join the political movement"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
        </div>

    )
};

export default Membership;