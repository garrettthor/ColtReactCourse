class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Ringo"
                    from="Paul" 
                    bangs={9}
                    img="https://blazonsart.com/scraps/friendship/hi_hello/hi-hello-46.jpg"
                />
            </div>
        ) 
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));