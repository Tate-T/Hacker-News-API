import HeckerNews from './Components/HackerNews/HackerNews';
import './App.css';
import React, { Component } from 'react';
// import axios from "axios";
// axios.defaults.baseURL = "http://hn.algolia.com/api/v1/items/:id";

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL).then(data => data.json()).then(data => console.log(data))

class App extends Component {

  state = {

    items: [],
  }

  

  componentDidMount() {
    fetch(URL)
      .then(data =>
        data.json()

      ).then(
        data =>
          // console.log(data)
          this.setState(

            { items: data }

          )
      ).catch(error =>
        console.log(error)
      )

  }
  
  componentDidUpdate(prevProps, prevState) {
    
    if(prevProps.items !== this.props.items) {
      fetch(URL)
      .then(data =>
        data.json()

      ).then(
        data =>
          // console.log(data)
          this.setState(

            { items: data }

          )
      ).catch(error =>
        console.log(error)
      )

    }
  }


  submitTitle = (e) => {
    e.preventDefault();
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        title: e.target.elements.name.value,
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((data) => data.json())
      .then((data) =>
      console.log(data)
      //  this.setState(
      //   {
      //     items: data
      //   }
      // ));
      );
  }


  render() {
    // console.log(this.state.url);
    console.log(this.state.items);
    return (

      <>
        <form onSubmit={this.submitTitle}>
          <input placeholder='name' name="name" />
          <button type='submit' >add</button>
        </form>

        <HeckerNews users={this.state.items}></HeckerNews>
      </>
    );

  };

};

export default App;
