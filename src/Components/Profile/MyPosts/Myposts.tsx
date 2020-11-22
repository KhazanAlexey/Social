import React, {ChangeEvent, RefObject} from "react";
import s from './MyPosts.module.css';
import {Post} from "../../Posts/Post/Post";
import {PostType} from "../../../redux/state";
import {RerenderEntireTree} from "../../../index";

type PostsType = {
    addPost:()=>void
    newPostText:string
    NewPostTextChanger:(text:string)=>void

posts: Array<PostType>}
export const Myposts: React.FC<PostsType> = (props) => {

    let postMessage=React.createRef<HTMLTextAreaElement>()
function addPost() {


    props.addPost()

}
 const newposttextHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    if( e.currentTarget)
     {

         console.log(e.currentTarget.value)
         props.NewPostTextChanger(e.currentTarget.value)
     }
}


    return <div className={s.postsBlock}>
        my posts
        <div>
            <div><textarea value={props.newPostText} onChange={newposttextHandler}/></div>

            <div>
                <button onClick={addPost}>Addpost</button>
            </div>
            </div>
        <div className={s.posts}>
            {props.posts.map(p=><Post key={p.id} message={p.message} likeCounts={p.likeCounts} id={p.id} />)}


        </div>
    </div>
}