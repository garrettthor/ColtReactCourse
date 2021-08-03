class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello there, General Kenobe!</h1>
                <h1>Hello there, General Kenobe!</h1>
                <h1>Hello there, General Kenobe!</h1>
            </div>
            
        );
    }
}

// Function version

// function Hello() {
//     return (
//         <div>
//             <h1>Hello there, General Kenobe!</h1>
//             <h1>Hello there, General Kenobe!</h1>
//         </div>
//     );
// }

ReactDOM.render(<Hello/>, document.getElementById('root'));