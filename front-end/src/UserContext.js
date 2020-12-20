import React from 'react';

const UserContext = React.createContext(null);


class UserProvider extends React.Component {
    user = {
        username: '',
        islogout: true,
    }

    render() {
        return (
            <UserContext.Provider value={this.user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

const UserConsumer = UserContext.Consumer;
export {UserProvider, UserConsumer};
