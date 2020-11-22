import React from "react";

import s from './ProfileInfo.module.css'

type ProfilePropsType={

}
export const ProfileInfo: React.FC<ProfilePropsType>=(props)=> {
return <div className={s.content}>
    <div><img src={"https://cdn.mos.cms.futurecdn.net/BVb3Wzn9orDR8mwVnhrSyd-320-80.jpg"}/></div>
    <div className={s.description}>ava + discrtptoi</div>

</div>

}