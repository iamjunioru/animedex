import React, { Component } from "react";
import axios from "axios";

export const context = React.createcontext();


const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_NAME":
      return {
        ...state,
        anime_list: action.payload,
        heading: "RESULTS"
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    anime_list: [],
    heading: "TOP 10 ANIMES",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get("https://kitsu.io/api/edge/anime")
      .then(res => {
        const value = res.data.data;
        this.setState({
          // anime_id: value.id,
          anime_list: value
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <context.Provider value={this.state}>
        {this.props.children}
      </context.Provider>
    );
  }
}
export const Consumer = context.Consumer;
