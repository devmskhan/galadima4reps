

function Body() {
    return (
        <div>
            <section className="relative h-[500px] bg-cover bg-center flex" style={{ backgroundImage: "url('/1st.jpeg')" }}>
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col sm:flex-row items-center w-full">
    {/* Text link only visible on all screens */}
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
      <a href="#" className="text-gray-300 font-bold mb-3 py-2 px-4 rounded ">
        Federal House of Representatives Insha Allah
      </a>
    </div>

    {/* Full text - Hidden on small screens */}
    <div className="w-full sm:w-1/2 flex items-center justify-start sm:pl-16 pl-6 sm:mt-0 mt-8 hidden sm:block">
      <div className="text-left text-white">
        <p className="text-lg mb-6">Join the Movement and Help Us Build a Brighter Future for Our Community</p>
        <p className="text-lg mb-8">For the development of Kumbotso Local Government</p>
      </div>
    </div>

    {/* Image Section - Moves slightly higher on small screens */}
    <div className="w-full sm:w-1/2 flex items-center justify-center mt-4 sm:mt-0">
      <img src="/top.png" alt="Movement Image" className="h-full object-cover sm:mt-0 mt-[-20px] " />
    </div>
  </div>
</section>


{/* Campaign Highlights */}
<section className="highlights py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-gray-800 text-3xl font-semibold mb-6">Key Campaign Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="highlight bg-gray-100 p-6 rounded-md shadow-md">
              <h3 className="text-gray-800 text-xl font-bold mb-4">Healthcare for All</h3>
              <p>Our vision includes affordable healthcare for every citizen, making it a priority for our constituency.</p>
            </div>
            <div className="highlight bg-gray-100 p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-4">Quality Education</h3>
              <p>We aim to improve the quality of education, ensuring access to modern learning tools for students.</p>
            </div>
            <div className="highlight bg-gray-100 p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-4">Economic Growth</h3>
              <p>Creating jobs and supporting local businesses is at the heart of our economic policy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {/* <section className="overview bg-gray-50 py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Our Vision for the Future</h2>
            <p className="text-lg mb-4">
              Together, we can achieve a brighter future for our community by focusing on healthcare, education, and economic growth. Our campaign is dedicated to listening to the people and making sure their voices are heard.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img src="/vision.jpg" alt="Campaign Vision" width={500} height={300} className="rounded-md shadow-md" />
          </div>
        </div>
      </section> */}


      <div className="bg-gray-100 py-8 px-4 md:px-8">
  <div className="container mx-auto">
    <h2 className="text-center text-3xl text-emerald-600 font-bold mb-6">Our Vision & Mission</h2>
    <div className="space-y-6">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-2xl text-orange-800 font-semibold mb-4">Vision</h3>
        <p className="text-gray-700 leading-relaxed">
          To be a catalyst for transformative development and inclusive growth in Kumbotso Federal Constituency, where every citizen has access to quality education, healthcare, economic opportunities, and a safe environment, thereby becoming a model for sustainable development in Nigeria.
        </p>
      </div>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-2xl text-orange-800 font-semibold mb-4">Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          To provide effective representation, visionary leadership, and collaborative governance that addresses the unique needs and aspirations of Kumbotso Federal Constituency.
        </p>
      </div>
    </div>
  </div>
</div>


{/* <main className="container mx-auto py-12">
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
</main> */}




<footer className="bg-gray-900 text-white py-8">
<div className="container mx-auto text-center">
  <p>&copy; 2024 Hon. Aminu Galadima All rights reserved.</p>
</div>
</footer>
 </div>

    )
};

export default Body;
