import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
	// console.log({ id, title, url });

	return (
		<div className="card animate__animated animate__flipInY">
			<img src={url} alt={title} />
			<p className="animate__animated animate__rotateInDownRight">
				{title}
			</p>
		</div>
	);
};
