import React from "react";
import {NavLink} from "react-router-dom";
import {usersTypeRes, userType} from "../../redux/User-reducer";
import userPhoto from "../../assets/picture/icons8-user-100.png";
import styles from "./users.module.css";
import * as axios from 'axios';
import {render} from "react-dom";
import Axios, {AxiosResponse, AxiosError} from 'axios';

type propstype = {
    users: Array<usersTypeRes>
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: any) => void
    pageSize: number
    totalCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalCount: (count:number)=> void
    onPageChanged:(p:number)=>void
}


class UsersClass extends React.Component<propstype, any> {
 

    render() {

        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize)

        let pages = []
        for (let i = 0; i <= pageCount; i++) {
            pages.push(i)
        }
        return <div>

            <div>
                {pages.map(p => {
                    return (

                        <span onClick={(e) => {
                            this.props.onPageChanged(p)
                        }} className={this.props.currentPage === p ? styles.selected : ""}>{p}</span>
                    )
                })}


            </div>


            <button>getddd user</button>
            {this.props.users.map(u => <div key={u.id}>

                <NavLink to={'/profile/' + u.id}>
                    <div><img
                        src={u.photos.small||userPhoto}
                        className={styles.photo}
                    />

                    </div>
                </NavLink>
                <div>{u.followed
                    ? <button
                        onClick={() => {
                            this.props.unfollow(u.id)
                        }}

                    > Unfollow</button>
                    : <button
                        onClick={() => {
                            this.props.follow(u.id)
                        }}

                    > Follow</button>
                }</div>
                <div>name:{u.name}</div>
                <div>{u.followed}</div>
                <div>id:{u.id}</div>
                <div>{u.status}</div>
                <div>city</div>
            </div>)}


        </div>
    }


}

export default UsersClass