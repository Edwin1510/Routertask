
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListPeople from "./Listpeople";
import Layout from "./Layout";


function App() {

return (
<>
<BrowserRouter>
<Routes>
<Route path="/" element={<Layout/>}>
<Route path="/all" element={<ListPeople type={"all"}/>}/> 
<Route path="/fullstack" element={<ListPeople type={"Full stack"}/>}/>
<Route path="/datascience" element={<ListPeople type={"Data science"}/>}/>
<Route path="/cyber" element={<ListPeople type={"Cyber security"}/>}/> 
<Route path="/carr" element={<ListPeople type={"carrer"}/>}/>
</Route>
</Routes>
</BrowserRouter>
</>
);
}

export default App;
