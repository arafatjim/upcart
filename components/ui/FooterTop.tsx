import React from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
interface ContactIdemData {
  id:number;
  title:string;
  subtitle:string;
  icon:React.ReactNode;
}
const data: ContactIdemData[]=[
  {
    id:1,
    title:"Visit Us",
    subtitle:"123 Main St, Anytown, USA",
    icon: <MapPin className="h-5 w-5 text-gray-500 hover:text-dark" />
  },
  {
    id:2,
    title:"Call Us",
    subtitle:"+1 (555) 123-4567",
    icon: <Phone className="h-5 w-5 text-gray-500 hover:text-dark" />
  },
  {
    id:3,
    title:"Working Hours",
    subtitle:"Mon - Fri: 9:00 AM - 6:00 PM",
    icon: <Clock className="h-5 w-5 text-gray-500 hover:text-dark" />
  },
  {
    id:4,
    title:"Email Us",
    subtitle:"upcart@gmail.com",
    icon: <Mail className="h-5 w-5 text-gray-500 hover:text-dark" />
  },
  
]
const FooterTop = () => {
  return (
    
        <div className="grid grid-cols-1 border-y-2 border-gray-300 text-black md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
            {
                data.map((item)=>(
                    <div key={item?.id} className="flex items-center space-x-4 cursor-pointer  hover:bg-light  group hoverEffect p-2">
                        <div className="p-3 rounded-full hoverEffect">
                            {item?.icon}
                        </div>
                        <div className='k hoverEffect'>
                            <h4 className="font-bold text-sm text-gray-600 ">{item?.title}</h4>
                            <p className="text-gray-400 text-xs ">{item?.subtitle}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    
  )
}

export default FooterTop
