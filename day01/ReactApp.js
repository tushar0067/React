
const element=React.createElement('h1',{id:"first",className:"ele",style:{backgroundColor:"red", textAlign:"center"}},"Hello Coder Army");
const element2=React.createElement("h2",{id:"second",className:"ele",style:{backgroundColor:"blue", textAlign:"center"}},"Mja aayega aaj")

// ReactDOM.render(element,document.getElementById("root"));
const root=ReactDOM.createRoot(document.getElementById("root"));
const div1=React.createElement("div",{},[element,element2]);
root.render(div1);
