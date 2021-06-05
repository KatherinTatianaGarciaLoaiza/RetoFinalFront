import React from 'react'
import NavbarSofKa from "../components/Navbar";

const HomePage = () => (
    <section>
        <div className="container">
            <div className = "row">
                <div className = "col-md"><NavbarSofKa /></div>
                <p>Estas en Home</p>
            </div>
            <div className = "row">
                <div className = "col-md-2"></div>
                <div className = "col-md-10"></div>
            </div>
        </div>
    </section>
)
export default HomePage