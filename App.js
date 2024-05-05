const heading = React.createElement("h1", {id : "header", xyz : "abc"}, "Hello World written by using React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);