import "./current_astronauts.css"
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
			})
			.catch((err) => {
				console.error(err);
			});
	}, [astronauts]);

		return (
		<>
		<div className="main">
			<div className="astronauts_in_space">
				<select data-testid="my-dropdown"
					onChange={(e) => {
						const ast_list = astronauts?.find((x) => x.name === e.target.value);
						setSelected(ast_list);
					}}
				>
					<option>Choose an astronaut</option>
					{
						astronauts.map((astronaut) => (
								<option key={astronaut.name} value={astronaut.name}>
									{astronaut.name}
								</option>
						))
						}
				</select>
				{selected && (
					<div className= "display">
						<h2>Astronaut Information</h2>
						<p>Name: {selected.name}</p>
						<p>Craft: {selected.craft}</p>
					</div>
				)}
			</div>
			</div>
		</>
	);
}

export default AstronautsInSpace;