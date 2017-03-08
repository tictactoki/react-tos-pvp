/**
 * Created by wong on 07/03/17.
 */
import React from 'react';


export class OffensiveStat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offStat: null
        };
    }

    componentWillMount() {
        this.setState({offStat: this.props.offensiveStat});
    }

    render() {
        if (this.state.offStat == null) {
            return (
                <div></div>
            );
        }
        else {
            return (
                <tbody className="offensive-stat">
                <tr>
                    <td>Physical Attack</td>
                    <td>{this.state.offStat.physicalAttack}</td>
                </tr>
                <tr>
                    <td>Secondary Physical Attack</td>
                    <td>{this.state.offStat.secondaryPhysicalAttack}</td>
                </tr>
                <tr>
                    <td>Magic Attack</td>
                    <td>{this.state.offStat.magicAttack}</td>
                </tr>
                <tr>
                    <td>Aoe Attack Ratio</td>
                    <td>{this.state.offStat.aoeAttackRatio}</td>
                </tr>
                <tr>
                    <td>Block Penetration</td>
                    <td>{this.state.offStat.blockPenetration}</td>
                </tr>
                <tr>
                    <td>Critical Attack</td>
                    <td>{this.state.offStat.criticalAttack}</td>
                </tr>
                <tr>
                    <td>Critical Rate</td>
                    <td>{this.state.offStat.criticalRate}</td>
                </tr>
                <tr>
                    <td>Magic Amplification</td>
                    <td>{this.state.offStat.magicAmplification}</td>
                </tr>
                <tr>
                    <td>Accuracy</td>
                    <td>{this.state.offStat.accuracy}</td>
                </tr>
                </tbody>
            );
        }
    }

}

export class BasicStat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            basicStat: null
        };
    }

    componentWillMount() {
        this.setState({basicStat: this.props.basicStat});
    }


    render() {
        if (this.state.basicStat == null) {
            return (<div></div>);
        }
        else {
            return (
                <tbody className="basic-stat">
                <tr>
                    <td>HP</td>
                    <td>{this.state.basicStat.hp}</td>
                </tr>
                <tr>
                    <td>SP</td>
                    <td>{this.state.basicStat.sp}</td>
                </tr>
                <tr>
                    <td>HP Recovery</td>
                    <td>{this.state.basicStat.hpRecovery}</td>
                </tr>
                <tr>
                    <td>SP Recovery</td>
                    <td>{this.state.basicStat.spRecovery}</td>
                </tr>
                <tr>
                    <td>Maximum Carry Weight</td>
                    <td>{this.state.basicStat.maximumCarryWeight}</td>
                </tr>
                <tr>
                    <td>Maximum Stamina</td>
                    <td>{this.state.basicStat.maximumStamina}</td>
                </tr>
                </tbody>
            );
        }
    }

}

export class DefensiveStat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            defStat: null
        };
    }

    componentWillMount() {
        this.setState({defStat: this.props.defensiveStat});
    }

    render() {
        if (this.state.defStat == null) {
            return (
                <div></div>
            );
        }
        else {
            return (
                <tbody className="defensive-stat">
                <tr>
                    <td>Physical Defense</td>
                    <td>{this.state.defStat.physicalDefense}</td>
                </tr>
                <tr>
                    <td>Magic Defense</td>
                    <td>{this.state.defStat.magicDefense}</td>
                </tr>
                <tr>
                    <td>Evasion</td>
                    <td>{this.state.defStat.evasion}</td>
                </tr>
                <tr>
                    <td>Block</td>
                    <td>{this.state.defStat.block}</td>
                </tr>
                <tr>
                    <td>Block Rate</td>
                    <td>{this.state.defStat.blockRate}</td>
                </tr>
                <tr>
                    <td>Critical Resistance</td>
                    <td>{this.state.defStat.criticalResistance}</td>
                </tr>
                </tbody>
            );
        }
    }


}