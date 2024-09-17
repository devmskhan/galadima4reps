import { Bars3Icon } from '@heroicons/react/24/outline'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import Marquee from 'react-fast-marquee';


function Header() {
    return (
      <header className="sticky top-0 bg-white text-gray-800 py-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-3">
      <img src="/logo.png" alt="Logo" className="h-10 w-14" />
      <h1 className="text-4xl text-emerald-600 font-bold mb-4">
        Welcome to the Official Campaign of <span className="text-orange-800">Galadima</span>
      </h1>
    </div>
    <div>
    <DropdownMenu>
        <DropdownMenuTrigger>
          <Bars3Icon className="h-8 w-8 text-gray-800 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Galadima</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/Manifesto">Manifesto</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/AboutGaladima">About Galadima</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/Membership">Membership</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
          <span className="text-gray-500 cursor-not-allowed">
            Empowerment
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
  <span className="text-gray-500 cursor-not-allowed">
  Schorlarships
  </span>
</DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/News">News</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/Gallery">Gallery</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
          <span className="text-gray-500 cursor-not-allowed">
          Quick links
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <span className="text-gray-500 cursor-not-allowed">
          Contact us
          </span>
        </DropdownMenuItem>
          {/* <DropdownMenuItem asChild>
            <Link href="/ContactUs">Contact us</Link>
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>

  {/* Marquee section placed under logo, text, and Bars3Icon */}
  <div className="bg-emerald-100 py-4 mt-4">
    <Marquee speed={50} gradient={false}>
      <div className="flex items-center">
        <span className="text-emerald-600 font-bold text-lg mx-4">
          Our primitive agenda is to provide a conducive environment for students to have better education as it is the key to the progress of every community...
        </span>
        <span className="text-gray-800 font-bold text-lg mx-4">
          We aim at building and erecting state of the art structures for the betterment and future development of our people...
        </span>
        <span className="text-gray-800 font-bold text-lg mx-4">
          Empowering the people with the necessary skills for successful development and reliance...
        </span>
      </div>
    </Marquee>
        <Link href="/News" className="text-blue-600 font-semibold underline ml-6 text-sm">
          Read More
        </Link>
  </div>
</header>


    )
}

export default Header;