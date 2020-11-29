import React from 'react';
import {MessageType} from "./state";

export type PostType = {
    id: number
    message: string
    likeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

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

export type AddPostActionType = {
    type: "ADDPOST"
}
export type UpdateTextPost = {
    type: "CHANGEPOSTTEXT"
    text: string
}
export type AddMessageActionType = {
    type: "ADDMESSAGE"
}
export type UpdateTextMessage = {
    type: "CHANGEMESSAGE"
    text: string
}

export type ActionsTypes = AddPostActionType | UpdateTextPost | AddMessageActionType | UpdateTextMessage


export const AddPostAC = () => ({type: "ADDPOST"} as const)
export const ChangePostTextAС = (text: string) => ({type: "CHANGEPOSTTEXT", text: text} as const)

export function profileReducer(state = initialState, action: ActionsTypes) {
    switch (action.type) {
        case "ADDPOST":
            const NewPost: PostType = {
                id: 3,
                message: state.newPostText,
                likeCounts: 20
            }
            state.posts.push(NewPost)
            state.newPostText = ""
            return state
        case "CHANGEPOSTTEXT":
            state.newPostText = action.text
            return state
        default:
            return state
    }

}




