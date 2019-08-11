import React from 'react';
import Card from './Card';

function CardList(props){
	return (
		<div>
			{
				props.robots.map((user, index) => {
					return (
						<Card 
							key={index} 
							id={props.robots[index].id} 
							name={props.robots[index].name} 
							email={props.robots[index].email}
						/>
					);
				})
			}
		</div>
	);
};

export default CardList;