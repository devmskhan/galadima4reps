

export default function Home() {
  return (
    <div className=" min-h-screen bg-gray-200">
    <header className="bg-red-700 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">Hon. Aminu Galadanci</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-200">Home</a></li>
          <li><a href="#" className="hover:text-gray-200">Agenda</a></li>
          <li><a href="#" className="hover:text-gray-200">News</a></li>
          <li><a href="#" className="hover:text-gray-200">Contact</a></li>
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
      <main className="">
        
       
            
      </main>
    </div>
  );
}
