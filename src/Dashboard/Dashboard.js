import React from "react";
import { AiFillHeart } from "react-icons/ai";
import "./Dashboard.css";

const Dashboard = (props) => {
    return (
        <>
            <div>
                <div className={`dashboard background-${props.mode}`}>
                    <div className={`main main-background-${props.mode} `}>
                        <nav className="item1">
                            <div
                                id="img"
                                href="https://github.com/cmade"
                                target="_blank"
                            >
                                {" "}
                                <img
                                    className="img1"
                                    src="https://avatars2.githubusercontent.com/u/10188746?s=460&u=ebd07b3fe70fbaf057d8305f7e611d70be2448e1&v=4"
                                    alt=""
                                />
                            </div>
                            <div className="info">
                                <span class="heading headingUsername">
                                    Username
                                </span>
                                <ul class="personalInfo">
                                    <li className="li">Name : </li>
                                    <li className="li">Rank : </li>
                                    <li className="li">Github Profile : </li>
                                    <li className="li">Followers : </li>
                                </ul>
                            </div>
                        </nav>
                        <section className="other">
                            <div className="other-item">
                                <div className="item2 reviews item">
                                    <p class="heading">Rank</p>
                                    <p className="p1">2,304</p>
                                </div>
                                <div className="item3 rating item">
                                    <p class="heading">Followers</p>
                                    <p className="p1">4.7k</p>
                                </div>
                                <div className="item4 sentiment item">
                                    <p class="heading">Total Likes</p>
                                    <p className="p1">
                                        966{<AiFillHeart class="heart" />}
                                    </p>
                                </div>
                            </div>
                            <div className="item5 visitors">
                                <p class="heading">
                                    Saved Codes:{" "}
                                    <span className="p2">148,825</span>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
