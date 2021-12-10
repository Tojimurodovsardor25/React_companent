import { Component } from "react";
import Book from './Book/Book'



class App extends Component {
  state = {
    books: [
      { title: 'Shaytanat', year: 1999 },
      { title: 'Rework', year: 2004 },
      { title: 'Rich dad and', year: 2005 },
    ],
    title: 'hello',
    // inpVal: '',
    isNone: false
  }

  changeTitleHandler = () => {
    if (this.state.inpVal === "") {
      console.log('error');
    } else {
      this.setState({
        title: this.state.qwe
      })
    }
  }

  inputHandler = (event) => {
    this.setState({
      qwe: event.target.value
    })
  }


  offHandler = () => {
    console.log('Off clicked', !this.state.isNone);

    this.setState({
      isNone: !this.state.isNone
    })
  }


  render() {
    console.log('render');

    return (
      <div className="App">
        <h1>{this.state.title}</h1>

        <input type="text" onChange={this.inputHandler} />
        <button onClick={this.changeTitleHandler}>Click</button>
        <div className="box">
        </div>
        <button onClick={this.offHandler}>OFF</button>
      </div>

    )
  }
}

export default App