/**
 * Created by wong on 05/03/17.
 */
import React from 'react';
import $ from 'jquery';

export default class MainStat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            str: 0,
            con: 0,
            int: 0,
            spr: 0,
            dex: 0,
            circleName: "Archer",
            level: 4
        };
        this.addBuild = this.addBuild.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }

    handleChange(field, event) {
        let obj = {};
        obj[field] = parseInt(event.target.value);
        this.setState(obj);
        console.log(this.state);
    }

    addBuild(event) {
        event.preventDefault();
        console.log(this.state);
        var t = JSON.stringify({
            mainStat: {
                str: parseInt(this.state.str),
                con: parseInt(this.state.con),
                int: parseInt(this.state.int),
                spr: parseInt(this.state.spr),
                dex: parseInt(this.state.dex)
            },
            circleName: "Archer",
            level: 4
        });
        console.log(t);
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:8090/builds",
            data: JSON.stringify({
                mainStat: {
                    str: parseInt(this.state.str),
                    con: parseInt(this.state.con),
                    int: parseInt(this.state.int),
                    spr: parseInt(this.state.spr),
                    dex: parseInt(this.state.dex)
                },
                circleName: "Archer",
                level: 4
            }),
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
        })
    }

    render() {
        return (
            <form onSubmit={this.addBuild}>
                <div>
                    <div>
                        <label>str</label>
                        <input type="number" value={this.state.str} onChange={this.handleChange.bind(this, 'str')}/>
                    </div>
                    <div>
                        <label>con</label>
                        <input type="text" value={this.state.con} onChange={this.handleChange.bind(this, 'con')}/>
                    </div>
                    <div>
                        <label>int</label>
                        <input type="text" value={this.state.int} onChange={this.handleChange.bind(this, 'int')}/>
                    </div>
                    <div>
                        <label>spr</label>
                        <input type="text" value={this.state.spr} onChange={this.handleChange.bind(this, 'spr')}/>
                    </div>
                    <div>
                        <label>dex</label>
                        <input type="text" value={this.state.dex} onChange={this.handleChange.bind(this, 'dex')}/>
                    </div>
                    <input type="submit" value="add build"/>
                </div>
            </form>
        );
    }

}

export function Weapon(weapon) {
    this._id = weapon._id;
    this.category = weapon.category;
    this.twoHanded = weapon.twoHanded;
    this.primary = weapon.primary;
    this.secondary = weapon.secondary;
    this.typeName = "Weapon";
    this.name = weapon.name;
    this.mainStat = weapon.mainStat;
    this.offensiveStat = weapon.offensiveStat;
    this.defensiveStat = weapon.defensiveStat;
    this.basicStat = weapon.basicStat;
    this.type = weapon.type;
}

export function Armor(armor) {
    this._id = armor._id;
    this.typeName = armor.typeName;
    this.name = armor.name;
    this.mainStat = armor.mainStat;
    this.offensiveStat = armor.offensiveStat;
    this.defensiveStat = armor.defensiveStat;
    this.basicStat = armor.basicStat;
    this.type = armor.type;
}

export function Stuff(stuff) {
    this._id = stuff._id;
    this.hat = stuff.hat;
    this.charm = stuff.charm;
    this.necklace = stuff.necklace;
    this.rings = stuff.rings;
    this.armor = stuff.armor;
    this.firstHand = stuff.firstHand;
    this.secondaryHand = stuff.secondaryHand;
    this.costume = stuff.costume;
    this.armband = stuff.armband;
}

export function Build(build) {
    this._id = build._id;
    this.circleName = build.circleName;
    this.level = build.level;
    this.mainStat = build.mainStat;
    this.stuffId = build.stuffId;
}

export function NestedBuild(ns) {
    this._id = ns._id;
    this.circleName = ns.circleName;
    this.level = ns.level;
    this.mainStat = ns.mainStat;
    this.stuff = new Stuff(ns.stuff);
}

export function test(build) {
    return new Build(build);
}