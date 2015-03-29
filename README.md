# react-bootstrap-dropdown
It's a react dropdown for bootstrap, named reactbsDropdown

The reactbsDropdown include all basic function in dropdown, include set default value, and listen change etc.

reactbsDropdown dependencies on react 0.13.x and Bootstrap 3

### Development
reactbsDropdown written by ES6 and use gulp and browserify to build

Use following command to develop
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

```
// a callback function will be called if dropdown item select
function select(item){
	alert(item.text+","+item.value);
}

var items = [
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
```
