import { useState } from "react";

export default function EpisodeCard({ episode }) {
  const [episodeIsSelected, setEpisodeIsSelected] = useState(false);

  function handleClick() {
    if (episodeIsSelected) {
      setEpisodeIsSelected(false);
    } else {
      setEpisodeIsSelected(true);
      console.log(episode);
    }
  }

  return (
    <div key={episode.id} onClick={handleClick}>
      S{episode.season_number}E{episode.episode_number}: "{episode.name}"
      {episodeIsSelected ? <p>{episode.overview}</p> : <p></p>}
    </div>
  );
}
