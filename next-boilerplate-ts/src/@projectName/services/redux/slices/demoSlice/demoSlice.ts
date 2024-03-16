import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface DemoState {
	demo: any;
}

const initialState: DemoState = {
	demo: null,
};

export const demoSlice = createSlice({
	name: 'tenant',
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<any>) => {
			state = action.payload;
		},
		setDefault: () => {
			return initialState;
		},
	},
});

export const { setDefault } = demoSlice.actions;

export default demoSlice.reducer;
