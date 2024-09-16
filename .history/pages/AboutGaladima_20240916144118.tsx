import Header from "../components/Header"
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import "../app/globals.css";


function AboutGaladima() {
    return (
        <div className="bg-gray-400">
            <Header/>

            <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/udr2.jpeg')" }} // Add your background image path here
    >
      <div className="bg-black bg-opacity-90 p-8 rounded-lg shadow-lg max-w-3xl text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/frtpg.jpg" // Replace with the path to the politician's image
            alt="Aminu Ibrahim Yusuf"
            width={200}
            height={200}
            className="rounded-full mb-6"
          />
          <h1 className="text-4xl font-bold text-emerald-600 mb-6">Aminu Ibrahim Yusuf</h1>
          <p className="text-gray-800 text-lg mb-4">
            <Typewriter
              words={[
                "I Aminu Ibrahim Yusuf, was born in 1987 in Kano, Nigeria.",
                "A proud product of Kano education system.",
                "I completed my primary, secondary and university education within the state.",
                "After graduating, I embarked on the mandatory National Youth Service Corps (NYSC) program, serving my country with dedication and passion.",
                "My career in civil service began in Kano state as a Forest Officer through hardwork and determination.",
                "I later transferred my service to the Federal Government, broadening my experience and expertise.",
                "With a strong foundation in environment, public administration, and community development...",
                "I am now seeking to leverage my skills to serve the people of Kumbotso Federal Constituency as their representative in the House of Representatives."
              ]}
              loop={1} // Change to 0 for infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </p>
        </div>
      </div>
    </div>

        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto text-center">
            <p>&copy; 2024 Hon. Aminu Galadima All rights reserved.</p>
            </div>
          </footer>
        </div>

    )
};

export default AboutGaladima;