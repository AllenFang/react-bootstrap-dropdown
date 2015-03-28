import React from 'react';
// import Test from '../../src/test';
import Test from 'react-bootstrap-dropdown';

function gogo(xxx){
	alert(xxx+"   4");
}

React.render(
	<Test callback={gogo}/>,
	document.getElementById("example")
);
