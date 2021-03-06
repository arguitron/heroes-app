import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../selectors/getHeroById";
import { Navigate } from "react-router-dom";

export const heroImages = require.context("../../assets");

export const HeroScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  if (!hero) {
    return <Navigate to="/" />;
  }

  const handleReturn = () => {
    navigate(-1);
  };

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  return (
    <div className="row mt-5 animate__animated animate__bounceInLeft">
      <div className="col-4 animate__animated animate__bounceInLeft">
        <img
          src={heroImages(`./${id}.jpg`)}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b> {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button onClick={handleReturn} className="btn btn-outline-info">
          Regresar
        </button>
      </div>
    </div>
  );
};
