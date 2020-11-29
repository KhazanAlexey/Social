import React from 'react';

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsPageType = {
    messages: Array<MessageType>
    NewDialogMessage: string
    dialogs: Array<DialogType>
}


let initialState: DialogsPageType = {
    NewDialogMessage: "yu",
    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "hi howe are you"},
        {id: 3, message: "itkamasytra"},
        {id: 4, message: "yo"},
        {id: 5, message: "youuu"},
        {id: 6, message: "meas6"},
    ],
    dialogs: [
        {id: 1, name: "Dmitych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"},
    ]

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

export const AddMessageTypeAC = () => ({type: "ADDMESSAGE"} as const)
export const ChangeMessageAc = (text: string) => ({type: "CHANGEMESSAGE", text: text} as const)


export function dialogReducer(state = initialState, action: ActionsTypes) {
    switch (action.type) {
        case "ADDMESSAGE":
            const NewMessage: MessageType = {id: 10, message: state.NewDialogMessage}
            state.messages.push(NewMessage)
            return state
        case "CHANGEMESSAGE":
            state.NewDialogMessage = action.text
            return state
        default:
            return state
    }
}