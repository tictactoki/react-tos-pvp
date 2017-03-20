/**
 * Created by stephane on 03/03/2017.
 */
import React, {Component} from 'react';
import $ from 'jquery';
import {MainStat, MStat} from './models/MainStat';
import {OffensiveStat, DefensiveStat, BasicStat, Damage} from './models/Stat';


export default class Build extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstPlayer: null,
            secondPlayer: null,
            circles: null,
            c1: null,
            e1: null,
            d1: null,
            c2: null,
            e2: null,
            d2: null
        };
        this.getFirstCircles = this.getFirstCircles.bind(this);
        this.computeCircle = this.computeCircle.bind(this);
        this.updatePlayer = this.updatePlayer.bind(this);
        this.computeStats = this.computeStats.bind(this);
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

    computeStats(event) {
        event.preventDefault();
        if (this.state.firstPlayer != null && this.state.secondPlayer != null) {
            let b1 = {
                circleName: this.state.firstPlayer.label,
                level: this.state.firstPlayer.level,
                mainStat: this.state.firstPlayer.mainStat,
                stuffId: this.state.firstPlayer.stuffId
            };
            let b2 = {
                circleName: this.state.secondPlayer.label,
                level: this.state.secondPlayer.level,
                mainStat: this.state.secondPlayer.mainStat,
                stuffId: this.state.secondPlayer.stuffId
            };
            this.computeCircle(b1, b2);
        }
    }

    updatePlayer(number, player) {
        if (number == 1) {
            this.setState({firstPlayer: player});
        }
        else {
            this.setState({secondPlayer: player});
        }
    }

    componentDidMount() {
        this.getFirstCircles();
    }

    render() {
        if (this.state.c1 != null && this.state.c2 != null && this.state.circles != null) {
            return (
                <form onSubmit={this.computeStats}>
                    <div>
                        <MStat updatePlayer={this.updatePlayer} computeCircle={this.computeCircle}
                               firstCircles={this.state.circles} classSelect="first" number={1}/>
                        <table className="first-circle tb-data">
                            <BasicStat basicStat={this.state.c1.basicStat}/>
                            <OffensiveStat offensiveStat={this.state.c1.offensiveStat}/>
                            <DefensiveStat defensiveStat={this.state.c1.defensiveStat}/>
                        </table>
                        <Damage className="first-damage" damage={this.state.d1} dodge={this.state.e1}/>
                        <MStat updatePlayer={this.updatePlayer} computeCircle={this.computeCircle}
                               firstCircles={this.state.circles} classSelect="second" number={2}/>
                        <table className="second-circle tb-data">
                            <BasicStat basicStat={this.state.c2.basicStat}/>
                            <OffensiveStat offensiveStat={this.state.c2.offensiveStat}/>
                            <DefensiveStat defensiveStat={this.state.c2.defensiveStat}/>
                        </table>
                        <Damage className="second-damage" damage={this.state.d2} dodge={this.state.e2}/>
                    </div>
                    <input type="submit" value="compute"/>
                </form>
            );
        }
        else if (this.state.circles != null) {
            return (
                <form onSubmit={this.computeStats}>
                    <div>
                        <MStat updatePlayer={this.updatePlayer} computeCircle={this.computeCircle}
                               firstCircles={this.state.circles} classSelect="second" number={1}/>
                        <MStat updatePlayer={this.updatePlayer} computeCircle={this.computeCircle}
                               firstCircles={this.state.circles} classSelect="second" number={2}/>
                    </div>
                    <input type="submit" value="compute"/>
                </form>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }


}
