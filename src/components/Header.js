import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export const Header = (props) => {
    const logOut = () => {
        props.cb(false);
    }

    return(
        <div className="header">
            <ul className="header-ul">
                <li className="header-li">
                    <b className="header-b">
                        {
                            props.isRegistered
                            ?
                            <div className="header-account">
                                <Link className="header-link" to="/userPage">მომხმარებლის ანგარიში</Link>
                                <Link className="header-link header-out" to="/login" onClick={() => logOut()}>გასვლა</Link>
                            </div>
                            :
                            <Link className="header-link" to="/login">შესვლა</Link>
                        }

                    </b>
                </li>
                <li className="header-li">
                    <b className="header-b">
                        <Link className="header-link" to="/students">სტუდენტები</Link>
                    </b>
                </li>
                <li className="header-li">
                    <b className="header-b">
                        <Link className="header-link" to="/">საიხლეები</Link>
                    </b>
                </li>
            </ul>
        </div>
    )

}