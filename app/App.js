import React from 'react';
import Hello from './components/Hello';
import Popular from './components/Popular';

function isAuthed() {
	return true;
}

function isNew() {
	return true;
}

function showWarning() {
	return true;
}

// Component, State, Lifecycle, UI
export default class App extends React.Component {
	render() {
		console.log(this.props);
		const authed = isAuthed();

		if (authed) {
			const name = 'All You Cool Cats N Kittens';
			const firstLogin = isNew();
            let message = firstLogin? 'Welcome back 🌊' : 'Welcome';
            let hello = (
                <div>
                    <Popular/>
                    <Hello
                        first='Kel'
                        last='Pap'
                        message={message}
                        authed={true}
                        logout={() => alert('Logged Out!')}
                        header={<h1>🥴</h1>}
                        myList={[{
                            'user': 'arbys',
                            'tweet': 'we have the meats!'
                        }, {
                            'user': 'footballfan',
                            'tweet': 'go birds!'
                        }, {
                            'user': 'bernie',
                            'tweet': 'eat the rich!'
                        }, {
                            'user': 'everyoneelse',
                            'tweet': 'popcorn'
                        }
                    ]}
                />
                </div>
            )
            return hello;
		} else {
            return (
                <div className="container">
                    <Popular />
                </div>
            )
			/*return <div>
				{
					showWarning() === true
					? <h1>Log in to see your dashboard 🚨 </h1>
					: null
				}
			</div>;*/
		}
    }
};