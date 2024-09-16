

function Header() {
    return (
        <header className="bg-white text-gray-800 py-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-3">
      <img src="/logo.png" alt="Logo" className="h-10 w-14" />
      <h1 className="text-3xl text-green-600 font-bold">Hon.Aminu Galadima</h1>
      <h1 className="text-4xl text-green-600 font-bold mb-4">Welcome to the Official Campaign of <span className="text-yellow-400">Galadima</span></h1>
    </div>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-gray-600 hover:text-green-600">Home</a></li>
        <li><a href="#" className="text-gray-600 hover:text-green-600">Agenda</a></li>
        <li><a href="#" className="text-gray-600 hover:text-green-600">News</a></li>
      </ul>
    </nav>
  </div>
</header>

    )
}

export default Header;