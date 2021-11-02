import React, { Component } from "react";
import "./PageNotFound.css";

const PageNotFound = (props) => {
    return (
        <>
            <div className="container-404">
                <div className="shelf">
                    <a className="book home-page" href="/">
                        Home page
                    </a>
                    <a
                        className="book about-us"
                        href="https://github.com/opencodeiiita/Geek-Editor-Frontend#what-is-geek-editor"
                    >
                        About
                    </a>
                    <a
                        className="book contact"
                        href="https://github.com/opencodeiiita/Geek-Editor-Frontend#communication"
                    >
                        Contact
                    </a>
                    <a
                        className="book faq"
                        href="https://github.com/opencodeiiita/Geek-Editor-Frontend#guidelines"
                    >
                        F.A.Q.
                    </a>

                    <span className="book not-found"></span>

                    <span className="door left"></span>
                    <span className="door right"></span>
                </div>
                <h1>Error 404</h1>
                <p>The page you're loking for can't be found</p>
            </div>
        </>
    );
};
export default PageNotFound;
