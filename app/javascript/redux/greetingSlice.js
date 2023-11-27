import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk('greetings/fetchRandomGreeting', async () => {
  try {
    const response = await fetch('api/v1/greetings/index');
    const greeting = await response.json();
    return greeting;
  } catch (error) {
    return error.message;
  }
});

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    value: [],
    error: '',
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.status = 'completed';
        const data = action.payload.message;
        state.value = data;
        state.error = '';
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload.message;
      });
  },
});

export default greetingsSlice.reducer;