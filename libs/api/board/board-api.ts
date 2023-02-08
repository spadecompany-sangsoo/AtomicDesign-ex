function getNews() {
  return fetch('/api/board/news').then((res) => res.json());
}

function getInformation() {
  return fetch('/api/board/information').then((res) => res.json());
}

function getParagraph() {
  return fetch('/api/board/paragraph').then((res) => res.json());
}

export { getNews, getInformation, getParagraph };
