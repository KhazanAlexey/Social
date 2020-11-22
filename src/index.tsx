import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    DialogType,
    MessageType,
    PostType,
    RootStateType,
    subscribe
} from "./redux/state";
import {store} from "./redux/state";


const state=store.getState()
let posts: Array<PostType> = state.profilePage.posts
let dialogs: Array<DialogType> = state.dialogsPage.dialogs
let messages: Array<MessageType> = state.dialogsPage.messages

export const RerenderEntireTree =()=> {
    ReactDOM.render(
        <App messages={state.dialogsPage.messages}  store={store} addPost={store.addPost.bind(store)}  addMessage={store.addMessage.bind(store)}
             NewDialogMessage={state.dialogsPage.NewDialogMessage}
             NewPostTextChanger={store.NewPostTextChanger.bind(store)}
             newPostText={state.profilePage.newPostText}
             dialogs={state.dialogsPage.dialogs}
             posts={state.profilePage.posts}
             NewMesageChanger={store.NewMesageChanger.bind(store)}/>
        ,
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
}
RerenderEntireTree()
store.subscribe(RerenderEntireTree)