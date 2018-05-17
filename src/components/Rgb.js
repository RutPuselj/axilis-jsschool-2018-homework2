import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Rgb.css';

export default class Rgb extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'white',
            colors: []
        }
    }

    getColor = (color) => {
        this.setState({
            color: color
        });
    }
  
    setColor = (element) => {
        document.getElementById(element).style.backgroundColor = this.state.color;
        this.setState({
            colors: [...this.state.colors, {
                id: element,
                color: this.state.color
            }]
        });
    }
  
    createTable = () => {
        let table = [];
        let id = 0;
        for (let i = 0; i < 100; i++) {
                table.push(<div key={id} id={id} className='rgb_matrix_element' onClick={ this.setColor.bind(null, id) }></div>);
                id++;
        }
        return table;
    }
  
  
    createPalette = () => {
        let colors = ['#fdf41f', '#a80248', 
        '#00b3b3', '#ac517a', '#58d76d', 
        '#f21d1d', '#e698a0', 
        '#5F5AC0', '#f37735', '#009246'];
        let palette = [];
        let id = 100;
  
        for (let i = 0; i < colors.length; i++) {
            palette.push(<div key={id} id={id} className='color' onClick={this.getColor.bind(null, colors[i])} style={{ background: colors[i] }}></div>);
            id++;
        }
        return palette;
    }
  

    render() {
        return (
            <div className="rgb_container">
                <div className="rgb_title">Special cool colorful RGB matrix</div>
                <p>Pick a color and start painting this beautiful RGB matrix!</p>
                <div className="rgb_navigation">
                    <Link to={{pathname: '/bw', state: { colors: this.state.colors } }} className="rgb_bwLink">You want it black and white?</Link>
                    <Link to="/rgb" className="rgb_rgbLink">RGB matrix</Link>
                </div>
                <div className="rgb_matrix_container">
                    <div className="rgb_matrix">
                        <div className="rgb_matrix_items">
                            {this.createTable()}
                        </div>
                    </div>
                </div>
                <div className="rgb_matrix_palette_container">
                    <div className="rgb_matrix_palette">
                        {this.createPalette()}
                    </div>           
                </div> 
            </div>
        );
    }
}