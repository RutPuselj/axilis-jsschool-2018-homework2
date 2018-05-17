import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Color from 'color';
import './Bw.css';

export default class Bw extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }
    }

    componentDidMount () {
        if (this.props.location.state) {
            const { colors } = this.props.location.state;
            this.setState({
                colors: colors
            });
        }
     }

    createTable = () => {
        let table = [];
        let id = 0;

        for (let i = 0; i < 100; i++) {
            table.push(<div key={id} id={id} className='bw_matrix_element'></div>);
            id++;
        }

        if (this.state.colors) {
            this.state.colors.forEach(function(element) {
                document.getElementById(element.id).style.backgroundColor = Color(element.color).grayscale();
            });
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
            palette.push(<div key={id} id={id} className='color' style={{ background: Color(colors[i]).grayscale() }}></div>);
            id++;
        }
        return palette;
    }

    render() {
        return (
            <div className="bw_container">
                <div className="bw_title">Special cool black and white matrix</div>
                <p>You can't paint this one, sorry. :( Just look how cool it is!</p>
                <div className="bw_navigation">
                    <Link to="/bw" className="bw_bwLink">Black and white matrix</Link>
                    <Link to="/rgb" className="bw_rgbLink">Back to RGB matrix</Link>
                </div>
                <div className="bw_matrix_container">
                    <div className="bw_matrix">
                        <div className="bw_matrix_items">
                            {this.createTable()}
                        </div>
                    </div>
                </div>
                <div className="bw_matrix_palette_container">
                    <div className="bw_matrix_palette">
                        {this.createPalette()}
                    </div>           
                </div>  
            </div>
        );
    }
}