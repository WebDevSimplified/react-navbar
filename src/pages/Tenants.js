import React from "react"
import Toplogo from "../images/toplogo.svg"

// let Toplogo = props => (
//     <img src={props.Toplogo}/>
// )

export default function Tenants({props}) {
    return (
        <>
            <div className="tenants-title">
                <h1>Tenants</h1>
                <div className="logo-home-page">
                    <img src={Toplogo}
                        width={200}
                        alt="innovat10ns Logo" />
                </div>
                <div className="tenants-desc">
                    <ul>
                        innovation is altruistic
                        <br />
                        innovation is universal
                        <br />
                        innovation is diverse
                        <br />
                        innovation is ESU;
                        <br />
                        Easy to use, Simple to Explain, and Useful
                        <br />
                        innovation can come from anywhere, even the most unlikely of heroes
                        <br />
                        innovation can be inconvenient
                        <br />
                        innovation does not have to be disruptive; but it most likely is
                        <br />
                        innovation may appear like magic
                        <br />
                        innovation is contemplatively spontaneous
                        <br />
                        innovation breeds innovation, spinoffs are inevitable
                        <br />
                        innovation is collaborative
                    </ul>
                </div>
            </div>
        </>

    )
};
