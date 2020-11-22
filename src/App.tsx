import React from 'react';
import './App.css';

import { DialogType, MessageType, PostType,  StoreType, store} from "./redux/state";
import Header from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';

type AppPropsType={
    posts: Array<PostType>
    dialogs : Array<DialogType>
    messages: Array<MessageType>
    addPost:()=>void
    newPostText:string
    NewPostTextChanger:(post:string)=>void
    NewDialogMessage:string
    addMessage: ()=>void
    store: StoreType
    NewMesageChanger:(post:string)=>void

}
function App(props:AppPropsType) {




    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            ghng
            <div className='app-wrapper-content'>
                <Route path='/profile' render={()=><Profile NewPostTextChanger={props.NewPostTextChanger}
                                                            newPostText={props.newPostText}
                                                            addPost={props.addPost}
                                                            posts={props.posts}/>} />
                <Route path='/dialogs' render={()=> <Dialogs addMessage={props.addMessage}
                                                             NewDialogMessage={props.NewDialogMessage}
                                                             NewMesageChanger={props.NewMesageChanger}
                                                             dialogs={props.dialogs}
                                                             messages={props.messages}/>} />
            </div>
        </div>
            </BrowserRouter>
            )
}

export default App;
