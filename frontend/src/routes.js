import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './pages/createReport/create';
import Display from './pages/displayReports/display';
import Homepage from './pages/Homepage/homepage';
import ViewAndEdit from './pages/viewAndEdit/viewAndEdit';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/create" element={<Create />} />
                <Route path="/display" element={<Display />} />
                <Route path="/viewAndEdit/:id" element={<ViewAndEdit />}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
