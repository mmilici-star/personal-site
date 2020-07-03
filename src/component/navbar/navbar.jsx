import React from "react";
import NavbarCSS from "./navbar.css";

function Navbar() {
	return (
		<nav class="navbar navbar-inverse navbar-div">
			<div class="container-fluid">
				<div class="navbar-header">
					<button
						type="button"
						class="navbar-toggle"
						data-toggle="collapse"
						data-target="#myNavbar"
					>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">
						Milici
					</a>
				</div>
				<div class="collapse navbar-collapse" id="myNavbar">
					<ul class="nav navbar-nav">
						<li>
							<a href="#">About Me</a>
						</li>
						<li>
							<a href="#">Experience</a>
						</li>
						<li>
							<a href="#">Resume</a>
						</li>
						<li>
							<a href="#">Contact Me</a>
						</li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li>
							<a href="#">
								<span class="glyphicon glyphicon-user"></span> Github
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
