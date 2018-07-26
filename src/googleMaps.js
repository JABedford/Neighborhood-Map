export const GMAPS_API_KEY = "AIzaSyBugdBToas4VuZpp0DOKzRv0qjezpAPBaQ";

export function geocode(place_name, reportError) {
  const query =
    "https://maps.googleapis.com/maps/api/geocode/json" +
    `?key=${GMAPS_API_KEY}` +
    `&address=${place_name + ", Wickham, Berkshire"}`;
  return fetch(query)
    .then(result => result.json())
    .then(json => json.results[0])
    .catch(error => reportError("Unable to retrieve location information."));
}
