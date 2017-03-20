/**
 * Created by stephane on 03/03/2017.
 */
import React, {Component} from 'react';
import $ from 'jquery';
import MainStat from './models/MainStat';
import {OffensiveStat, DefensiveStat, BasicStat, Damage} from './models/Stat';


export default class Build extends Component {

    constructor(props) {
        super(props);
        this.state = {
            circles: null,
            c1: null,
            e1: null,
            d1: null,
            c2: null,
            e2: null,
            d2: null
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

    computeCircle(b1, b2, event) {
        let pvp = {
            p1: b1,
            p2: b2
        };
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:8090/pvp",
            data: JSON.stringify(pvp),
            success: function (data, status, xhr) {
                if (xhr.status == 200) {
                    console.log(data);
                    this.setState({c1: data.c1, e1: data.e1, d1: data.d1, c2: data.c2, e2: data.e2, d2: data.d2});
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
        if (this.state.c1 != null && this.state.c2 != null) {
            return (
                <div>
                    <table className="first-circle tb-data">
                        <BasicStat basicStat={this.state.c1.basicStat}/>
                        <OffensiveStat offensiveStat={this.state.c1.offensiveStat}/>
                        <DefensiveStat defensiveStat={this.state.c1.defensiveStat}/>
                    </table>
                    <Damage className="first-damage" damage={this.state.d1} dodge={this.state.e1} />
                    <table className="second-circle tb-data">
                        <BasicStat basicStat={this.state.c2.basicStat}/>
                        <OffensiveStat offensiveStat={this.state.c2.offensiveStat}/>
                        <DefensiveStat defensiveStat={this.state.c2.defensiveStat}/>
                    </table>
                    <Damage className="second-damage" damage={this.state.d2} dodge={this.state.e2} />
                </div>
            );
        }
        else if (this.state.circles != null) {
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
