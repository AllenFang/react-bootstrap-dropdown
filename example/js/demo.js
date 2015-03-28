import React from 'react';
import Dropdown from 'react-bootstrap-dropdown';

function select(item){
	alert(item.text+","+item.value);
}

let items = [
	{
		text: "Action",
		value: "1"
	},
	{
		text: "Another action",
		value: "2"
	},
	{
		text: "Something else here",
		value: "3"
	},
	{
		text: "Separated link",
		value: "4"
	},
];

React.render(
	// <Dropdown callback={gogo}/>,
	<Dropdown
		title="MyDropdown"
		items={items}
		onSelect={select} />,
	document.getElementById("example")
);
