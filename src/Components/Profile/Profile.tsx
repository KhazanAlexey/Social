import React from "react";

import s from './Profile.module.css'
import {Myposts} from "./MyPosts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";
type ProfilePropsType={
    posts:Array<PostType>
    addPost: ()=>void
    newPostText:string
    NewPostTextChanger:(text:string)=>void
}
export const Profile: React.FC<ProfilePropsType>=(props)=> {


return <div className={s.content}>
    <ProfileInfo/>
    <Myposts posts={props.posts} newPostText={props.newPostText} NewPostTextChanger={props.NewPostTextChanger} addPost={props.addPost}/>
</div>

}