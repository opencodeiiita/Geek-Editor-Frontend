import React from "react";
import Navbar from "../Components/Navbar";
import { AiFillHeart } from "react-icons/ai";
import "./Dashboard.css";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Navbar />
			<div className="main">
				<nav className="item1">
					<a href="https://github.com/cmade" target="_blank" class="active">
						<img src="https://avatars2.githubusercontent.com/u/10188746?s=460&u=ebd07b3fe70fbaf057d8305f7e611d70be2448e1&v=4" />
					</a>
					<p class="heading headingUsername">Username</p>
					<div>
						<ul class="personalInfo">
							<li>Name : </li>
							<li>Rank : </li>
							<li>Github Profile : </li>
							<li>Followers : </li>
						</ul>
					</div>
				</nav>
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
					<p className="p1">966{<AiFillHeart class="heart" />}</p>
				</div>
				<div className="item5 visitors item">
					<p class="heading">
						Saved Codes: <span className="p2">148,825</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
