import React from 'react';

import './style.css'
import './css/Pride.css'
import Footer from './Footer';
import pridefall from '../files/pridefall-4chan-post.jpg';
import text from '../files/text.json';

class Pride extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: (
                <button className="section-button content-warning" onClick={this.showContent}>
                    Warning: Image Contains Strong Language and Threatening Messages (Click to Show)
                </button>
            )
        }
    }

    showContent = () => {
        this.setState({
            hidden: (
                <div>
                    <a href={pridefall}>
                        <img className="doc-img drop-img pride-img" src={pridefall} alt="Operation Pridefall post on 4chan"></img>
                    </a>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                <div className="header pride-header">
                    <h1>Pride and Pridefall</h1>
                </div>
                <div className="container">
                    <h2>What does LGBTQIA+ stand for?</h2>
                    <p className="p">{text.pride[28]}</p>
                    <div className="slide-group" style={{ backgroundColor: "#F00000" }}>
                        <p className="slide-cover-text">{text.pride[4]}</p>
                        <p className="slide-box-info">{text.pride[5]}</p>
                    </div>
                    <div className="slide-group" style={{ backgroundColor: "#FF8000" }}>
                        <p className="slide-cover-text">{text.pride[6]}</p>
                        <p className="slide-box-info">{text.pride[7]}</p>
                    </div>
                    <div className="slide-group" style={{ backgroundColor: "#FFFF00" }}>
                        <p className="slide-cover-text">{text.pride[8]}</p>
                        <p className="slide-box-info">{text.pride[9]}</p>
                    </div>
                    <div className="slide-group" style={{ backgroundColor: "#3DC066" }}>
                        <p className="slide-cover-text">{text.pride[10]}</p>
                        <p className="slide-box-info">{text.pride[11]}</p>
                    </div>
                    <div className="slide-group" style={{ backgroundColor: "#007940" }}>
                        <p className="slide-cover-text">{text.pride[12]}</p>
                        <p className="slide-box-info">{text.pride[13]}</p>
                    </div>
                    <div className="slide-group" style={{ backgroundColor: "#4773E4" }}>
                        <p className="slide-cover-text">{text.pride[14]}</p>
                        <p className="slide-box-info">{text.pride[15]}</p>
                    </div>
                    <div className="slide-group" style={{ backgroundColor: "#4040FF" }}>
                        <p className="slide-cover-text">{text.pride[16]}</p>
                        <p className="slide-box-info">{text.pride[17]}</p>
                    </div>
                    <div className="slide-group" style={{ backgroundColor: "#FFD900" }}>
                        <p className="slide-cover-text">{text.pride[18]}</p>
                        <p className="slide-box-info">{text.pride[19]}</p>
                    </div>
                    <div className="slide-group" style={{ backgroundColor: "#A5A5A5" }}>
                        <p className="slide-cover-text">{text.pride[20]}</p>
                        <p className="slide-box-info">{text.pride[21]}</p>
                    </div>
                    <div className="slide-group" style={{ backgroundColor: "#A000C0" }}>
                        <p className="slide-cover-text">{text.pride[22]}</p>
                        <p className="slide-box-info">{text.pride[23]}</p>
                    </div>
                    <div className="slide-group" style={{ backgroundColor: "#FF228C" }}>
                        <p className="slide-cover-text">{text.pride[24]}</p>
                        <p className="slide-box-info">{text.pride[25]}</p>
                    </div>
                    <div className="slide-group" style={{ backgroundColor: "#7E581C" }}>
                        <p className="slide-cover-text">{text.pride[26]}</p>
                        <p className="slide-box-info">{text.pride[27]}</p>
                    </div>

                    <h2>Pridefall</h2>
                    {this.state.hidden}
                    <p className="mid">More info on <a className="inline-link" href="https://twitter.com/koshersemite/status/1264996122067644416?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1264996122067644416&ref_url=https%3A%2F%2Fwww.pinknews.co.uk%2F2020%2F05%2F26%2F4chan-alt-right-operation-pridefall-pride-month-cyber-attack-starbucks-amazon-homophobia%2F">this twitter thread.</a></p>

                    <h3>Activities of Operation Pridefall</h3>
                    <p className="p">{text.pride[0]}</p>

                    <h2>Sources for this section</h2>
                    <p className="citation">{text.pride[1]}</p>
                    <p className="citation">{text.pride[2]}</p>
                    <p className="citation">{text.pride[3]}</p>
                    <div className="spacer"></div>
                    <Footer credit="Mercedes Mehling on Unsplash" link="https://unsplash.com/photos/7J7x8HLXQKA"></Footer>
                </div>
            </div>
        )
    }
}

export default Pride;