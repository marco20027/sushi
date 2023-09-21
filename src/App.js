import Navbar from "./components/navbar";
import Card from "./components/card";
import React,{ Component } from "react";
import nigiri from './images/nigiri.jpg'
import ravioli from './images/ravioli.jpg'
import sashimi from './images/sashimi.jpg'
import tempura from './images/tempura.jpg'
import tigerroll from './images/tigerroll.jpg'
import barca from './images/barca.jpg'
import uramakiSalmoneAvocado from './images/uramakiSalmoneAvocado.jpg'
import RainbowRoll from './images/RainbowRoll.jpg'

class App extends Component {
  state = {
    cards: [
      {id:0, nome : "Nigiri", prezzo: 5, img : nigiri, quantità: 0},
      {id:1, nome : "Barca", prezzo: 5, img : barca, quantità: 0},
      {id:2, nome : "Ravioli", prezzo: 5, img : ravioli, quantità: 0},
      {id:3, nome : "Sashimi", prezzo: 5, img : sashimi, quantità: 0},
      {id:4, nome : "Tempura", prezzo: 5, img : tempura, quantità: 0},
      {id:5, nome : "Tiger Roll", prezzo: 5, img : tigerroll, quantità: 0},
      {id:6, nome : "uramaki Salmone Avocado", prezzo: 5, img : uramakiSalmoneAvocado, quantità: 0},
      {id:7, nome : "Rainbow Roll", prezzo: 5, img : RainbowRoll, quantità: 0}
    ]

  }

  handleDelete = cardId  => {
    const cards = this.state.cards.filter(card => card.id !== cardId)
    this.setState({ cards })
    console.log(this.setState({ cards }))
    
  }
  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card)
    cards[id] = {...card}
    cards[id].quantità ++
    this.setState({ cards })
  }

  render(){
  return (
 <><Navbar />
 <div className="container">
  <h1>Cosa desideri ordinare ?</h1><hr />
 
  <div className="row">
   {this.state.cards.map(card => (
    <Card 
      key={card.id}
      onDelete={this.handleDelete}
      onIncrement={this.handleIncrement}
      card={card}/>
      
   ))}  
    </div>
    </div></>
  );
}
}

export default App;
