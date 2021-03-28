import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../RootReducer';

interface FormSubmitState {
	header: string;
	body: string;
}

const slice = createSlice({
	name: 'formSubmit',
	initialState: {
		header: '',
		body: ''
	} as FormSubmitState,
	reducers: {
		formSubmitted(state, { payload }: PayloadAction<string[]>) {
			state.header = payload[0];
			state.body = payload[1];
		}
	}
});

export const formSubmitReducer = slice.reducer;

export const { formSubmitted } = slice.actions;

const selectFormSubmit = (state: State) => state.formSubmit;

export const formSubmitSelector = createSelector(
	[selectFormSubmit],
	(selectFormSubmit) => selectFormSubmit
);
