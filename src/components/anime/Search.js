import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (dispatch, event) => {
    event.preventDefault();
    axios
      .get(`https://kitsu.io/api/edge/anime?filter[text]=${this.state.text}`)
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
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="jumbotron">
              <div className="jumbotron-bg"></div>
              <div class="jumbotron-content">
              <h1 className="animedex-text">AnimeDex Search</h1>
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <div className="input-group">
                    <div class="search-container">
                      <input
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                        className="barra-pesquisa"
                        placeholder="Pesquise algo aqui... "
                        required
                      />
                      <button
                        onSubmit={this.handleSubmit.bind(this, dispatch)}
                        className="botao-pesquisa"
                      >
                        Pesquisar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
