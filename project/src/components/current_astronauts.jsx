import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function AstronautsInSpace() {
	const [astronauts, setAstronaut] = useState([]);
	const [selected, setSelected] = useState();

	useEffect(() => {
		axios
			.get("http://api.open-notify.org/astros.json")
			.then((res) => {
				setAstronaut(res.data.people);
				console.log(astronauts);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<>
			<div className="astronauts_in_space">
				<select
					onChange={(e) => {
						const ast_list = astronauts?.find((x) => x.name === e.target.value);
						setSelected(ast_list);
					}}
				>
					<option>Choose an astronaut</option>
					{astronauts.length > 0
						? astronauts.map((astronaut) => (
								<option key={astronaut.name} value={astronaut.name}>
									{astronaut.name}
								</option>
						  ))
						: null}
				</select>
				{selected && (
					<div>
						<h2>Astronaut Information</h2>
						<p>Name: {selected.name}</p>
						<p>Craft: {selected.craft}</p>
					</div>
				)}
			</div>
		</>
	);
}

export default AstronautsInSpace;
