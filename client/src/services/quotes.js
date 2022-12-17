import api from './api';

export const quoteLoadSingle = (id) =>
  api.get(`/quotes/${id}`).then((response) => response.data);

export const quoteLoadAll = () =>
  api.get('/quotes').then((response) => response.data);

export const quoteSearch = (term) =>
  api.get(`/quotes/search?term=${term}`).then((response) => response.data);

export const quoteLoadRandom = () =>
  api.get('/quotes/random').then((response) => response.data);

export const quoteAdd = (quote, storedToken) =>
  api
    .post('/quotes', quote, {
      headers: { Authorization: `Bearer ${storedToken}` }
    })
    .then((response) => response.data);

export const quoteEdit = (id, quote, storedToken) =>
  api
    .patch(`/quotes/${id}`, quote, {
      headers: { Authorization: `Bearer ${storedToken}` }
    })
    .then((response) => response.data);

export const quoteDelete = (id, storedToken) =>
  api
    .delete(`/quotes/${id}`, {
      headers: { Authorization: `Bearer ${storedToken}` }
    })
    .then((response) => response.data);
