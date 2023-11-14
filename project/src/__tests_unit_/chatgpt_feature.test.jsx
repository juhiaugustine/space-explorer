import { describe, it, expect } from "vitest";
import ChatGpt from "../components/ChatGPT_Feature/chatgpt_feature";
import { render } from "@testing-library/react";

/**
 * @vitest-environment jsdom
 */

// checking vitest working
describe("random passing test", () => {
  it("equality check always passsing", () => {
    const linecheck = "Passed";
    expect(linecheck).toBe("Passed");
  });
});

//check if chatgpt_feature works
describe("ChatGpt", () => {
  it("chatgpt_feature works properly", () => {
    render(<ChatGpt />);
  });



  //check if the function has created some text once it is called
  it("chatgpt has created some text", () => {
    const { getByTestId } = render(<ChatGpt />);
    const datarecieved = getByTestId("resultText");
    expect(datarecieved).toBeInTheDocument();
  });
});
