import {describe, it, expect} from "vitest"
import TestRenderer from "react-test-renderer";
import AstronautsInSpace from "../components/Current_Astronauts/current_astronauts"
import { render } from "@testing-library/react";

/**
* @vitest-environment jsdom
*/



//basic test to check if vitest works
describe("example()", () => {
    it("checks if 5 is 5", () => {
        const num = 5;
        expect(num).toBe(5)
    })
})



describe("AstronautsInSpace", () => {
    it("dropdown has choose an astronaut option", () => {
        const { getByText } = render(<AstronautsInSpace/>);
        const chooseOption = getByText("Choose an astronaut");
        expect(chooseOption).toBeInTheDocument();
    })
})




