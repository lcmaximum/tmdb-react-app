import ResultCard from "./ResultCard";

export default function SearchResults({ results }) {
  const resultList = results.map((show) => {
    return <ResultCard show={show} key={show.id} />;
  });
  return resultList;
}
