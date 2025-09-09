import React, { ReactElement } from 'react'
import ButtonSvg from '../components/nav/ButtonSvg';
import Link from 'next/link';
import Spinner from './Spinner';

const ButtonGame = ({className , onClick , link , text , icon , disabled=false}:{disabled?:boolean ; className?:string ; onClick?:()=>void ; link?:string ; text:string ; icon? : ReactElement}) => {
  return (
   <button
   disabled={disabled}
    className={`${className || ""} relative px-6 m-auto flex-initial gap-2 py-2 text-white`}
    onClick={onClick }
   >
    {ButtonSvg(false)}
    <span>{disabled ? <Spinner/>:link ? <Link href={link}>{text}</Link> : text}</span>
    {icon}
   </button>
  )
}

export default ButtonGame