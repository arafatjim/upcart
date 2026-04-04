import React, { FC } from 'react'
import Logo from '../Logo';
import { X } from 'lucide-react';
import { headerData } from '@/Constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialLinks from './SocialLinks';
import { useOutsideClick } from '@/hook';
interface SideMenuProps {
    isOpen: boolean;
    onClose: ()=>void;
}
const SideMenu : FC<SideMenuProps> = ({isOpen, onClose}) => { 
    const pathName = usePathname();
    const sideMenuRef =useOutsideClick<HTMLDivElement>(()=> {
        onClose();
    });
  return (
    <div ref={sideMenuRef} className={`fixed top-0 left-0 h-full w-[90%] bg-nav_footer z-50 mt-1 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      
      
        <div className='flex items-center justify-between p-4 border-b border-gray-300'>
            <button onClick={onClose}>
                <Logo/>
            </button>
            <button className='cursor-pointer ' onClick={onClose}>
                <X className='h-6 w-6 text-white hover:text-blue-700'/>
            </button>
        </div>

        {/* menues */}
        <div className='flex flex-col mt-4'>
            {
                headerData.map((item)=>(
                    <div key={item?.id} className='px-4 py-2 border-gray-300'>
                        <Link  key={item?.id} href={item?.href} className={` text-white font-semibold hover:text-warning hoverEffect  ${pathName === item?.href && 'text-warning' }`} onClick={onClose}>
                            {item?.title}
                        </Link>
                    </div>
                ))
            }
        </div>
      
      {/* social links */}
      <div className="ml-3 mt-2">
        <SocialLinks/>
      </div>

    </div>
  )
}

export default SideMenu
