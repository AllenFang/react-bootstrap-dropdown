import React from 'react';
import Dropdown from 'react-bootstrap-dropdown';

function select(item){
	alert(item.text+","+item.value);
}

let items = [
	{
		text: "Action",
		value: "1",
    disabled: false
	},
	{
		text: "Another action",
		value: "2",
    disabled: true
	},
	{
		text: "",
		value: "",
    disabled: false,
		isDivider: true
	},
	{
		text: "Something else here",
		value: "3",
    disabled: false
	},
	{
		text: "Separated link",
		value: "4",
    disabled: false
	},
];

React.render(
	<Dropdown
		title="MyDropdown"
		items={items}
		onSelect={select} />,
	document.getElementById("example")
);
