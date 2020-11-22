import React from "react";
import s from './Header.module.css';

type HeaderPropsType={

}
const Header: React.FC<HeaderPropsType> =(props)=>{
   return(
       <header className={s.header}>
           <img src={"https://cdn.mos.cms.futurecdn.net/BVb3Wzn9orDR8mwVnhrSyd-320-80.jpg"}/>

       </header>
   )

}
export default Header

