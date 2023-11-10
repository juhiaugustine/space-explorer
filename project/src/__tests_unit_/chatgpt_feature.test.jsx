import { describe, it, expect } from "vitest";
import ChatGpt from "../components/ChatGPT_Feature/chatgpt_feature";
import { render, fireEvent } from "@testing-library/react";

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

  //check if the chatgpt feature runs fine when button is clicked
  it("chatgpt function runs when button is clicked", () => {
    const { getByText } = render(<ChatGpt />);
    const webpagebutton = getByText("Generate");
    fireEvent.click(webpagebutton);
    expect(ChatGpt).toHaveBeenCalledTimes(1);
  });

  //check if the function has created some text once it is called
  it("chatgpt has created some text", () => {
    const { getByText } = render(<ChatGpt />);
    const datarecieved = getByText("resultText");
    expect(datarecieved).toBeInTheDocument();
  });
});
