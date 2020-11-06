// creamos un hook personalizado (CUSTOM HOOK)
import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		// llamamos del helpers
		getGifs(category).then((imgs) => {
			setState({
				data: imgs,
				loading: false,
			});
		});
	}, [category]); // si la categoria cambia realiza de nuevo el useEffect

	return state; //  {data: [],loading: true}
};
