import React from 'react';
import UserList from '../config/userList';

const UserPage = (props) => {
    return <div className="user-page">
        <div>
            <h1>მომხმარებლის გვერდი</h1>
        </div>
        <div className="users-info">
            <div className="user-info">
                <div className="user-info-divider"><p>სახელი</p></div>
                <div className="user-info-divider"><p>{UserList[`${props.userName}`].firstName}</p></div>
            </div>
            <div className="user-info">
                <div className="user-info-divider"><p>გვარი</p></div>
                <div className="user-info-divider"><p>{UserList[`${props.userName}`].lastName}</p></div>
            </div>
            <div className="user-info">
                <div className="user-info-divider"><p>ასაკი</p></div>
                <div className="user-info-divider"><p>{UserList[`${props.userName}`].age}</p></div>
            </div>
            <div className="user-info">
                <div className="user-info-divider"><p>უნივერსიტეტი</p></div>
                <div className="user-info-divider"><p>{UserList[`${props.userName}`].university}</p></div>
            </div>
        </div>
    </div>
}

export default UserPage;