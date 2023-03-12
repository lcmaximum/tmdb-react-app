import { useState } from "react";
import { getSeason } from "./api";
import EpisodeList from "./EpisodeList";

export default function SeasonCard({ season, showId }) {
  //return <EpisodeCard episode={episode} />

  const [seasonIsSelected, setSeasonIsSelected] = useState(false);
  const [episodeList, setEpisodeList] = useState([]);

  async function getEpisodes() {
    const seasonBlob = await getSeason(showId, season);
    setEpisodeList(seasonBlob.episodes);
  }

  const handleClick = () => {
    if (seasonIsSelected) {
      setSeasonIsSelected(false);
    } else {
      setSeasonIsSelected(true);
      getEpisodes();
    }
  };

  return (
    <>
      <p onClick={handleClick} key={season.id}>
        {season.name}
      </p>
      {seasonIsSelected ? <EpisodeList episodes={episodeList} /> : <></>}
    </>
  );
}
