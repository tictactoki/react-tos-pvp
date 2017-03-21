/**
 * Created by stephane on 06/03/2017.
 */
import React from 'react';
import $ from 'jquery';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

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
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleMainStat = this.handleMainStat.bind(this);
    }

    handleChange(field, event) {
        let obj = this.state.player;
        obj[field] = parseInt(event.target.value);
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
            this.props.updatePlayer(this.props.number, player);
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                <Select
                    name="form-field-name"
                    value={this.state.player.label}
                    options={this.props.firstCircles}
                    onChange={this.handleSelect}
                    className={this.props.classSelect}
                />
                <table>
                    <tbody>
                    <tr>
                        <th>level</th>
                        <th>str</th>
                        <th>con</th>
                        <th>int</th>
                        <th>spr</th>
                        <th>dex</th>
                    </tr>
                    <tr>
                        <td><input type="number" value={this.state.player.level}
                                   onChange={this.handleChange.bind(this, 'level')}/>
                        </td>
                        <td>
                            <input type="number" value={this.state.player.mainStat.str}
                                   onChange={this.handleMainStat.bind(this, 'str')}/>
                        </td>
                        <td>
                            <input type="number" value={this.state.player.mainStat.con}
                                   onChange={this.handleMainStat.bind(this, 'con')}/>
                        </td>
                        <td>
                            <input type="number" value={this.state.player.mainStat.int}
                                   onChange={this.handleMainStat.bind(this, 'int')}/>
                        </td>
                        <td>
                            <input type="number" value={this.state.player.mainStat.spr}
                                   onChange={this.handleMainStat.bind(this, 'spr')}/>
                        </td>
                        <td>
                            <input type="number" value={this.state.player.mainStat.dex}
                                   onChange={this.handleMainStat.bind(this, 'dex')}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}