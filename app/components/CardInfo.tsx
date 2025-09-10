import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
const CardInfo = ({
  desc,
  title,
  image,
  textBtn,
    btnClasses = "",
}: {
  desc: string;
  title: string;
  image: string;
    textBtn?: string;
    btnClasses?: string;

  
}) => {
  return (
    <div className='flex flex-col items-start absolute left-20 top-20 max-w-md'>
        <div className='w-96 h-40 relative '>
            <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <h1 className='text-white text-2xl font-semibold'>{title}</h1>
        <p className=' text-base text-muted-foreground mt-2'>{desc}</p>
        <Button className={`rounded-full ${btnClasses}`}>{textBtn || "Find out more !"}</Button>
    </div>
  )
}

export default CardInfo