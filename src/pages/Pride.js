import React from 'react';

import './style.css';
import './css/Pride.css';
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

    prideFlagGen = () => {
        var rows = [];
        for (var i = 0; i < text.pride[0].length; i++) {
            rows.push(
                <div className="slide-group" style={{ backgroundColor: text.pride[0][i++] }}>
                    <p className="slide-cover-text">{text.pride[0][i++]}</p>
                    <p className="slide-box-info">{text.pride[0][i]}</p>
                </div>
            );
        }
        return rows;
    }

    render() { // TODO: replace the slide group hardcoding with js loop (10 mins)
        return (
            <div>
                <div className="header pride-header">
                    <h1>Pride and Pridefall</h1>
                </div>
                <div className="container">
                    <h2>What does LGBTQIA+ stand for?</h2>
                    <p className="mid">{text.pride[5]}</p>
                    {this.prideFlagGen()}

                    <h2>Pridefall</h2>
                    {this.state.hidden}
                    <p className="mid">More info on <a className="inline-link" href="https://twitter.com/koshersemite/status/1264996122067644416?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1264996122067644416&ref_url=https%3A%2F%2Fwww.pinknews.co.uk%2F2020%2F05%2F26%2F4chan-alt-right-operation-pridefall-pride-month-cyber-attack-starbucks-amazon-homophobia%2F">this twitter thread.</a></p>

                    <h3>Activities of Operation Pridefall</h3>
                    <p className="p">{text.pride[1]}</p>

                    <h2>Sources for this section</h2>
                    <p className="citation">{text.pride[2]}</p>
                    <p className="citation">{text.pride[4]}</p>
                    <p className="citation">{text.pride[3]}</p>
                    <p className="citation">{text.pride[6]}</p>
                    <div className="spacer"></div>
                    <Footer credit="Mercedes Mehling on Unsplash" link="https://unsplash.com/photos/7J7x8HLXQKA"></Footer>
                </div>
            </div>
        )
    }
}

export default Pride;