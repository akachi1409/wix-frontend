import React from "react"

import "./utility.css"
import Card from "../card/card";
class Utility extends React.Component{
    constructor(props){
        super(props)
        this.state={
            card1:
            {
                title:"Cloud Analytics Modernization",
                svg:1
            },
            card2:
            {
                title:"Versatility in Application",
                svg:2
            },
            card3:
            {
                title:"Data Science Acceleration",
                svg:3
            },
            card4:
            {
                title:"Data Science Acceleration",
                svg:4
            },
            card5:
            {
                title:"Full Customer Experience Service",
                svg:5
            }
        }
    }
    render(){
        return(
            <div className="utility_container">
                <div className="utility_section">
                    <div className="utility_left_bar" >
                        <p className="utility_left_title">ADD UTILITIES HERE</p>
                        <p className="utility_left_text">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>
                    <div className="utility_right_bar">
                        <div className="cards_layout2">
                            <Card title={this.state.card1.title} svg={this.state.card1.svg}/>
                            <Card title={this.state.card2.title} svg={this.state.card2.svg}/>
                        </div>
                        <div className="cards_layout1">
                            <Card title={this.state.card3.title} svg={this.state.card3.svg}/>
                            <Card title={this.state.card4.title} svg={this.state.card4.svg}/>
                            <Card title={this.state.card5.title} svg={this.state.card5.svg}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Utility;