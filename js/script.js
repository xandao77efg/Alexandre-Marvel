
const TMDB = "https://image.tmdb.org/t/p/w500";

const catalog = {
  marvelFilmes: [
    {
      title: "Homem-Aranha: Sem Volta Para Casa",
      year: 2021, type: "Filme Marvel",
      poster: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      description: "Peter Parker enfrenta as consequências de sua identidade revelada.",
      trailer: "Spider-Man No Way Home trailer oficial português"
    },
    {
      title: "Vingadores: Ultimato",
      year: 2019, type: "Filme Marvel",
      poster: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      description: "Os heróis sobreviventes tentam reverter os efeitos de uma tragédia cósmica.",
      trailer: "Vingadores Ultimato trailer oficial Marvel Brasil"
    },
    {
      title: "Vingadores: Guerra Infinita",
      year: 2018, type: "Filme Marvel",
      poster: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      description: "Os Vingadores enfrentam Thanos em uma batalha pelo destino do universo.",
      trailer: "Vingadores Guerra Infinita trailer oficial Marvel Brasil"
    },
    {
      title: "Pantera Negra",
      year: 2018, type: "Filme Marvel",
      poster: "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      description: "T'Challa precisa proteger Wakanda e seu futuro.",
      trailer: "Pantera Negra trailer oficial Marvel Brasil"
    },
    {
      title: "Doutor Estranho no Multiverso da Loucura",
      year: 2022, type: "Filme Marvel",
      poster: "/ddJcSKbcp4rKZTmuyWaMhuwcfMz.jpg",
      description: "Doutor Estranho explora realidades perigosas do multiverso.",
      trailer: "Doutor Estranho no Multiverso da Loucura trailer oficial"
    },
    {
      title: "Guardiões da Galáxia Vol. 3",
      year: 2023, type: "Filme Marvel",
      poster: "/r2J02Z2OpNTctfOSN1Ydgii.jpg",
      description: "Os Guardiões embarcam em uma missão que pode mudar sua família.",
      trailer: "Guardiões da Galáxia Vol 3 trailer oficial Marvel Brasil"
    },
    {
      title: "Capitão América: Guerra Civil",
      year: 2016, type: "Filme Marvel",
      poster: "/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
      description: "Os Vingadores se dividem por causa de uma decisão política.",
      trailer: "Capitão América Guerra Civil trailer oficial"
    },
    {
      title: "Thor: Ragnarok",
      year: 2017, type: "Filme Marvel",
      poster: "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
      description: "Thor precisa escapar e impedir a destruição de Asgard.",
      trailer: "Thor Ragnarok trailer oficial Marvel Brasil"
    },
    {
      title: "Homem de Ferro",
      year: 2008, type: "Filme Marvel",
      poster: "/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
      description: "Tony Stark constrói uma armadura que transforma sua vida.",
      trailer: "Homem de Ferro 2008 trailer oficial Marvel"
    },
    {
      title: "Os Vingadores",
      year: 2012, type: "Filme Marvel",
      poster: "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      description: "Heróis se unem para defender a Terra de uma ameaça inesperada.",
      trailer: "Os Vingadores 2012 trailer oficial Marvel"
    },
    {
      title: "Deadpool & Wolverine",
      year: 2024, type: "Filme Marvel",
      poster: "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
      description: "Deadpool tenta recrutar Wolverine para uma aventura multiversal.",
      trailer: "Deadpool e Wolverine trailer oficial Marvel Brasil"
    },
    {
      title: "As Marvels",
      year: 2023, type: "Filme Marvel",
      poster: "",
      description: "Três heroínas precisam trabalhar juntas diante de um fenômeno cósmico.",
      trailer: "As Marvels trailer oficial Marvel Brasil"
    },
    {
      title: "Homem-Formiga e a Vespa: Quantumania",
      year: 2023, type: "Filme Marvel",
      poster: "",
      description: "Scott Lang e sua família exploram o Reino Quântico.",
      trailer: "Homem Formiga e a Vespa Quantumania trailer oficial"
    },
    {
      title: "Shang-Chi e a Lenda dos Dez Anéis",
      year: 2021, type: "Filme Marvel",
      poster: "",
      description: "Shang-Chi encara o passado e uma poderosa organização.",
      trailer: "Shang Chi trailer oficial Marvel Brasil"
    },
    {
      title: "Guardiões da Galáxia",
      year: 2014, type: "Filme Marvel",
      poster: "",
      description: "Um grupo improvável de aventureiros protege um artefato poderoso.",
      trailer: "Guardiões da Galáxia trailer oficial Marvel Brasil"
    }
  ],

  marvelSeries: [
    {
      title: "Loki", year: 2021, type: "Série Marvel",
      description: "O Deus da Trapaça se envolve em mistérios do tempo e do multiverso.",
      trailer: "Loki série trailer oficial Marvel Brasil"
    },
    {
      title: "WandaVision", year: 2021, type: "Série Marvel",
      description: "Wanda e Visão vivem uma realidade cheia de mistérios.",
      trailer: "WandaVision trailer oficial Marvel Brasil"
    },
    {
      title: "Demolidor: Renascido", year: 2025, type: "Série Marvel",
      description: "Matt Murdock enfrenta novas ameaças em Nova York.",
      trailer: "Demolidor Renascido trailer oficial Marvel"
    },
    {
      title: "Cavaleiro da Lua", year: 2022, type: "Série Marvel",
      description: "Um homem descobre uma ligação com uma antiga divindade egípcia.",
      trailer: "Cavaleiro da Lua trailer oficial Marvel Brasil"
    },
    {
      title: "Gavião Arqueiro", year: 2021, type: "Série Marvel",
      description: "Clint Barton encontra uma nova parceira durante uma aventura natalina.",
      trailer: "Gavião Arqueiro trailer oficial Marvel Brasil"
    },
    {
      title: "Falcão e o Soldado Invernal", year: 2021, type: "Série Marvel",
      description: "Sam Wilson e Bucky Barnes enfrentam uma nova ameaça global.",
      trailer: "Falcão e o Soldado Invernal trailer oficial"
    },
    {
      title: "What If...?", year: 2021, type: "Série Marvel",
      description: "Histórias alternativas imaginam outras possibilidades do multiverso.",
      trailer: "What If Marvel trailer oficial"
    },
    {
      title: "Eco", year: 2024, type: "Série Marvel",
      description: "Maya Lopez confronta seu passado e suas origens.",
      trailer: "Eco Marvel trailer oficial"
    },
    {
      title: "Agatha Desde Sempre", year: 2024, type: "Série Marvel",
      description: "Agatha embarca em uma jornada mágica cheia de perigos.",
      trailer: "Agatha Desde Sempre trailer oficial Marvel"
    },
    {
      title: "Invasão Secreta", year: 2023, type: "Série Marvel",
      description: "Nick Fury investiga uma infiltração alienígena na Terra.",
      trailer: "Invasão Secreta trailer oficial Marvel Brasil"
    },
    {
      title: "Ms. Marvel", year: 2022, type: "Série Marvel",
      description: "Kamala Khan descobre poderes extraordinários.",
      trailer: "Ms Marvel trailer oficial Marvel Brasil"
    },
    {
      title: "Mulher-Hulk: Defensora de Heróis", year: 2022, type: "Série Marvel",
      description: "Jennifer Walters equilibra a carreira jurídica e seus novos poderes.",
      trailer: "Mulher Hulk trailer oficial Marvel Brasil"
    },
    {
      title: "Coração de Ferro", year: 2025, type: "Série Marvel",
      description: "Uma jovem inventora desenvolve tecnologia avançada.",
      trailer: "Coração de Ferro Marvel trailer oficial"
    },
    {
      title: "Seu Amigão da Vizinhança: Homem-Aranha",
      year: 2025, type: "Série Marvel",
      description: "Uma nova versão animada acompanha o início da jornada de Peter Parker.",
      trailer: "Seu Amigão da Vizinhança Homem Aranha trailer oficial"
    },
    {
      title: "X-Men '97", year: 2024, type: "Série Marvel",
      description: "Os mutantes retornam em uma nova aventura animada.",
      trailer: "X-Men 97 trailer oficial Marvel"
    }
  ],

  topSeries: [
    { title: "Wandinha", type: "Série", year: 2022, description: "Mistérios sobrenaturais em uma academia peculiar.", trailer: "Wandinha trailer oficial Netflix", tvmaze: "Wednesday" },
    { title: "Stranger Things", type: "Série", year: 2016, description: "Amigos enfrentam mistérios sobrenaturais em uma pequena cidade.", trailer: "Stranger Things trailer oficial Netflix", tvmaze: "Stranger Things" },
    { title: "Round 6", type: "Série", year: 2021, description: "Competidores participam de jogos com consequências extremas.", trailer: "Round 6 trailer oficial Netflix", tvmaze: "Squid Game" },
    { title: "Bridgerton", type: "Série", year: 2020, description: "Romances e intrigas na alta sociedade londrina.", trailer: "Bridgerton trailer oficial Netflix", tvmaze: "Bridgerton" },
    { title: "The Witcher", type: "Série", year: 2019, description: "Um caçador de monstros atravessa um mundo perigoso.", trailer: "The Witcher trailer oficial Netflix", tvmaze: "The Witcher" },
    { title: "One Piece", type: "Série", year: 2023, description: "Uma tripulação parte em busca de um tesouro lendário.", trailer: "One Piece série trailer oficial Netflix", tvmaze: "One Piece" },
    { title: "O Agente Noturno", type: "Série", year: 2023, description: "Um agente se envolve em uma conspiração política.", trailer: "O Agente Noturno trailer oficial Netflix", tvmaze: "The Night Agent" },
    { title: "Cobra Kai", type: "Série", year: 2018, description: "Uma rivalidade antiga volta a ganhar força.", trailer: "Cobra Kai trailer oficial Netflix", tvmaze: "Cobra Kai" },
    { title: "Emily em Paris", type: "Série", year: 2020, description: "Uma profissional americana encara novos desafios em Paris.", trailer: "Emily em Paris trailer oficial Netflix", tvmaze: "Emily in Paris" },
    { title: "Black Mirror", type: "Série", year: 2011, description: "Histórias independentes sobre tecnologia e sociedade.", trailer: "Black Mirror trailer oficial Netflix", tvmaze: "Black Mirror" }
  ],

  topFilmes: [
    { title: "Alerta Vermelho", type: "Filme", year: 2021, description: "Um agente persegue dois ladrões de arte habilidosos.", trailer: "Alerta Vermelho trailer oficial Netflix", tmdbPoster: "" },
    { title: "Não Olhe Para Cima", type: "Filme", year: 2021, description: "Dois astrônomos tentam alertar o mundo sobre uma ameaça.", trailer: "Não Olhe Para Cima trailer oficial Netflix", tmdbPoster: "" },
    { title: "Bird Box", type: "Filme", year: 2018, description: "Uma mãe tenta atravessar um mundo tomado por uma ameaça misteriosa.", trailer: "Bird Box trailer oficial Netflix", tmdbPoster: "" },
    { title: "Agente Oculto", type: "Filme", year: 2022, description: "Um agente da CIA é perseguido por um antigo colega.", trailer: "Agente Oculto trailer oficial Netflix", tmdbPoster: "" },
    { title: "O Projeto Adam", type: "Filme", year: 2022, description: "Um piloto viaja no tempo e encontra sua versão mais jovem.", trailer: "O Projeto Adam trailer oficial Netflix", tmdbPoster: "" },
    { title: "Donzela", type: "Filme", year: 2024, description: "Uma jovem precisa sobreviver a uma situação inesperada.", trailer: "Donzela trailer oficial Netflix", tmdbPoster: "" },
    { title: "Troll", type: "Filme", year: 2022, description: "Uma criatura desperta nas montanhas da Noruega.", trailer: "Troll trailer oficial Netflix", tmdbPoster: "" },
    { title: "A Sociedade da Neve", type: "Filme", year: 2023, description: "Sobreviventes enfrentam condições extremas após um acidente.", trailer: "A Sociedade da Neve trailer oficial Netflix", tmdbPoster: "" },
    { title: "Resgate", type: "Filme", year: 2020, description: "Um mercenário tenta resgatar um jovem sequestrado.", trailer: "Resgate trailer oficial Netflix", tmdbPoster: "" },
    { title: "O Mundo Depois de Nós", type: "Filme", year: 2023, description: "Uma família enfrenta eventos inexplicáveis durante as férias.", trailer: "O Mundo Depois de Nós trailer oficial Netflix", tmdbPoster: "" }
  ]
};

const allItems = Object.values(catalog).flat();
const listKey = "xandao-minha-lista-v1";
const profilesKey = "xandao-perfis-v1";

let myList = readStorage(listKey, []);
let profiles = readStorage(profilesKey, [
  { id: "heroi", name: "Herói", avatar: "🦸" },
  { id: "aranha", name: "Aranha", avatar: "🕷️" },
  { id: "pantera", name: "Pantera", avatar: "🐈‍⬛" },
  { id: "groot", name: "Groot", avatar: "🌱" }
]);

let currentItem = null;
let toastTimer;
const seriesPosterCache = new Map();

function readStorage(key, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key));
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function saveList() {
  localStorage.setItem(listKey, JSON.stringify(myList));
}

function saveProfiles() {
  localStorage.setItem(profilesKey, JSON.stringify(profiles));
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function itemId(item) {
  return `${item.type}|${item.title}`;
}

function isInList(item) {
  return myList.some(saved => itemId(saved) === itemId(item));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function posterFor(item) {
  if (item.poster) return TMDB + item.poster;
  if (item.tmdbPoster) return TMDB + item.tmdbPoster;
  return "";
}

function youtubeSearch(item) {
  const query = item.trailer || `${item.title} trailer oficial`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function watchSearch(item) {
  return `https://www.justwatch.com/br/busca?q=${encodeURIComponent(item.title)}`;
}

function openDetails(item) {
  currentItem = item;
  const modal = document.getElementById("movieModal");
  const poster = posterFor(item);

  document.getElementById("modalTitle").textContent = item.title;
  document.getElementById("modalCategory").textContent =
    `${item.type || "Título"}${item.year ? " • " + item.year : ""}`;
  document.getElementById("modalDescription").textContent =
    item.description || "Consulte os links para ver informações e disponibilidade deste título.";

  const art = document.getElementById("modalArt");
  art.style.backgroundImage = poster
    ? `linear-gradient(0deg, #171717 0%, transparent 85%), url("${poster}")`
    : "linear-gradient(0deg, #171717 0%, transparent 85%), linear-gradient(135deg, #5b1118, #101010)";

  document.getElementById("watchButton").href = watchSearch(item);
  document.getElementById("trailerButton").href = youtubeSearch(item);
  updateModalListButton();

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.getElementById("modalClose").focus();
}

function closeDetails() {
  const modal = document.getElementById("movieModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  currentItem = null;
}

function updateModalListButton() {
  const button = document.getElementById("modalAddButton");
  if (!currentItem) return;
  button.textContent = isInList(currentItem)
    ? "✓ Remover da Minha Lista"
    : "＋ Minha Lista";
}

function toggleList(item) {
  const index = myList.findIndex(saved => itemId(saved) === itemId(item));

  if (index >= 0) {
    myList.splice(index, 1);
    showToast(`"${item.title}" foi removido da sua lista.`);
  } else {
    myList.push({ ...item });
    showToast(`"${item.title}" foi adicionado à sua lista!`);
  }

  saveList();
  renderAll();
  updateModalListButton();
}

function createPoster(item, rank) {
  const button = document.createElement("button");
  button.className = "poster-button";
  button.type = "button";
  button.setAttribute("aria-label", `Ver detalhes de ${item.title}`);

  const url = posterFor(item);

  if (url) {
    const img = document.createElement("img");
    img.className = "poster";
    img.alt = `Pôster de ${item.title}`;
    img.loading = "lazy";
    img.src = url;

    img.onerror = () => {
      img.replaceWith(createPlaceholder(item));
    };

    button.appendChild(img);
  } else {
    button.appendChild(createPlaceholder(item));
  }

  if (rank) {
    const number = document.createElement("span");
    number.className = "rank-number";
    number.textContent = rank;
    button.appendChild(number);
  }

  button.addEventListener("click", () => openDetails(item));
  return button;
}

function createPlaceholder(item) {
  const placeholder = document.createElement("div");
  placeholder.className = "poster-placeholder";
  placeholder.textContent = item.title;
  placeholder.setAttribute("aria-label", `Arte provisória para ${item.title}`);
  return placeholder;
}

function createCard(item, rank) {
  const card = document.createElement("article");
  card.className = "movie-card";

  const posterButton = createPoster(item, rank);
  card.appendChild(posterButton);

  const info = document.createElement("div");
  info.className = "card-info";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = item.title;

  const type = document.createElement("p");
  type.className = "card-type";
  type.textContent = `${item.type || "Título"}${item.year ? " • " + item.year : ""}`;

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const add = document.createElement("button");
  add.className = "card-action";
  add.type = "button";
  add.title = isInList(item) ? "Remover da Minha Lista" : "Adicionar à Minha Lista";
  add.setAttribute("aria-label", add.title);
  add.textContent = isInList(item) ? "✓" : "+";
  if (isInList(item)) add.classList.add("is-added");

  add.addEventListener("click", () => toggleList(item));

  const details = document.createElement("button");
  details.className = "card-action card-details";
  details.type = "button";
  details.textContent = "Detalhes";
  details.addEventListener("click", () => openDetails(item));

  actions.append(add, details);
  info.append(title, type, actions);
  card.appendChild(info);

  if (item.tvmaze) {
    loadSeriesPoster(item, posterButton);
  }

  return card;
}

function renderRow(elementId, items, ranked = false) {
  const row = document.getElementById(elementId);
  row.replaceChildren();

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "no-results";
    empty.textContent = "Nenhum título encontrado.";
    row.appendChild(empty);
    return;
  }

  items.forEach((item, index) => {
    row.appendChild(createCard(item, ranked ? index + 1 : null));
  });
}

function renderAll(searchTerm = "") {
  const term = searchTerm.trim().toLocaleLowerCase("pt-BR");
  const filter = items => items.filter(item =>
    `${item.title} ${item.type || ""} ${item.year || ""}`
      .toLocaleLowerCase("pt-BR").includes(term)
  );

  const movies = filter(catalog.marvelFilmes);
  const series = filter(catalog.marvelSeries);
  const topSeries = filter(catalog.topSeries);
  const topMovies = filter(catalog.topFilmes);
  const saved = filter(myList);

  renderRow("row-marvel-filmes", movies);
  renderRow("row-marvel-series", series);
  renderRow("row-top-series", topSeries, true);
  renderRow("row-top-filmes", topMovies, true);
  renderRow("row-minha-lista", saved);

  document.getElementById("count-marvel-filmes").textContent =
    `${movies.length} títulos`;
  document.getElementById("count-marvel-series").textContent =
    `${series.length} títulos`;
  document.getElementById("emptyList").classList.toggle("hidden", myList.length > 0);

  document.getElementById("row-minha-lista").parentElement
    .querySelector(".section-heading").style.display =
    term && saved.length === 0 && myList.length === 0 ? "none" : "flex";
}

async function loadSeriesPoster(item, posterButton) {
  const cacheKey = item.tvmaze;

  if (!seriesPosterCache.has(cacheKey)) {
    const request = fetch(
      `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(cacheKey)}`
    )
      .then(response => response.ok ? response.json() : [])
      .then(results => {
        if (!Array.isArray(results) || !results.length) return null;

        const exact = results.find(result =>
          result.show?.name?.toLowerCase() === cacheKey.toLowerCase()
        );
        const show = (exact || results[0]).show;
        return show?.image?.original || show?.image?.medium || null;
      })
      .catch(() => null);

    seriesPosterCache.set(cacheKey, request);
  }

  const url = await seriesPosterCache.get(cacheKey);
  if (!url || !posterButton.isConnected) return;

  const img = document.createElement("img");
  img.className = "poster";
  img.alt = `Pôster de ${item.title}`;
  img.loading = "lazy";
  img.src = url;
  img.onerror = () => img.replaceWith(createPlaceholder(item));

  const oldImage = posterButton.querySelector(".poster, .poster-placeholder");
  if (oldImage) oldImage.replaceWith(img);
  else posterButton.prepend(img);
}

function refreshProfiles() {
  const select = document.getElementById("profileSelect");
  const previous = select.value;
  select.replaceChildren();

  profiles.forEach(profile => {
    const option = document.createElement("option");
    option.value = profile.id;
    option.textContent = `${profile.avatar} ${profile.name}`;
    select.appendChild(option);
  });

  if (profiles.some(profile => profile.id === previous)) {
    select.value = previous;
  }
}

function addProfile() {
  const name = prompt("Qual será o nome do novo perfil?");
  if (!name || !name.trim()) return;

  const avatars = ["🦸", "🕷️", "🐈‍⬛", "🌱", "⚡", "🛡️", "🦝", "👽"];
  const avatar = prompt(
    "Escolha um avatar digitando o número:\n" +
    avatars.map((value, index) => `${index + 1}. ${value}`).join("\n")
  );

  const chosenAvatar = avatars[Number(avatar) - 1] || "🦸";
  const id = `perfil-${Date.now()}`;

  profiles.push({ id, name: name.trim().slice(0, 20), avatar: chosenAvatar });
  saveProfiles();
  refreshProfiles();
  document.getElementById("profileSelect").value = id;
  showToast(`Perfil "${name.trim()}" criado!`);
}

document.getElementById("searchInput").addEventListener("input", event => {
  renderAll(event.target.value);
});

document.getElementById("modalClose").addEventListener("click", closeDetails);

document.getElementById("movieModal").addEventListener("click", event => {
  if (event.target.id === "movieModal") closeDetails();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeDetails();
});

document.getElementById("modalAddButton").addEventListener("click", () => {
  if (currentItem) toggleList(currentItem);
});

document.getElementById("newProfile").addEventListener("click", addProfile);

document.getElementById("heroExplore").addEventListener("click", () => {
  document.getElementById("marvel-filmes").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("heroRandom").addEventListener("click", () => {
  const choices = [...catalog.marvelFilmes, ...catalog.marvelSeries];
  openDetails(choices[Math.floor(Math.random() * choices.length)]);
});

refreshProfiles();
renderAll();
