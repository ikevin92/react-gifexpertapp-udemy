import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
	//hook
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		// console.log(e.target.value);
		// actualizamos el state del hook de arriba
		setInputValue(e.target.value);
	};

	//evento del enter
	const handelSubmit = (e) => {
		//evitamos que actualice la ventana
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			//agrega la categoria
			setCategories((cats) => [inputValue, ...cats]);
			//limpiamos el string
			setInputValue('');
		}

		//console.log('Submit');
	};

	return (
		<form onSubmit={handelSubmit}>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
};

// obligatorio el prop
AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
