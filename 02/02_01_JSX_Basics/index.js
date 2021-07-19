function getMood() {
    const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My Current Mood is: {getMood()}</h1>
            </div>
            
        );
    }
}



//First Example

// class JSXDemo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>My image!</h1>
//                 <img src="https://images.unsplash.com/photo-1625737186162-5766a7289b5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
//             </div>
            
//         );
//     }
// }

ReactDOM.render(<JSXDemo/>, document.getElementById('root'))