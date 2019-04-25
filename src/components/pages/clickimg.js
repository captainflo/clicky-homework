import React from "react";
import Character from "../../../src/characters.json";



class Clickimg extends React.Component {

  state = {
    characters: Character,
    totalScore: 0,
    topScore: 0,
  }

  reset = () => {

    alert( 'you lost' );
    this.setState( { characters: Character } )
  }

  getValue=(id)=>{

    const charState = this.state.characters;

    let scoreCheck = 0;

    let totalScore = this.state.totalScore;

    const newChar = charState.map( item => {

      if( item.id === id ) {
        item.score++;
        totalScore++;
        this.setState({totalScore})

        scoreCheck = item.score;
      }
      return item;
    })

    console.log( newChar)

    function shuffle(newChar) {
      for (let i = newChar.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newChar[i], newChar[j]] = [newChar[j], newChar[i]];
      }
      return newChar;
    }
    shuffle(newChar);
    this.setState({ characters: newChar });

    if ( scoreCheck === 2) { this.reset(); }

  }

  renderlist=()=>{

  }

  youLose=()=>{
    alert('You Loose');
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <li>
        Score: {this.state.totalScore} | Top Score: {this.state.topScore}
      </li>
      </nav>
        {this.state.characters.map(item =>{
         return <img onClick={ () => this.getValue(item.id)} id={item.id} className="card-image" src={item.src} alt="star-wars" value={item.score}></img>
        })}
      </div>
    );
  }

}

export default Clickimg;


  //   let i = this.state.data.length - 1;
  //   for (; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   const temp = this.state.data[i];
  //   this.state.data[i] = this.state.data[j];
  //   this.state.data[j] = temp;
  // }
  // return this.state.data;

    // check +1 score (setstate)
    // shuffle data 
    //if second +1
