import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import {indexLoader, showLoader} from "./loaders"
import { createAction, updateAction, deleteAction } from "./actions"
import Index from "./pages/Index";
import Show from "./pages/Show";



 const router = createBrowserRouter(createRoutesFromElements(
    <Route path = "/" element={<App/>}>
    <Route path="" element={<Index/>} loader={indexLoader}/>
    <Route path="post/:id" element={<Show/>} loader={showLoader}/>
    <Route path="vehicle" action={createAction}/>
    <Route path="update/:id" action={updateAction}/>
    <Route path="delete/:id" action={deleteAction}/>


    </Route>
    
 ))

 export default router