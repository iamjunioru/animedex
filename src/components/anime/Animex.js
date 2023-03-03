import React, { useContext } from "react";
import { Context } from "../../Context";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

export default function Anime() {
  const { anime_list, heading } = useContext(Context);

  if (!anime_list || anime_list.length === 0) {
    return <Spinner />;
  }

  return (
    <>
      <h2 className="heading text-center">{heading}</h2>
      <h3 className="results">
        ~ {anime_list.length} animes or movies are being displayed:
      </h3>
      <div className="row">
        {anime_list.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card" style={{ width: "400px" }}>
              <Link to={`/anime/detalhes/${item.id}`}>
                <img
                  className="card-img"
                  id="special"
                  src={item.attributes.posterImage.large}
                  alt="Card cap"
                />
              </Link>
              <div className="card-body">
                <p className="title-body">{item.attributes.canonicalTitle}</p>
                <Link to={`/anime/detalhes/${item.id}`} className="btn-search">
                  DETAILS
                </Link>
              </div>
              <br />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
