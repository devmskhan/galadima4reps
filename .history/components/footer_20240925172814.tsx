


function Footer() {
    return (
      <>
        <footer className="bg-gray-800 text-white py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Details */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Galadima For House of Representatives</h3>
                <p>We aim to serve Kumbotso Community, and serving we must</p>
                <p className="mt-4">&copy; 2024 Galadima for Reps</p>
              </div>
  
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul>
                  <li className="mb-2">
                    <a href="#home" className="hover:text-gray-200">Home</a>
                  </li>
                  <li className="mb-2">
                    <a href="#about" className="hover:text-gray-200">Manifesto</a>
                  </li>
                  <li className="mb-2">
                    <a href="#services" className="hover:text-gray-200">About Galadima</a>
                  </li>
                  <li className="mb-2">
                    <a href="#contact" className="hover:text-gray-200">Contact Us</a>
                  </li>
                </ul>
              </div>
  
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="mb-2">Kano State, Nigeria</p>
                <p className="mb-2">Phone: +234 8175990408</p>
                <p className="mb-2">Email: Honourableaminugaladima4rep@gmail.com</p>
  
              </div>
            </div>

            <div className="bg-gray-500 inline-flex justify-center space-x-4 mt-4 p-4 rounded-md">
        {/* Social Media Icons */}
        <a href="https://web.facebook.com/profile.php?id=61565636054383" className="text-blue-500 hover:text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            {/* Facebook Icon */}
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H8.898v-2.89h1.54V9.744c0-1.52.916-2.356 2.292-2.356.65 0 1.333.116 1.333.116v1.464h-.751c-.74 0-.97.462-.97.934v1.114h1.647l-.263 2.89h-1.384v6.988C18.343 21.128 22 16.991 22 12z"/>
          </svg>
        </a>
        <a href="https://x.com/HONGALADIMA4REP" className="text-gray-800 hover:text-gray-600">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    {/* X Logo */}
    <path d="M21.707 2.293a1 1 0 0 0-1.414 0L12 10.586 3.707 2.293a1 1 0 0 0-1.414 1.414L10.586 12l-8.293 8.293a1 1 0 0 0 1.414 1.414L12 13.414l8.293 8.293a1 1 0 0 0 1.414-1.414L13.414 12l8.293-8.293a1 1 0 0 0 0-1.414z"/>
  </svg>
</a>

        <a href="https://instagram.com/hon_aminu_galadima_4_rep" className="text-pink-400 hover:text-pink-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            {/* Instagram Icon */}
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.309 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.248-3.608 1.309-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.248-2.242-1.309-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.248 3.608-1.309 1.265-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.332.015 7.053.073 5.779.132 4.533.4 3.516 1.417 2.5 2.434 2.232 3.68 2.173 4.954.015 8.332 0 8.741 0 12s.015 3.668.073 4.947c.059 1.274.326 2.52 1.343 3.537 1.017 1.017 2.263 1.284 3.537 1.343C8.332 23.985 8.741 24 12 24s3.668-.015 4.947-.073c1.274-.059 2.52-.326 3.537-1.343 1.017-1.017 1.284-2.263 1.343-3.537C23.985 15.668 24 15.259 24 12s-.015-3.668-.073-4.947c-.059-1.274-.326-2.52-1.343-3.537-1.017-1.017-2.263-1.284-3.537-1.343C15.668.015 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.124A3.963 3.963 0 0 1 8.038 12 3.963 3.963 0 0 1 12 8.038 3.963 3.963 0 0 1 15.962 12 3.963 3.963 0 0 1 12 15.962zm6.406-10.845a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z"/>
          </svg>
        </a>
      </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
  