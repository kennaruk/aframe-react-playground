import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import "aframe";
import "aframe-particle-system-component";
import { Entity, Scene } from "aframe-react";

const COLORS = ["red", "green", "blue"];

class App extends Component {
	constructor() {
		super();
		this.state = {
			color: 0
		};
	}
	handleClick = () => {
		this.setState(
			{
				color: Math.round(Math.random() * (COLORS.length - 1))
			},
			() => {
				console.log("colors:", COLORS[this.state.color]);
			}
		);
	};
	render() {
		return (
			<Scene events={{ click: this.handleClick, collided: [this.handleCollide] }}>
				<Entity
					geometry={{ primitive: "plane", width: 5, height: "5" }}
					text={{ font: "mozillavr", value: "Kennaruk", align: "center" }}
					material={{ color: "blue" }}
					position={{ x: 0, y: 0, z: -5 }}
				/>
				<Entity
					geometry={{ primitive: "sphere" }}
					material={{ color: COLORS[this.state.color] }}
					position={{ x: 0, y: 3, z: -5 }}
				/>
			</Scene>
		);
	}
}

export default App;
