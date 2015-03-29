# react-bootstrap-dropdown
It's a react dropdown for bootstrap, named reactbsDropdown

The reactbsDropdown include all basic function in dropdown

include set title, listen change, disable item, disable dropdown, divier.

### Development
reactbsDropdown dependencies on react 0.13.x and Bootstrap 3

reactbsDropdown written by ES6 and use gulp and browserify to build

Use following command to prepare development
```
$ git clone https://github.com/AllenFang/react-bootstrap-dropdown.git
$ cd react-bootstrap-dropdown
$ npm install
```
Use gulp to build the reactbsDropdown
```
$ gulp dev  #for development
$ gulp prod #for production
```

### Usage
Download reactbsDropdown first.
```
npm install react-bootstrap-dropdown --save
```
Use reactbsDropdown in your react app

You can import reactbsDropdown in module(CommonJS/AMD)
```
var Dropdown = require("react-bootstrap-dropdown");
```
or in browser(window object)
```
<script src="path/to/react-bootstrap-dropdown/react-bootstrap-dropdown.min.js" />
```
the react-bootstrap-dropdown.min.js file you can find in the dist folder

After import reactbsDropdown, use it in your react app

You can find more detail example code in example folder

```
// a callback function will be called if dropdown item select
function select(item){
	alert(item.text+","+item.value);
}

var aBasicItemModel = [
	{
		text: "Action",
		value: "1"
	}
	//...
];

var aDividerItemModel = [
	{
		text: "",
		value: "",
		isDivider: true
	}
	//...
];

var aDisableItemModel = [
	{
		text: "Action",
		value: "1",
		disabled: true
	}
	//...
];

React.render(
	<Dropdown
		title="MyDropdown"
		items={youItemsModel}
		onSelect={select} />,
	document.getElementById("example")
);
```

The reactbsDropdown setting

Use ```title``` to specify the text show on the dropdown
Use ```item``` to specify the dropdown items   
Use ```onSelect``` to listen a select event on dropdown
