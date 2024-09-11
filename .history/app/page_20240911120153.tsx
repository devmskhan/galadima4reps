

export default function Home() {
  return (
    <div className=" min-h-screen bg-gray-200">
   <header className="bg-white text-gray-800 py-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-3">
      <img src="/logo.png" alt="Logo" className="h-10 w-16" />
      <h1 className="text-3xl text-green-600 font-bold">Hon. Aminu Galadanci</h1>
    </div>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-gray-600 hover:text-green-600">Home</a></li>
        <li><a href="#" className="text-gray-600 hover:text-green-600">Agenda</a></li>
        <li><a href="#" className="text-gray-600 hover:text-green-600">News</a></li>
        <li><a href="#" className="text-gray-600 hover:text-green-600">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>


<section className="relative h-[500px] bg-cover bg-center flex" style={{ backgroundImage: "url('/1st.jpeg')" }}>
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center w-full">
    <div className="w-1/2 flex items-center justify-start pl-16">
      <div className="text-left text-white">
        <h2 className="text-4xl font-bold mb-4">Join the Movement</h2>
        <p className="text-lg mb-8">For the development of Kumbotso Local Government</p>
        <a href="#" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
          Federal House of Representatives Insha Allah
        </a>
      </div>
    </div>
    <div className="w-1/2 flex items-center justify-center">
      <img src="/top.png" alt="Movement Image" className="h-full object-cover" />
    </div>
  </div>
</section>

      <main className="container mx-auto py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Our Aim and Objectives</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Provide standard education to the local communities</h3>
          <p className="text-gray-700 mb-4">Our primitive agenda is to provide a conducive environme</p>
          <a href="#" className="text-red-600 hover:text-red-500">Read more</a>
        </article>

        <article className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Energy Independence</h3>
          <p className="text-gray-700 mb-4">Trump’s plan to eliminate restrictive energy regulations...</p>
          <a href="#" className="text-red-600 hover:text-red-500">Read more</a>
        </article>

        <article className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Protecting Children</h3>
          <p className="text-gray-700 mb-4">Trump announces a new plan to protect children from harmful ideologies...</p>
          <a href="#" className="text-red-600 hover:text-red-500">Read more</a>
        </article>
      </div>
    </main>


<footer className="bg-gray-900 text-white py-8">
<div className="container mx-auto text-center">
  <p>&copy; 2024 Hon. Aminu Galadanci All rights reserved.</p>
</div>
</footer>
    </div>
  );
}
