const newsContainer = document.querySelector(".news-container .row");
const sources = document.querySelector('#sources');

export function createSourceOptions(err, response) {
  const sourceArray = response.sources;

  for (let i = 0; i <= 15; i++) {
    const newSourceOption = `
    <option value=${sourceArray[i].id}>${sourceArray[i].name}</option>
    `;

    sources.insertAdjacentHTML('beforeend', newSourceOption);
    M.FormSelect.init(sources, newSourceOption);
  }
}

//  init selects

export function renderNews(news) {
  clearContainer();
  let fragment = "";
  news.forEach(item => {
    const template = newsTemplate(item);
    fragment += template;
  });

  newsContainer.insertAdjacentHTML("afterbegin", fragment);
}

export function clearContainer() {
  newsContainer.innerHTML = "";
}

export function newsTemplate({ title, urlToImage, url, description }) {
  return `
  <div class="col s12">
    <div class="card">
      <div class="card-image">
        <img src="${urlToImage}">
        <span class="card-title">${title || ""}</span>
      </div>
      <div class="card-content">
        <p>${description || ""}</p>
      </div>
      <div class="card-action">
        <a href="${url}">Read more</a>
      </div>
    </div>
  </div>
  `;
}
export function showLoader() {
  const template = `
  <div class="progress">
      <div class="indeterminate"></div>
  </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", template);
}

export function hideLoader() {
  const loader = document.querySelector(".progress");
  if (loader) {
    loader.remove();
  }
}
