import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage} from "../pages/HomePage/HomePage"
import {ApplicationFormPage} from "../pages/ApplicationFormPage/ApplicationFormPage"
import {AdminHomePage} from "../pages/AdminHomePage/AdminHomePage"
import {CreateTripPage} from "../pages/CreateTripPage/CreateTripPage"
import {ListTripPage} from "../pages/ListTripPage/ListTripPage"
import {LoginPage} from "../pages/LoginPage/LoginPage"
import {TripDetailsPage} from "../pages/TripDetailsPage/TripDetailsPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/admin/trips/list" element={<AdminHomePage />} />
                <Route path="/trips/application/:id" element={<ApplicationFormPage />} />
                <Route path="/admin/trips/create" element={<CreateTripPage />} />
                <Route path="/trips/list" element={<ListTripPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}