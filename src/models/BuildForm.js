/**
 * Created by wong on 03/03/17.
 */
import React from 'react';
import $ from 'jquery';
import {Build, MainStat, Weapon, Armor, Stuff, test} from './Build';


class BuildForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            build: null
        }
        this.handle = this.handle.bind(this);
    }

    handle(event){
        event.preventDefault();
        $.get("http://localhost:8090/builds?_id=58b6d07167000067009f6ab4", function(data,status) {
           //console.log(data);
            console.log(data);
            console.log(this.state.build);
            //this.setState({build: new Build(data)});
           console.log(this.state.build);
        }.bind(this));
    }


    render() {
        return (
            <button onClick={this.handle}>CLICK HERE</button>
        );
    }
}

export default BuildForm;