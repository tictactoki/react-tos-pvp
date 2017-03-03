/**
 * Created by wong on 03/03/17.
 */
import React from 'react';

class Build extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }




    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }

}

export default Build;