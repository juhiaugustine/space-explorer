import { describe, it, expect } from "vitest";
import AstronautsInSpace from "../components/Current_Astronauts/current_astronauts";
import {
	render,
	screen,
	fireEvent,
	cleanup,
	waitFor,
} from "@testing-library/react";
import axios from "axios";
import AxiosMock from "axios-mock-adapter";

/**
 * @vitest-environment jsdom
 */

//reference:
//https://www.npmjs.com/package/axios-mock-adapter
//https://github.com/radix-ui/primitives/issues/2009
//https://stackoverflow.com/questions/76288419/how-to-unit-test-a-component-containing-q-select-using-vitest-i-want-to-check-i

let axiosMock;

function setupMock() {
	axiosMock = new AxiosMock(axios);
}

function cleanupTest() {
	axiosMock.restore();
	cleanup();
}

// basic test to check if vitest works
describe("example()", () => {
	it("checks if 5 is 5", () => {
		const num = 5;
		expect(num).toBe(5);
	});
});

//test to check if the component crashes
describe("AstronautsInSpace", () => {
	it("component renders without crashing", () => {
		render(<AstronautsInSpace />);
	});

	//test to check if choose an astronaout is present in the dropdown
	it("dropdown has choose an astronaut option", () => {
		const { getByText } = render(<AstronautsInSpace />);
		const chooseOption = getByText("Choose an astronaut");
		expect(chooseOption).toBeInTheDocument();
	});

	setupMock();

	//test to check if the dropdown displays astronauts
	it("should render dropdown with astronauts", async () => {
		const mockResponse = {
			message: "success",
			people: [
				{ name: "Astronaut1", craft: "Spacecraft1" },
				{ name: "Astronaut2", craft: "Spacecraft2" },
			],
			number: 2,
		};
		axiosMock
			.onGet("http://api.open-notify.org/astros.json")
			.reply(200, mockResponse);

		render(<AstronautsInSpace />);

		await waitFor(
			() => {
				const chooseAstronautText = screen.queryByText("Choose an astronaut");
				if (chooseAstronautText) {
					expect(chooseAstronautText).toBeInTheDocument();
				} else {
					console.log("Choose Astronaut Text not found yet. Retrying...");
					throw new Error("Element not found");
				}
			},
			{ timeout: 5000 }
		);

		const dropdown = screen.getByTestId("my-dropdown");
		expect(dropdown).toBeInTheDocument();
		fireEvent.click(dropdown);
		const dropdownOptions = screen.getAllByRole("option");
		expect(dropdownOptions).toHaveLength(mockResponse.people.length + 1);
		cleanupTest();
	});
});
