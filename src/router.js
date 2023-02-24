import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import { showLoader } from "./loaders"
import Index from './pages/Index'
import Show from './pages/Show'
import Homepage from "./pages/Homepage"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Homepage/>}/>
            <Route path="treat/:id" element={<Show/>} loader={showLoader}/>
            <Route path="treat/create"/>
            <Route path="update/:id"/>
            <Route path="delete/:id"/>
        </Route>
    </>
))

export default router