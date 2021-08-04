class App extends React.Component {
    render() {
        return (
            <div>
                <Machine />
                <Machine />
                <Machine />
            </div>
        ) 
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));