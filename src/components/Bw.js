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
        const { colors } = this.props.location.state;
        this.setState({
            colors: colors
        });
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

    render() {
        return (
            <div className="bw_container">
                <div className="bw_title">Special cool black and white matrix</div>
                <p>You can't paint this one, sorry. :( Just look how cool it is!</p>
                <div className="bw_navigation">
                    <Link to="/bw" className="bw_bwLink">Black and white matrix</Link>
                    <Link to={{pathname: '/rgb', state: { colors: this.state.colors } }}  className="bw_rgbLink">Back to RGB matrix</Link>
                </div>
                <div className="bw_matrix_container">
                    <div className="bw_matrix">
                        <div className="bw_matrix_items">
                            {this.createTable()}
                        </div>
                    </div>
                </div>
                {/* <div className="bw_matrix_palette_container">
                    <div className="bw_matrix_palette">
                        {this.createPalette()}
                    </div>           
                </div>  */}
            </div>
        );
    }

}