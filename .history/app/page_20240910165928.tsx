

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


 
      <main className="container mx-auto py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Agenda47: Ending Crime</h3>
          <p className="text-gray-700 mb-4">President Trump’s plan to restore law and order...</p>
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
  <p>&copy; 2024 Donald J. Trump. All rights reserved.</p>
</div>
</footer>
    </div>
  );
}
