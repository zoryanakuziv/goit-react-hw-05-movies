import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "../../api/Api";

import { toast } from "react-toastify";
import { CastStyled, Item } from "./Cast.styled";

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCredits(movieId).then((data) => {
      if (data.length === 0) {
        toast.error("No cast");
        return;
      }
      setCast(data);
    });
  }, [movieId]);

  return (
    <CastStyled>
      {cast.map((actor) => {
        actor = {
          ...actor,
          profile_path: actor.profile_path
            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
            : "No photo!",
        };
        return (
          <Item key={actor.id}>
            <img src={actor.profile_path} alt={actor.name} />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </Item>
        );
      })}
    </CastStyled>
  );
}
