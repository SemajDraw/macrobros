import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
	isLoading: boolean;
}

const slice = createSlice({
	name: 'loadingSlice',
	initialState: {
		isLoading: false
	} as LoadingState,
	reducers: {
		isLoading(state, { payload }: PayloadAction<boolean>) {
			state.isLoading = payload;
		}
	}
});

export const loadingReducer = slice.reducer;

export const { isLoading } = slice.actions;
