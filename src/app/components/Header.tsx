import React from 'react'
import Link from "next/link";
import { Montserrat } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faUser, 
  faScroll,  
  faDragon,
  faList,
  faClock, 
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

type Link = {
    name: string,
    href: string,
    icon: IconDefinition,
}

const montserrat = Montserrat({
    weight: '600',
    subsets: ['latin'],
})

const Links:Link[] = [
    {name: "Home", href:"/", icon: faHome},
    {name: "Player", href:"/player", icon: faUser},
    {name: "Quests", href:"/quests", icon: faScroll },
    {name: "Battle", href:"/battle", icon: faDragon},
    {name: "Logs", href:"/logs", icon: faList},
    {name: "History", href:"/history", icon: faClock}
]

    const Header = () => {
    return (
          <header>
              <nav className='flex justify-center items-center w-screen'>
                <ul className='flex flex-row flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center w-[60%] md:w-[80%] rounded-lg mt-3 text-black weight bg-sky-600 gap-1.5 p-2 md:gap-2.5'>
                    {
                        Links.map((link)=>(
                        <li key={link.name} className={`${montserrat}' hover:bg-sky-800 tracking-wide text-sm md:text-xl font-bold hover:text-white h-full rounded-md p-2 md:p-4`}>
                        <Link href={link.href} className='flex justify-center items-center'><FontAwesomeIcon icon={link.icon} className="w-6 h-6 mr-2"/>{link.name}</Link>
                        </li>
                        ))
                    }
                </ul>
            </nav>
          </header>
    )
    }

export default Header