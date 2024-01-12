
// Before React18
// import ReactDOM from 'react-dom';
// // JSX code
// const header = <h1>This is my First Wala React App!</h1>
// // console.log(header);
// // Behind it will create in bebel
// // React.createElement()
// const rootElement = document.getElementById("root");
// ReactDOM.render(header,rootElement);

// After Rect 18
// import ReactDOM from 'react-dom/client';
// import App from './App';
// const header = <h1>This is my First Wala React App!</h1>
// const rootElement = document.getElementById("root");
// const rootElementNewVersion = ReactDOM.createRoot(rootElement);
// rootElementNewVersion.render(header)

// One Liner approach for rendering 
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)


// const root = document.getElementById("root");
// root.append(App)