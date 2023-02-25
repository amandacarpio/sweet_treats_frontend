import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import { showLoader } from "./loaders"
import Index from './pages/Index'
import Show from './pages/Show'
import Homepage from "./pages/Homepage"
import { createAction, updateAction, deleteAction } from "./actions"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Homepage/>}/>
            <Route path="treat/:id" element={<Show/>} loader={showLoader}/>
            <Route path="treat/create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    </>
))

export default router