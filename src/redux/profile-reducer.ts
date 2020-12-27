import React, {ReactType} from 'react';
import {MessageType} from "./store";

export type PostType = {
    id: number
    message: string
    likeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
const ADDPOST = "ADDPOST"
const CHANGEPOSTTEXT = "CHANGEPOSTTEXT"
const ADDMESSAGE = "ADDMESSAGE"
const CHANGEMESSAGE = "CHANGEMESSAGE"

let initialState: ProfilePageType = {


    posts: [
        {id: 1, message: "its my first yeSS post", likeCounts: 10},
        {id: 2, message: "hi howe are you", likeCounts: 15},
        {id: 3, message: "itkamasytra", likeCounts: 15},
        {id: 4, message: "yo", likeCounts: 15},
        {id: 5, message: "youuu", likeCounts: 15},
        {id: 6, message: "meas6", likeCounts: 15},
    ],
    newPostText: "it kamasyrtaaa"

}
export type returnStateProfilereducerType = typeof initialState

export type AddPostActionType = {
    type: typeof ADDPOST
}
export type UpdateTextPost = {
    type: typeof CHANGEPOSTTEXT
    text: string
}


export type AddMessageActionType = {
    type: typeof ADDMESSAGE
}
export type UpdateTextMessage = {
    type: typeof CHANGEMESSAGE
    text: string
}
export type ActionsTypes = AddPostActionType | UpdateTextPost | AddMessageActionType | UpdateTextMessage

// export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof ChangePostTextAС>


export const AddPostAC = () => ({type: "ADDPOST"} as const)
export const ChangePostTextAC = (text: string) => ({type: "CHANGEPOSTTEXT", text: text} as const)

export function profileReducer(state = initialState, action: ActionsTypes): returnStateProfilereducerType {
    switch (action.type) {
        case "ADDPOST":
            const NewPost: PostType = {
                id: 3,
                message: state.newPostText,
                likeCounts: 20
            }
            return {
                ...state, posts: [...state.posts, NewPost],
                newPostText:""
            }
        case "CHANGEPOSTTEXT":
            return {
                ...state,newPostText:action.text}
        default:
            return state
    }

}


//
// export const addPost=()=>{
//     return async (dispatch:any)=>dispatch(AddPostAC())
// }
// export const newposttextHandler=(text: string) => {
//     return async (dispatch:any)=>{
//     dispatch(ChangePostTextAС(text))}
// }
//
