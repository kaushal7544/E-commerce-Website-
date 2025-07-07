import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Dashboard from '../Components/Dashboard/Dashboard'
import ContactUs from "../Components/Contact Us/ContactUs"
import AboutUs from "../Components/About US/AboutUS"
import CartItem from '../Components/NavItem/CartItem'
import SearchBar from '../Components/NavItem/SearchBar'
import Login from '../Components/User/Login'
import SingUp from '../Components/User/SingUp'
export default function AppRoute() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/:category" element={<Dashboard />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart-item" element={<CartItem />} />
            <Route path="/search-bar" element={<SearchBar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SingUp />} />
        </Routes>
    )
}   