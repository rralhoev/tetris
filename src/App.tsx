import React from 'react';
import { Route } from 'react-router-dom';
import { Welcome } from './pages/index';

function App () {
	return (
		<div className="App">
			<Route path="/">
				<Welcome/>
			</Route>
		</div>
	);
}

export default App;
