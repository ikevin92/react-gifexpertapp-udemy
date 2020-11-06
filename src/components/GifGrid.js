// import React, { useState, useEffect } from 'react';
import React from 'react';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	//hook

	//Custom Hook
	const { data: images, loading } = useFetchGifs(category);

	// console.log(images);
	// // hacemos que solo se ejecute una vez la carga

	return (
		<>
			<h3 className="animate__animated animate__jello">{category}</h3>

			{loading && (
				<p className="animate__animated animate__fadeIn">Loading</p>
			)}

			<div className="card-grid animate__animated animate__fadeInUp">
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
