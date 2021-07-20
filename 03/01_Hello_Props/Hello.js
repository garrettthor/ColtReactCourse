class Hello extends React.Component {
    render() {
        const props = this.props;
        let bangs = "!".repeat(props.bangs)
        // console.log(props);
        return (
            <div>
                <h1>Hi, {props.to} from {props.from}{bangs}</h1>;
                <img src={props.img} />;
            </div> 
        );
    };
};