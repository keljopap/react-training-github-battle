import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'regenerator-runtime/runtime'
import Popular from './components/Popular'
import Battle from './components/Battle'

ReactDOM.render(
	// what to render
	<div className='container'>
		<Battle/>
	</div>,
	// where to render it to
	document.getElementById('app')
);