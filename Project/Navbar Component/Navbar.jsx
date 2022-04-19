import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
	const [isActive, setActive] = useState(false);

	const addActiveClass = () => {
		setActive(!isActive);
	};

	return (
		<>
			<nav id="nav">
				<div className="logo">
					<h4>The Nav</h4>
				</div>
				<ul
					id="nav-links"
					className={isActive ? "nav-links nav-active" : "nav-links"}
				>
					<li className={isActive ? "ani-link-1" : null}>
						<a href="/">Home</a>
					</li>

					<li className={isActive ? "ani-link-2" : null}>
						<a href="/">About</a>
					</li>

					<li className={isActive ? "ani-link-3" : null}>
						<a href="/">Work</a>
					</li>

					<li className={isActive ? "ani-link-4" : null}>
						<a href="/">Projects</a>
					</li>

					<li className={isActive ? "ani-link-5" : null}>
						<a href="/">Contract</a>
					</li>
				</ul>

				<div className="burger" onClick={addActiveClass}>
					<div className={isActive ? "line-1" : null}></div>
					<div className={isActive ? "line-2" : null}></div>
					<div className={isActive ? "line-3" : null}></div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
