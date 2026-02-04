import { Facebook, Github, Instagram, Link, Linkedin, Slack, Twitter, Youtube } from 'lucide-react';
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import { Item } from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils';
interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const SocialLinks = ({className,iconClassName,tooltipClassName}:Props) => {
    const socialLinks = [
    {       id:1, 
            title: "Facebook",
            href: "https://www.facebook.com/",
            icon: <Facebook className='w-5 h-5'/>,
    },
    {
        id:2,
        title: "YouTube",
        href: "https://www.youtube.com/",
        icon: <Youtube className='w-5 h-5'/>,
    },
    {       id:3, 
            title: "Twitter",
            href: "https://www.twitter.com/",
            
            icon: <Twitter className='w-5 h-5'/>,
    },
    {       id:4, 
            title: "Slack",     
            href: "https://www.slack.com/",
            icon: <Slack className='w-5 h-5'/>,
    },
    {       id:5, 
            title: "LinkedIn",     
            href: "https://www.linkedin.com/",
            icon: <Linkedin className='w-5 h-5'/>,
    },
    {       id:6, 
            title: "GitHub",     
            href: "https://www.github.com/",
            icon: <Github className='w-5 h-5'/>,
    },
    
    
];

  return (
    <TooltipProvider>
        <div className={cn("flex items-center justify-start space-x-4 p-4",className)}>
      {
        socialLinks.map((item) => (
          <Tooltip key={item?.id}>
            <TooltipTrigger className={cn("hover:scale-110 transition-transform duration-200 p-2 border-2  rounded-full text-gray-400 hover:text-warning",tooltipClassName)}>
            <a key={item?.id} href={item?.href} target="_blank" rel="noopener noreferrer" className={cn("text-white  hover:text-warning hoverEffect",iconClassName)}>
            {item?.icon}
          </a>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-gray-700 text-sm rounded-md ml-2 p-2">
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))
      }
    </div>

    </TooltipProvider>
  )
}

export default SocialLinks
