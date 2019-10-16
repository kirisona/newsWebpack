import http from './app';

export function newsServiceModule() {
  const apiUrl = "https://newsapi.org";
  const apiKey = "d5c22bbbee6c463393c90ec6f4796af2";
  return {
    topHeadlines(country, category, cb) {
      http.get(
        `${apiUrl}/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`,
        cb
      );
    },

    everything(text, cb) {
      http.get(`${apiUrl}/v2/everything?q=${text}&sources=${sources.value}&apiKey=${apiKey}`, cb);
    },

    source(cb) {
      http.get(`${apiUrl}/v2/sources?&language=en&apiKey=${apiKey}`, cb)
    }
  };
}
