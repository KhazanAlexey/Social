import React from 'react';
import './App.css';

import {DialogType, MessageType, PostType, StoreType, store, ActionsTypes} from "./redux/store";
import Header from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from './Components/Users/Users-container';
import {DialogsHook} from "./Components/Dialogs/DialogsHook";

type AppPropsType = {
    // posts: Array<PostType>
    // dialogs: Array<DialogType>
    // messages: Array<MessageType>
    // newPostText: string
    // NewDialogMessage: string
    // dispatch: (action: ActionsTypes) => void

}

function App(props: AppPropsType) {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile
                       />}/>
                       <Route path='/dialogsHook' render={() => <DialogsHook
                       />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer
                    />}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
