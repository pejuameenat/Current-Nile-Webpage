import {Nav} from "../Components";
import { Outlet } from "react-router-dom";
import {ScrollToTop} from '../Components'
const HomeNav = () => {
    return <>
        <ScrollToTop/>
        <Nav/>
        <Outlet/>
    </>
};
export default HomeNav;

