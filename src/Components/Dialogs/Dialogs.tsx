import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogType, MessageType} from "../../redux/state";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Messages/Messages";
import {Simulate} from "react-dom/test-utils";
import {RerenderEntireTree} from "../../index";

type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    NewMesageChanger:(post:string)=>void
    NewDialogMessage:string
    addMessage: ()=> void
}


export const Dialogs: React.FC<DialogsPageType> = (props) => {




    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <Message id={m.id}  message={m.message}/>)
const onclickHandler=()=>{
       props.addMessage()
}
  const changeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        if( e.currentTarget)
        {
            props.NewMesageChanger(e.currentTarget.value)
        }
    }


    return <div className={s.dialogs}>

        <div className={s.dialogsitem}>

            {dialogsElements}

        </div>
        <div className={s.messages}>

            {messagesElement}
            <div>
                <textarea onChange={changeHandler} value={props.NewDialogMessage} />
            </div>
            <button onClick={onclickHandler}>Send</button>
        </div>

    </div>
}