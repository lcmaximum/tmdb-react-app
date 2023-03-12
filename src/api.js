import { config } from "./config.js";

const BASE_URL = config.api_base_url;
const API_KEY = config.api_key;

export async function submitQuery(userQuery) {
  const corsResponse = await fetch(
    `${BASE_URL}search/tv?api_key=${API_KEY}&page=1&query=${userQuery}&language=en-US`
  );

  return corsResponse.json();
}

export async function getSeason(id, season) {
  const response = await fetch(
    `${BASE_URL}tv/${id}/season/${season.season_number}?api_key=${API_KEY}&language=en-US`
  );

  return response.json();
}
