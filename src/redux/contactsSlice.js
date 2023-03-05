import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: action.payload,
        };
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(addContacts.pending, (state, action) => {
        return { ...state, isLoading: true };
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        return {
          isLoading: false,
          error: null,
          items: [...state.items, action.payload],
        };
      })
      .addCase(addContacts.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(deleteContacts.pending, (state, action) => {
        return { ...state, isLoading: true };
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        return {
          isLoading: false,
          error: null,
          items: state.items.filter(
            contact => contact.id !== action.payload.id
          ),
        };
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
