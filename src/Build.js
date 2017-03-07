/**
 * Created by stephane on 03/03/2017.
 */
import React, { Component } from 'react';
import $ from 'jquery';
import MainStat from './models/MainStat';


export default class Build extends Component {

    constructor(props) {
        super(props);
        this.state = {
            circles: null
        }
        this.getFirstCircles = this.getFirstCircles.bind(this);
        this.computeCircle = this.computeCircle.bind(this);
    }

    getFirstCircles() {
        $.get(this.props.circles, function(data,status,xhr) {
            if(xhr.status == 200 && data != null) {
                this.setState({circles:data});
            }
        }.bind(this));
        console.log(this.state);
    }

    computeCircle(build, event) {
        //event.preventDefault();
        console.log(build);
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:8090/circles",
            data: JSON.stringify(build),
            success: function (data, status, xhr) {
                console.log("success");
                console.log(data);
            },
            error: function (xhr, status, error) {
                console.log("error");
                console.log(error);
                console.log(status);
                console.log(xhr);
            }
        });

    }

    componentDidMount() {
        this.getFirstCircles();
    }

    render() {
        if(this.state.circles != null) {
            return (
                <div>
                    <MainStat computeCircle={this.computeCircle} firstCircles={this.state.circles}/>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }


}
