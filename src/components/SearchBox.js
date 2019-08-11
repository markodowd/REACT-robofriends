import React from 'react';

function SearchBox(props){
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots'
				onChange={props.searchChange}
			/>
		</div>
	)
}

export default SearchBox;