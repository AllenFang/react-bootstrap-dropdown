import React from 'react';
import Dropdown from 'react-bootstrap-dropdown';

function select(item){
	alert(item.text+","+item.value);
}

let demo1 = [
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

let demo2 = [
	{
		text: "Action",
		value: "1"
	},
	{
		text: "Another action",
		value: "2"
	},
	{
		text: "",
		value: "",
		isDivider: true
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

let demo3 = [
	{
		text: "Action",
		value: "1"
	},
	{
		text: "Another action",
		value: "2",
		disabled: true
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
	<Dropdown
		title="MyDropdown"
		items={demo1}
		onSelect={select} />,
	document.getElementById("basic")
);

React.render(
	<Dropdown
		title="MyDropdown"
		items={demo2}
		onSelect={select} />,
	document.getElementById("divider")
);

React.render(
	<Dropdown
		title="MyDropdown"
		items={demo3}
		onSelect={select} />,
	document.getElementById("item-disabled")
);

React.render(
	<Dropdown
		title="MyDropdown"
		items={demo1}
		disabled="true"/>,
	document.getElementById("disabled")
);
