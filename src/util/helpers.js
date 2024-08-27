export function formatMovieResponse(json) {
  return ({
    title: json.Title,
    plot: json.Plot
  })
}
