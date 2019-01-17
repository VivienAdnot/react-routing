import React, { Component } from 'react';

export const AppContext = React.createContext();

export class AppProvider extends Component {

    state = {
        number: 10,
        incrementNumber: () => {
            this.setState({number: this.state.number + 1})
        }
    }

    render() {

        return <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>

    }

}