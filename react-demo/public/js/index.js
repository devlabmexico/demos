function MyApp() {
    return React.createElement(
        'h1',
        null,
        'Hello, world!'
    );
}

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(MyApp, null));