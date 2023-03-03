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
        const data = res.data.data[0];
        if (data) {
          this.setState({
            detail: data.attributes,
            img: data.attributes.coverImage
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { detail, img } = this.state;

    if (!detail || Object.keys(detail).length === 0) {
      return <Spinner />;
    }

    return (
      <div id="detail" className="card-content">
        {img && (
          <img
            className="card-img-top"
            id="pic-title"
            src={img.large}
            alt="Card cap"
          />
        )}
        <div className="card-body">
          <h2 className="card-title">{detail.canonicalTitle}</h2>
          <p className="card-text">{detail.synopsis}</p>
          <h4 className="card-rating">
            <b>Average</b>: {detail.averageRating}/100 <br />
            <b>Popularity Ranking</b>: {detail.popularityRank}
          </h4>
        </div>
      </div>
    );
  }
}

export default Detail;
