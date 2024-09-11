

export default function Home() {
  return (
    <div className=" min-h-screen bg-gray-200">
    <header className="bg-gray-100 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl text-green-200 font-bold">Hon. Aminu Galadanci</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-200 hover:text-gray-700">Home</a></li>
          <li><a href="#" className="hover:text-gray-700">Agenda</a></li>
          <li><a href="#" className="hover:text-gray-700">News</a></li>
          <li><a href="#" className="hover:text-gray-700">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/logo.png')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Join the Movement</h2>
        <p className="text-lg mb-8">Domin cigaban karamar hukumsar Kumbotso</p>
        <a href="#" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">Majalisar Tarayya Insha Allah</a>
      </div>
    </div>
  </section>
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
