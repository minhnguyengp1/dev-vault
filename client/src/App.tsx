import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import './styles/main.scss';
import React from 'react';
import Home from './pages/Home.tsx';
import Components from './pages/Components.tsx';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

function App() {
    return (
        <div className="app">
            <div className="container">
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/components"
                                element={<Components />}
                            />
                        </Routes>
                    </Layout>
                </Router>
            </div>
        </div>
    );
}

export default App;
