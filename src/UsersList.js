import React from 'react';
import './UsersList.scss';
class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.users = []
    }

    addUser = (user) => {
        this.users.push(user)
    }
    
    isUserExist = (user) => {
        return this.users.includes(user)
    }

}

export { UsersList }