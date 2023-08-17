import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './features/notes/notesSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer
  },
});

if (window.Cypress) {
  window.store = store;
}
