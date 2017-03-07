/**
 * Created by stephane on 03/03/2017.
 */
import React, {Component} from 'react';
import $ from 'jquery';
import MainStat from './models/MainStat';
import OffensiveStat from './models/Stat';


export default class Build extends Component {

    constructor(props) {
        super(props);
        this.state = {
            circles: null,
            offStat: null
        }
        this.getFirstCircles = this.getFirstCircles.bind(this);
        this.computeCircle = this.computeCircle.bind(this);
    }

    getFirstCircles() {
        $.get(this.props.circles, function (data, status, xhr) {
            if (xhr.status == 200 && data != null) {
                this.setState({circles: data});
            }
        }.bind(this));
    }

    computeCircle(build, event) {
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:8090/circles",
            data: JSON.stringify(build),
            success: function (data, status, xhr) {
                console.log("success");
                console.log(data);
                this.setState({offStat: data.offensiveStat});
            }.bind(this),
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
        if (this.state.circles != null && this.state.offStat == null) {
            return (
                <div>
                    <MainStat computeCircle={this.computeCircle} firstCircles={this.state.circles}/>
                </div>
            );
        }
        else if (this.state.circles != null && this.state.offStat != null) {
            return(
                <div>
                    <OffensiveStat offensiveStat={this.state.offStat} />
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
