function createElement(data) {
  const paragraph = document.createElement("p");
  paragraph.innerText = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  const url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  const article = new XMLHttpRequest();
  article.open("GET", url, true);
  article.send();
  article.onload = function () {
    if (article.status === 200) {
      const data = JSON.parse(article.response).query.pages[21721040].extract;
      callback(data);
    }
  };
}

queryWikipedia(createElement);
