import React, {Component} from 'react'
//import './App.css';

export default class NavBar extends Component{
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <a class ="active" href ="#Home">Home</a>
                    </li>
                    <li>
                        <a href ="#About">About</a>
                    </li>
                    <li>
                        <a href ="#Skills">Skills</a>
                    </li>
                    <li>
                        <a href ="#Experience">Experience</a>
                    </li>
                </ul>
            </div>
        )
    }
}