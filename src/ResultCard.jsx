import { useState } from "react";
import { config } from "./config.js";
import SeasonList from "./SeasonList";

const BASE_URL = config.api_base_url;
const API_KEY = config.api_key;

export default function ResultCard({ show }) {
  const [showIsSelected, setShowIsSelected] = useState(false);
  const [showId, setShowId] = useState(null);
  const [showOverview, setShowOverview] = useState("");
  const [showSeasons, setShowSeasons] = useState([]);

  async function getCorsResponse() {
    const response = await fetch(
      `${BASE_URL}tv/${show.id}?api_key=${API_KEY}&language=en-US`
    );
    console.log("cors response: ", response);
    return response.json();
  }

  async function getSeasons() {
    setShowIsSelected(true);
    const showBlob = await getCorsResponse();

    setShowId(showBlob.id);
    setShowSeasons(showBlob.seasons);
    setShowOverview(showBlob.overview);
    console.log("show blob ", showBlob);
    console.log("show info ", showId);
    console.log("show seasons ", showSeasons);
  }

  function handleClick() {
    if (showIsSelected) {
      setShowIsSelected(false);
    } else {
      getSeasons();
    }
  }

  return (
    <div className="result-card">
      <p onClick={handleClick}>{show.name}</p>

      {showIsSelected ? (
        <p>
          <span className="show-overview">{showOverview}</span>
          <SeasonList seasons={showSeasons} showId={showId} />
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
