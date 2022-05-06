import MyProvider from "./context/MyProvider";
import Routings from "./routers/Routings";
import "./App.css";
import { createRoot } from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <MyProvider>
        <Routings />
    </MyProvider>)



