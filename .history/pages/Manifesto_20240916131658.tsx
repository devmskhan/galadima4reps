import Header from "../components/Header"


function Manifesto() {
    return (
        <div className="bg-gray-400">
            <Header/>

            <div className="manifesto-page">
      <section className="hero-section bg-emerald-500 text-gray-300 py-20 px-6 bg-cover bg-center" style={{ backgroundImage: "url('/udr1.jpeg')" }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Manifesto: Our Vision for a Better Tomorrow</h1>
          <p className="text-lg mb-6">Transforming Kumbotso Local Government for a brighter future. As your dedicated representative, i pledge to address the pressing issues facing our community</p>
        </div>
      </section>

      {/* Key Policies */}
      <section className="policies-section py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Key Areas of Focus</h2>

          {/* Healthcare */}
          <div className="policy bg-gray-100 p-6 mb-8 rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4">Industrial Growth & Environmental Sustainability</h3>
            <p></p>
            <ul className="list-disc list-inside mt-4">
              <li>Attract new industries and investment while ensuring eco-frienndly prcatices</li>
              <li>Implement measures to mitigate environmental challenges and promote sustainable development</li>
              
            </ul>
          </div>

          {/* Education */}
          <div className="policy bg-gray-100 p-6 mb-8 rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4">Education Revolution</h3>
            <p>Education is the foundation of our future. We are committed to investing in schools, modernizing curriculum, and ensuring that every child has access to quality education.</p>
            <ul className="list-disc list-inside mt-4">
              <li>Advocate for increased funding and resources for schools</li>
              <li>Introduce initiatives for skill development, vocational training and digital literacy</li>
            </ul>
          </div>

          {/* Empowerment */}
          <div className="policy bg-gray-100 p-6 mb-8 rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4">Youth Empowerment & Employment</h3>
            <p></p>
            <ul className="list-disc list-inside mt-4">
              <li>Create 10,000 new jobs in the next five years</li>
              <li>Develop and support programs for entreneurship, job creation and mentorship</li>
              <li>Collaborative with industries to provide training and employment opportunities</li>
            </ul>
          </div>

          {/* Infrastructure */}
          <div className="policy bg-gray-100 p-6 mb-8 rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4">Infrastructural Development</h3>
            <p>Our infrastructure policy will prioritize the development of roads, bridges, and public transportation systems to enhance connectivity and spur economic growth.</p>
            <ul className="list-disc list-inside mt-4">
              <li>Upgrade roads, transportation and public amenities</li>
              <li>Ensure efficient waste management and environmental conservation</li>
              <li>Build more affordable housing and public utilities</li>
            </ul>
          </div>

          <div className="policy bg-gray-100 p-6 mb-8 rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4">Healthcare & Social Welfare</h3>
            <p></p>
            <ul className="list-disc list-inside mt-4">
              <li>Improve access to quality healthcare services and facilities</li>
              <li>Enhance social welfare programs for vulnerable population</li>
            </ul>
          </div>

          <div className="policy bg-gray-100 p-6 mb-8 rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4">Transparency & Accountability</h3>
            <p></p>
            <ul className="list-disc list-inside mt-4">
              <li>Foster open communication and regular townhall meetings</li>
              <li>Promote transparency in governance and environmental conservation</li>
            </ul>
          </div>

          <div className=>

          </div>

        </div>
      </section>
    </div>
        </div>

    )
};

export default Manifesto;


