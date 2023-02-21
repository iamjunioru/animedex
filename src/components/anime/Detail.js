import React, { Component } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";

class Detail extends Component {
  state = {
    detail: {},
    img: {}
  };

  componentDidMount() {
    axios
    .get(`https://kitsu.io/api/edge/anime?filter[id]=${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        detail: res.data.data[0].attributes,
        img: res.data.data[0].attributes.coverImage
      });
    });  
  }

  render() {
    const { detail } = this.state;
    const { img } = this.state;

    if (
      detail === undefined ||
      img === undefined ||
      Object.keys(detail).length === 0
    ) {
      return <Spinner />;
    } else {
      if (img !== null) {
        return (
          <div id="detail" className="card mb-4">
            <img
              className="card-img-top"
              id="pic-title"
              src={img.large}
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="card-title">
                {detail.canonicalTitle}
              </h2>
              <p className="card-text">{detail.synopsis}</p>
              <h4 className="card-text">
                <b>Avaliação</b>: {detail.averageRating}/100 <br />
                <b>Rank de Popularidade</b> : {detail.popularityRank}
              </h4>
            </div>
          </div>
        );
      } else {
        return (
          <div id="detail" className="card mb-3">
            <img
              className="card-img-top"
              id="pic-title"
              src="https://www.pngmart.com/files/22/Kurama-PNG-Isolated-Image.png"
              alt="Card cap"
            />
            <div className="card-body">
              <h3 className="card-title text-center mb-4">
                {detail.canonicalTitle}
              </h3>
              <p className="card-text">{detail.synopsis}</p>
              <p className="card-text">
                <b>Avaliação</b>: {detail.averageRating}/100 <br />
                <b>Rank de popularidade</b> : {detail.popularityRank}
              </p>
            </div>
          </div>
        );
      }
    }
  }
}

export default Detail;
