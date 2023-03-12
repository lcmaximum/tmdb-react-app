import EpisodeCard from "./EpisodeCard";

export default function EpisodeList({ episodes }) {
  console.log("episodes ", episodes);
  let episodeMap = episodes.map((episode) => {
    return <EpisodeCard episode={episode} />;
  });
  return <div>{episodeMap}</div>;
}
