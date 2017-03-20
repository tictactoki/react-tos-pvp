/**
 * Created by stephane on 06/03/2017.
 */
import React from 'react';
import $ from 'jquery';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export class MStat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player: {
                label: this.props.firstCircles[0].label,
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
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleMainStat = this.handleMainStat.bind(this);
    }

    handleChange(field, event) {
        let obj = this.state.player;
        obj[field] = event.target.value;
        this.setState({player: obj});
    }

    handleMainStat(field, event) {
        let obj = this.state.player;
        let mainStat = obj.mainStat;
        mainStat[field] = parseInt(event.target.value);
        obj['mainStat'] = mainStat;
        this.setState({player: obj});
    }

    handleSelect(select) {
        if (select != null) {
            let player = this.state.player;
            player['label'] = select.label;
            player['mainStat'] = select.value;
            player['level'] = 1;
            this.setState({player: player});
            this.props.updatePlayer(this.props.number,player);
        }
    }

    render() {
        return (
            <div>
                <Select
                    name="form-field-name"
                    value={this.state.player.label}
                    options={this.props.firstCircles}
                    onChange={this.handleSelect}
                    className={this.props.classSelect}
                />
                <ul>
                    <li>
                        <label>level</label>
                        <input type="number" value={this.state.player.level}
                               onChange={this.handleChange.bind(this, 'level')}/>
                    </li>
                    <li>
                        <label>str</label>
                        <input type="number" value={this.state.player.mainStat.str}
                               onChange={this.handleMainStat.bind(this, 'str')}/>
                    </li>
                    <li>
                        <label>con</label>
                        <input type="number" value={this.state.player.mainStat.con}
                               onChange={this.handleMainStat.bind(this, 'con')}/>
                    </li>
                    <li>
                        <label>int</label>
                        <input type="number" value={this.state.player.mainStat.int}
                               onChange={this.handleMainStat.bind(this, 'int')}/>
                    </li>
                    <li>
                        <label>spr</label>
                        <input type="number" value={this.state.player.mainStat.spr}
                               onChange={this.handleMainStat.bind(this, 'spr')}/>
                    </li>
                    <li>
                        <label>dex</label>
                        <input type="number" value={this.state.player.mainStat.dex}
                               onChange={this.handleMainStat.bind(this, 'dex')}/>
                    </li>
                </ul>
            </div>
        );
    }


}

export class MainStat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player: {
                label: this.props.firstCircles[0].label,
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
            firstPlayer: {
                label: this.props.firstCircles[0].label,
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
        if (player == 1) {
            let fp = this.state.firstPlayer;
            let obj = fp.mainStat;
            obj[field] = parseInt(event.target.value);
            fp['mainStat'] = obj;
            this.setState({firstPlayer: fp});
        }
        else {
            let sp = this.state.secondPlayer;
            let obj = sp.mainStat;
            obj[field] = parseInt(event.target.value);
            sp['mainStat'] = obj;
            this.setState({secondPlayer: sp});
        }


    }

    /*computeStats(event) {
        event.preventDefault();
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
        this.props.computeCircle(b1, b2);
    }*/

    handleFirstSelect(select) {
        if (select != null) {
            let fp = this.state.firstPlayer;
            fp['label'] = select.label;
            fp['mainStat'] = select.value;
            fp['level'] = 1;
            this.setState({firstPlayer: fp});
        }
    }

    handleSecondSelect(select) {
        if (select != null) {
            let sp = this.state.secondPlayer;
            sp['label'] = select.label;
            sp['mainStat'] = select.value;
            sp['level'] = 1;
            this.setState({secondPlayer: sp});
        }
    }

    render() {
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
                    <tbody className="first-mainStat">
                    <tr>
                        <td>
                            <label>level</label>
                            <input type="number" value={this.state.firstPlayer.level}
                                   onChange={this.handleChange.bind(this, 1,'level')}/>
                        </td>
                        <td>
                            <label>str</label>
                            <input type="number" value={this.state.firstPlayer.mainStat.str}
                                   onChange={this.handleMainStat.bind(this, 1, 'str')}/>
                        </td>
                        <td>
                            <label>con</label>
                            <input type="number" value={this.state.firstPlayer.mainStat.con}
                                   onChange={this.handleMainStat.bind(this, 1,'con')}/>
                        </td>
                        <td>
                            <label>int</label>
                            <input type="number" value={this.state.firstPlayer.mainStat.int}
                                   onChange={this.handleMainStat.bind(this, 1, 'int')}/>
                        </td>
                        <td>
                            <label>spr</label>
                            <input type="number" value={this.state.firstPlayer.mainStat.spr}
                                   onChange={this.handleMainStat.bind(this, 1, 'spr')}/>
                        </td>
                        <td>
                            <label>dex</label>
                            <input type="number" value={this.state.firstPlayer.mainStat.dex}
                                   onChange={this.handleMainStat.bind(this, 1,'dex')}/>
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
                    <tbody className="second-mainStat">
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
                <input type="submit" value="compute"/>
            </form>
        );
    }

}