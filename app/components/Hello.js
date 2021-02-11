import React from 'react';

class Hello extends React.Component {
    render() {
        console.log(this.props);
        let tweets = this.props.myList;
            return (
                <div>
                    <h1>{this.props.message}, {this.props.first} {this.props.last}</h1>
                    <p>Today is {new Date().toLocaleString()}</p>
                    <p>What is 2 + 2? {2+2} 👩‍🏫 </p>
                    {this.props.authed === true ?
                        <button onClick={this.props.logout}>Logout</button>
                        : null}
                    <ul id="tweets">
                        {tweets.map((tweet) => (
                            <li key={tweet.user}>
                                {tweet.tweet}
                            </li>
                        ))}
                    </ul>
                </div>
            );
    }
};

export default Hello;