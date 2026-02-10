//You can edit ALL of the code here
const episodesContainer = document.getElementById("episodes-container");

function pad(number) {
  return number.toString().padStart(2, "0");
}

function createEpisodeCode(season, number) {
  return `S${pad(season)}E${pad(number)}`;
}

function displayEpisodes(episodeList) {
  episodesContainer.innerHTML = "";

  episodeList.forEach((episode) => {
    const card = document.createElement("div");
    card.className = "episode-card";

    const episodeCode = createEpisodeCode(
      episode.season,
      episode.number
    );

  card.innerHTML = `
  <div class="episode-header">
    <h2>${episode.name} - ${episodeCode}</h2>
  </div>
  <img src="${episode.image.medium}" alt="${episode.name}">
  ${episode.summary}
`;


    episodesContainer.appendChild(card);
  });
}

const allEpisodes = getAllEpisodes();
displayEpisodes(allEpisodes);
