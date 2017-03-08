/**
 * Created by stephane on 06/03/2017.
 */
import React from 'react';
import $ from 'jquery';
import Select from 'react-select';

export default class MainStat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstCircles: this.props.firstCircles,
            level: 1,
            mainStat: {
                str: 0,
                con: 0,
                int: 0,
                spr: 0,
                dex: 0
            },
            circleName: "Cleric",
            stuffId: null
        };
        this.computeStats = this.computeStats.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMainStat = this.handleMainStat.bind(this);
    }

    handleChange(field, event) {
        let obj = {};
        obj[field] = parseInt(event.target.value);
        this.setState(obj);
    }

    handleMainStat(field, event) {
        let obj = this.state.mainStat;
        obj[field] = parseInt(event.target.value);
        this.setState({ mainStat: obj });
    }

    computeStats(event) {
        event.preventDefault();
        var build = {
            circleName: this.state.circleName,
            level: this.state.level,
            mainStat: this.state.mainStat,
            stuffId: this.state.stuffId
        }
        this.props.computeCircle(build);
    }

    render() {
        return (
            <form onSubmit={this.computeStats}>
                <div>
                    <div>
                        <label>level</label>
                        <input type="number" value={this.state.level} onChange={this.handleChange.bind(this, 'level')}/>
                    </div>
                    <div>
                        <label>str</label>
                        <input type="number" value={this.state.mainStat.str} onChange={this.handleMainStat.bind(this, 'str')}/>
                    </div>
                    <div>
                        <label>con</label>
                        <input type="text" value={this.state.mainStat.con} onChange={this.handleMainStat.bind(this, 'con')}/>
                    </div>
                    <div>
                        <label>int</label>
                        <input type="text" value={this.state.mainStat.int} onChange={this.handleMainStat.bind(this, 'int')}/>
                    </div>
                    <div>
                        <label>spr</label>
                        <input type="text" value={this.state.mainStat.spr} onChange={this.handleMainStat.bind(this, 'spr')}/>
                    </div>
                    <div>
                        <label>dex</label>
                        <input type="text" value={this.state.mainStat.dex} onChange={this.handleMainStat.bind(this, 'dex')}/>
                    </div>
                    <input type="submit" value="compute"/>
                </div>
            </form>
        );
    }

}