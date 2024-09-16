import { Bars3Icon } from '@heroicons/react/24/outline'

function Header() {
    return (
      <header className="sticky topbg-white text-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-14" />
          <h1 className="text-4xl text-emerald-600 font-bold mb-4">Welcome to the Official Campaign of <span className="text-orange-800">Galadima</span></h1>
        </div>
        <div>
          <Bars3Icon className="h-8 w-8 text-gray-800 cursor-pointer" />
        </div>
      </div>
    </header>

    )
}

export default Header;