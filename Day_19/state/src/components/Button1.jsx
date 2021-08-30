import React from "react"

export default class Button1 extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }


    handleClick = () => {
        console.log(this.setState);
        this.setState((previousState) => {
            return {
                count :previousState.count + 1
            }
        })
    }

    render(){
        return (
            <button className="btn" onClick= {this.handleClick} > {this.state.count} </button>
        )

    }


    }