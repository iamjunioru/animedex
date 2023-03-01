import React, { Component } from "react";
import axios from "axios";

export const Context = React.createContext();

const initialState = {
  anime_list: [],
  current_anime: null,
  heading: "TOP 10 ANIMES",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_NAME":
      return {
        ...state,
        anime_list: action.payload,
        current_anime: null,
        heading: "Resultados",
      };
    case "GET_ANIME":
      return {
        ...state,
        current_anime: action.payload,
        heading: "Detalhes",
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    ...initialState,
    dispatch: action => this.setState(reducer.bind(this, this.state, action)),
  };

  componentDidMount() {
    axios
      .get("https://kitsu.io/api/edge/anime")
      .then(res => {
        const value = res.data.data;
        this.setState({
          anime_list: value,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getAnime = id => {
    axios
      .get(`https://kitsu.io/api/edge/anime/${id}`)
      .then(res => {
        const value = res.data.data;
        this.setState({
          current_anime: value,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          getAnime: this.getAnime,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
