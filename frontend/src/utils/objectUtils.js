export const reduceStateToObject = (state, value) => {
	return Object.fromEntries(
		Object.entries(state).map(([k, v]) => [k, v[value]])
	);
};
