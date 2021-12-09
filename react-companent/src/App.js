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
    isNone: false
  }

  changeTitleHandler = (title) => {
    console.log('CLicked');


    this.setState({
      title: title
    })
  }

  inputHandler = (event) => {
    const val = event.target.value

    this.setState({
      title: val
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
        <button onClick={() => this.changeTitleHandler('Clicked function')}>Click</button>
        <div className="box">
          {
            this.state.books.map((book, index) => {
              if (this.state.isNone) {
                return (
                  <Book key={index} title={book.title} yaer={book.year} onChangeHandler={this.changeTitleHandler.bind(this, book.title)} />
                )
              }
            })
          }
        </div>
        <button onClick={this.offHandler}>OFF</button>
      </div>

    )
  }
}

export default App