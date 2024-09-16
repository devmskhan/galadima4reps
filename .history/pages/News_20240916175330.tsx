import Header from "../components/Header"



function News() {
    return (
        <div className="bg-gray-400">
            <Header/>

            <main className="container mx-auto py-12">
  <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Vision & Missions</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <article className="bg-white p-6 rounded-lg shadow">
      <img
        src="https://images.unsplash.com/photo-1632215861513-130b66fe97f4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Young black students studying in a conducive classroom"
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2 text-gray-800">Provide standard education to the local communities</h3>
      <p className="text-gray-700 mb-4">
        Our primitive agenda is to provide a conducive environment for students
        to have better education as it is the key to the progress of every
        community...
      </p>
      <a href="#" className="text-red-600 hover:text-red-500">Read more</a>
    </article>

    <article className="bg-white p-6 rounded-lg shadow">
      <img
        src="https://images.unsplash.com/photo-1701764558596-3fcf413463d0?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Beautiful road in an area"
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2 text-gray-800">Advance infrastructural development</h3>
      <p className="text-gray-700 mb-4">
        We aim at building and erecting state of the arts structures for the betterment
        and future development of our people...
      </p>
      <a href="#" className="text-red-600 hover:text-red-500">Read more</a>
    </article>

    <article className="bg-white p-6 rounded-lg shadow">
      <img
        src="https://images.pexels.com/photos/4320473/pexels-photo-4320473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="people having business interaction"
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2 text-gray-800">Empowerment</h3>
      <p className="text-gray-700 mb-4">
        Empowering the people with the necessary skills for successful development
        and reliance...
      </p>
      <a href="#" className="text-red-600 hover:text-red-500">Read more</a>
    </article>
    
  </div>
</main>
        </div>

    )
};

export default News;


