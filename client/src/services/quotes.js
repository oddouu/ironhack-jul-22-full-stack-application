import api from './api';

export const quoteLoadSingle = (id) =>
  api.get(`/quotes/${id}`).then((response) => response.data);

export const quoteLoadAll = () =>
  api.get('/quotes').then((response) => response.data);

export const quoteLoadRandom = () =>
  api.get('/quotes/random').then((response) => response.data);

export const quoteAdd = (quote) =>
  api.post('/quotes', quote).then((response) => response.data);

export const quoteEdit = (id, quote) =>
  api.patch(`/quotes/${id}`, quote).then((response) => response.data);

export const quoteDelete = (id) =>
  api.delete(`/quotes/${id}`).then((response) => response.data);
