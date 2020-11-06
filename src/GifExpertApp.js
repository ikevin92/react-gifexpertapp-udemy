import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	//hook
	const [categories, setCategories] = useState(['One Punch']);

	return (
		<>
			<h1>GifExpertApp</h1>
			<AddCategory setCategories={setCategories} />
			<hr />

			{/* <button onClick={handleAdd}>Agregar</button> */}

			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};
