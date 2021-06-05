import React from 'react'
import NavbarSofKa from "../components/Navbar";

export default function AllOKRSPage() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md"><NavbarSofKa /></div>
                    <p>Todos los OKRS</p>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-10"></div>
                </div>
            </div>
        </section>
    )
}
