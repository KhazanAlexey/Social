import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {UserReducer} from "./User-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: UserReducer
})
export let store: StoreType = createStore(reducers)


export type RootState = ReturnType<typeof reducers>


export type StoreType = Store<RootState>


