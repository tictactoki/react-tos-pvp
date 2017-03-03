/**
 * Created by wong on 03/03/17.
 */
import React from 'react';
import $ from 'jquery';

function MainStat(str,con, int, spr, dex) {
    this.str = str;
    this.con = con;
    this.int = int;
    this.spr = spr;
    this.dex  = dex;
}

function Build(build){
    this.id = build.id;
    this.circleName = build.circleName;
    this.level = build.level;
    this.mainStat = build.mainStat;
}


class BuildForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            build: new Build(0,"Cleric",3,new MainStat(1,1,1,1,1))
        }
        this.handle = this.handle.bind(this);
    }

    handle(event){
        event.preventDefault();
        /*$.ajax({
            url: "http://localhost:8090/builds?_id=58b9e23e2700002700408999",
            contentType: "application/json",
            type: "GET",
            success: function(a,b,c) {
                console.log(a,c,b);
            }
        })*/
        $.get("http://localhost:8090/builds?_id=58b9e23e2700002700408999", function(data,status) {
           console.log(data);
        });
    }


    render() {
        return (
            <button onClick={this.handle}>CLICK HERE</button>
        );
    }
}

export default BuildForm;