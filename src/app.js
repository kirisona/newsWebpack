import { customHttp } from './moduleHttp';
import { newsServiceModule } from './modulenewsService';
import { createSourceOptions } from './moduleUi';
const http = customHttp();
export default http;
const newsService = newsServiceModule();
const newsContainer = document.querySelector(".news-container .row");
const form = document.forms["newsControls"];
const countrySelect = form["country"];
const searchInput = form["search"];
const categorySelect = form["category"];



//  init selects
document.addEventListener("DOMContentLoaded", function() {
  M.AutoInit();
  showLoader();
  loadNews();
  newsService.source(createSourceOptions);
});

form.addEventListener("submit", e => {
  e.preventDefault();
  showLoader();
  if (searchInput.value) {
    newsService.everything(searchInput.value, onGetResponse);
  } else {
    newsService.topHeadlines(countrySelect.value, categorySelect.value, onGetResponse);
  }
});

function loadNews() {
  newsService.topHeadlines(countrySelect.value, categorySelect.value, onGetResponse);
}

function onGetResponse(err, response) {
  hideLoader();
  if (err) {
    console.warn(err);
    // hideLoader();
    return;
  }

  if (!response.articles.length) {
    M.toast({ html: "Новости по вашему запросу не найдены" });
    return;
  }

  renderNews(response.articles);
  // hideLoader();
}

export function renderNews(news) {
  clearContainer();
  let fragment = "";
  news.forEach(item => {
    const template = newsTemplate(item);
    fragment += template;
  });

  newsContainer.insertAdjacentHTML("afterbegin", fragment);
}

import { clearContainer, newsTemplate, showLoader, hideLoader } from './moduleUi';