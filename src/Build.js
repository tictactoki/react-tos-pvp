/**
 * Created by stephane on 03/03/2017.
 */
import React, { Component } from 'react';
import $ from 'jquery';


export default class Build extends Component {

    constructor(props) {
        super(props);
        this.state = {
            circles: null
        }
        this.getCircles = this.getCircles.bind(this);
    }

    getCircles() {
        $.get(this.props.circles, function(data,status,xhr) {
            if(xhr.status == 200 && data != null) {
                this.state.circles = data;
            }
        }.bind(this))
    }


    componentDidMount() {
        this.getCircles();
    }

    render() {
        return(
            <div></div>
        );
    }


}
