/**
 * NOTE: The App.js is the controlling super-component. As a rule, all updates
 * should happen below the tree. Under no circumstance shall this component be
 * re-updated by any Redux store calls, Axios fetches, etc.
 */


 // Packages:
import React from 'react';


// Imports:
import './App.css';


// Components:
import Navbar from './components/Navbar';
// import Notice from './components/Notice';
import Counter from './components/Counter'
import Introduction from './components/Introduction';
import HowDoesItKill from './components/HowDoesItKill';
import WhatAreTheSymptoms from './components/WhatAreTheSymptoms';
import MustHaves from './components/MustHaves';
import MustDo from './components/MustDo';
import WhatNext from './components/WhatNext';
import Footer from './components/Footer';


// Functions:
function App() {
	return (
		<div className="App">
			<Navbar />
			{/* <Counter /> */}
			<Introduction />
			<HowDoesItKill />
			<WhatAreTheSymptoms />
			<MustHaves />
			<MustDo />
			<WhatNext />
			<Footer />
		</div>
	);
}


// Exports:
export default App;