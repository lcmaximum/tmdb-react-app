import "./styles.css";
import SeasonCard from "./SeasonCard";

export default function SeasonList({ seasons, showId }) {
  let seasonMap = "loading seasons...";
  if (seasons.length > 0) {
    console.log("length ", seasons.length);
    seasonMap = seasons.map((season) => {
      return <SeasonCard season={season} showId={showId} key={season.id} />;
    });
    return seasonMap;
  }

  /* console.log("length ", seasons.length);

  for (let i = 0; i < seasons.length; i++) {
    console.log("WHAT WHAAAAAAt");
  }
*/
  /*
   */

  return (
    <>
      <p className="italic">{seasonMap}</p>
    </>
  );
}
