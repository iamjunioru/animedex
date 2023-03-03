import React, { useContext } from "react";
import { Context } from "../../context";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

export default function Anime() {
  const { anime_list, heading } = useContext(Context);

  if (!anime_list || anime_list.length === 0) {
    return <Spinner />;
  }

  return (
    <>
      <h2 className="text-heading">{heading}</h2>
      <div className="row">
        {anime_list.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card" style={{ width: "400px" }}>
              <img
                id="special"
                src={item.attributes.posterImage.large}
                alt="Card cap"
              />
              <div className="card-body">
                <p>{item.attributes.canonicalTitle}</p>
                <Link to={`/anime/detalhes/${item.id}`} className="btn-detalhes">
                  Detalhes
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
