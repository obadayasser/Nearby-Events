import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/lib/api';

export const fetchEventsAsync = createAsyncThunk(
  'events/fetchEvents',
  async () => {
    const response = await api.get('/events');
    return response.data;
  }
);

export const addEventAsync = createAsyncThunk(
  'events/addEvent',
  async (eventData) => {
    const response = await api.post('/events', eventData);
    return response.data;
  }
);

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    selectedEvent: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEventsAsync.fulfilled, (state, action) => {
        state.events = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchEventsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addEventAsync.fulfilled, (state, action) => {
        state.events.push(action.payload);
      });
  },
});

export const selectEvents = (state) => state.events.events;
export const selectSelectedEvent = (state) => state.events.selectedEvent;
export const selectLoading = (state) => state.events.loading;

export const { setSelectedEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
