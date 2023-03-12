import "./styles.css";

import { submitQuery } from "./api";
import SearchResults from "./SearchResults";
import { useState } from "react";

export default function App() {
  const [userQuery, setUserQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => setUserQuery(e.target.value);

  async function returnSearchResults() {
    const jsonResponse = await submitQuery(userQuery);
    setUserQuery("");
    setSearchResults(jsonResponse.results);
    return jsonResponse.results;
  }

  return (
    <div className="App">
      <input type="text" value={userQuery} onChange={handleChange} />
      <button onClick={returnSearchResults}>Search</button>
      {searchResults.length > 0 && <SearchResults results={searchResults} />}
    </div>
  );
}
