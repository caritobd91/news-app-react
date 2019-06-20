const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=cb83495bb9724d3c80337804facdd7de";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}