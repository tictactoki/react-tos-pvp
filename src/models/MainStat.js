/**
 * Created by stephane on 06/03/2017.
 */
import React from 'react';
import $ from 'jquery';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


export default class MainStat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstPlayer: {
                label: this.props.firstCircles[0].label,
                select: null,
                level: 1,
                mainStat: {
                    str: 0,
                    con: 0,
                    int: 0,
                    spr: 0,
                    dex: 0
                },
                stuffId: null
            },
            secondPlayer: {
                label: this.props.firstCircles[0].label,
                select: null,
                level: 1,
                mainStat: {
                    str: 0,
                    con: 0,
                    int: 0,
                    spr: 0,
                    dex: 0
                },
                stuffId: null
            }
        };
        this.computeStats = this.computeStats.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMainStat = this.handleMainStat.bind(this);
        this.handleFirstSelect = this.handleFirstSelect.bind(this);
        this.handleSecondSelect = this.handleSecondSelect.bind(this);
    }

    handleChange(player, field, event) {
        if (player == 1) {
            let fp = this.state.firstPlayer;
            console.log(fp)
            fp[field] = parseInt(event.target.value);
            this.setState({firstPlayer: fp});
        }
        else {
            let sp = this.state.secondPlayer;
            sp[field] = parseInt(event.target.value);
            this.setState({secondPlayer: sp});
        }
    }

    handleMainStat(player, field, event) {
        console.log(player,field);
        if (player == 1) {
            console.log("first");
            let fp = this.state.firstPlayer;
            let obj = fp.mainStat;
            obj[field] = parseInt(event.target.value);
            fp['mainStat'] = obj;
            console.log(fp);
            this.setState({firstPlayer: fp});
        }
        else {
            console.log("second");
            let sp = this.state.secondPlayer;
            let obj = sp.mainStat;
            obj[field] = parseInt(event.target.value);
            sp['mainStat'] = obj;
            console.log(sp);
            this.setState({secondPlayer: sp});
        }


    }

    computeStats(event) {
        event.preventDefault();
        var build = {
            circleName: this.state.label,
            level: this.state.level,
            mainStat: this.state.mainStat,
            stuffId: this.state.stuffId
        }
        this.props.computeCircle(build);
    }

    handleFirstSelect(select) {
        if (select != null) {
            console.log("in select");
            let fp = this.state.firstPlayer;
            fp['label'] = select.label;
            fp['mainStat']= select.value;
            fp['level'] = 1;
            console.log(fp);
            this.setState({firstPlayer: fp});
        }
    }

    handleSecondSelect(select) {
        if (select != null) {
            let sp = this.state.secondPlayer;
            sp['label'] = select.label;
            sp['mainStat']= select.value;
            sp['level'] = 1;
            this.setState({secondPlayer: sp});
        }
    }

    render() {
        console.log(this.state.firstPlayer);
        console.log(this.state.secondPlayer);
        return (
            <form onSubmit={this.computeStats}>
                <div>
                    <Select
                        name="form-field-name"
                        value={this.state.firstPlayer.label}
                        options={this.props.firstCircles}
                        onChange={this.handleFirstSelect}
                        className="select first-select"
                    />
                </div>
                <div>
                    <Select
                        name="form-field-name"
                        value={this.state.secondPlayer.label}
                        options={this.props.firstCircles}
                        onChange={this.handleSecondSelect}
                        className="select second-select"
                    />
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>First Player</th>
                    </tr>
                    </thead>
                    <tbody className="firstPlayer-mainStat">
                    <tr>
                        <td>
                            <label>level</label>
                            <input type="number" value={this.state.firstPlayer.level} onChange={this.handleChange.bind(this, 1,'level')}/>
                        </td>
                        <td>
                            <label>str</label>
                            <input type="number" value={this.state.firstPlayer.mainStat.str} onChange={this.handleMainStat.bind(this, 1, 'str')}/>
                        </td>
                        <td>
                            <label>con</label>
                            <input type="number" value={this.state.firstPlayer.mainStat.con} onChange={this.handleMainStat.bind(this, 1,'con')}/>
                        </td>
                        <td>
                            <label>int</label>
                            <input type="number" value={this.state.firstPlayer.mainStat.int}
                                   onChange={this.handleMainStat.bind(this, 1, 'int')}/>
                        </td>
                        <td>
                            <label>spr</label>
                            <input type="number" value={this.state.firstPlayer.mainStat.spr} onChange={this.handleMainStat.bind(this, 1, 'spr')}/>
                        </td>
                        <td>
                            <label>dex</label>
                            <input type="number" value={this.state.firstPlayer.mainStat.dex} onChange={this.handleMainStat.bind(this, 1,'dex')}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                    <tr>
                        <th>Second Player</th>
                    </tr>
                    </thead>
                    <tbody className="secondPlayer-mainStat">
                    <tr>
                        <td>
                            <label>level</label>
                            <input type="number" value={this.state.secondPlayer.level}
                                   onChange={this.handleChange.bind(this, 2,'level')}/>
                        </td>
                        <td>
                            <label>str</label>
                            <input type="number" value={this.state.secondPlayer.mainStat.str}
                                   onChange={this.handleMainStat.bind(this, 2, 'str')}/>
                        </td>
                        <td>
                            <label>con</label>
                            <input type="number" value={this.state.secondPlayer.mainStat.con}
                                   onChange={this.handleMainStat.bind(this, 2,'con')}/>
                        </td>
                        <td>
                            <label>int</label>
                            <input type="number" value={this.state.secondPlayer.mainStat.int}
                                   onChange={this.handleMainStat.bind(this, 2,'int')}/>
                        </td>
                        <td>
                            <label>spr</label>
                            <input type="number" value={this.state.secondPlayer.mainStat.spr}
                                   onChange={this.handleMainStat.bind(this, 2, 'spr')}/>
                        </td>
                        <td>
                            <label>dex</label>
                            <input type="number" value={this.state.secondPlayer.mainStat.dex}
                                   onChange={this.handleMainStat.bind(this, 2,'dex')}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        );
    }

}