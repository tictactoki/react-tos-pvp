/**
 * Created by stephane on 03/03/2017.
 */
import React, {Component} from 'react';
import $ from 'jquery';
import MainStat from './models/MainStat';
import {OffensiveStat, DefensiveStat, BasicStat} from './models/Stat';


export default class Build extends Component {

    constructor(props) {
        super(props);
        this.state = {
            circles: null,
            stat: null
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
                if(xhr.status == 200) {
                    this.setState({stat: data});
                }
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
        if (this.state.circles != null && this.state.stat == null) {
            return (
                <div>
                    <MainStat computeCircle={this.computeCircle} firstCircles={this.state.circles}/>
                </div>
            );
        }
        else if (this.state.circles != null && this.state.stat != null) {
            return(
                <table>
                    <BasicStat basicStat={this.state.stat.basicStat} />
                    <OffensiveStat offensiveStat={this.state.stat.offensiveStat} />
                    <DefensiveStat defensiveStat={this.state.stat.defensiveStat} />
                </table>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }


}
