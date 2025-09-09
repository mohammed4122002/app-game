import React, { ReactElement } from 'react'
import ButtonSvg from '../components/nav/ButtonSvg';

const ButtonGame = ({className , inClick , link , text , icon}:{className?:string ; inClick?:()=>void ; link?:string ; text:string ; icon? : ReactElement}) => {
  return (
   <button className={`${className || ""} relative | flex-initial gap-2 py-2`}>
    {ButtonSvg(false)}
    {text}
    {icon}
   </button>
  )
}

export default ButtonGame