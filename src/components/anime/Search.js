import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (dispatch, event) => {
    event.preventDefault();
    const { text } = this.state;
    axios
      .get(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
      .then((res) => {
        const value = res.data.data;
        dispatch({
          type: "SEARCH_NAME",
          payload: value,
        });
        this.setState({
          text: "",
        });
      });
  };

  render() {
    const { text } = this.state;
    return (
      <Consumer>
        {({ dispatch }) => (
          <div className="jumbotron">
            <div className="jumbotron-bg"></div>
            <div className="jumbotron-content">
              <h1 className="animedex-tittle">JUST SEARCH.</h1>
              <form onSubmit={(event) => this.handleSubmit(dispatch, event)}>
                <div className="input-group">
                  <div className="search-container">
                    <input
                      name="text"
                      value={text}
                      onChange={this.handleChange}
                      className="barra-pesquisa"
                      placeholder="Pesquise algo aqui... "
                      required
                    />
                    <button className="btn-search">
                      Pesquisar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Search;
