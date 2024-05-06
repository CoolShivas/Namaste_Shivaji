const heading = React.createElement("h1", {id : "header", xyz : "abc"}, "Hello World written by using React");
console.log(heading);// // Now h1 tag becomes an object ;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);// // Shiva Chouhan will be over-ride by Hello World written by using React ;


///////********************************************************************************************************** */


// <div id="root2"><div> // // Render the output here;
// <div id="parent">
//         <div id="child">
//             <h1> I am h1 tag. </h1>
//         </div>
//  </div>


///////********************************************************************************************************** */

// Now converting this nested element into react form or How to write in react form ?

const parent = React.createElement("div", {id : "parent"}, 
    React.createElement("div", {id : "child"}, 
        React.createElement("h1", {}, "I am h1 tag.")
    )
)

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(parent);

// // React.createElement(object) = Html (Browser understands);

///////********************************************************************************************************** */


// <div id="root2"><div> // // Render the output here;
// <div id="parent">
//         <div id="child">
//             <h2> I am h1 tag. </h2>
//             <h3> I am h2 tag. </h3>
//         </div>
//  </div>


const gardian = React.createElement("div", {id : "parent"}, 
    React.createElement("div", {id : "child"}, 
        [React.createElement("h2", {}, "I am h2 tag."), React.createElement("h3", {}, "I am h3 tag.")]
        // If there are lots of tags or heading we have to put inside an array as mention above;
        // if there are lots of React.createElement then code is going to become a mess.
        // Therefore, to get rid of this React provide a JSX write a JS code.
    )
)

const root3 = ReactDOM.createRoot(document.getElementById("root3"));

root3.render(gardian);