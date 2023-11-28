import "./chatgpt_feature.css";
function ChatGpt() {
  const generate = async () => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const API_KEY = "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";

    const promptInput = document.getElementById("promptInput");
    const generateBtn = document.getElementById("generateBtn");
    const resultText = document.getElementById("resultText");

    try {
      // Fetch the response from the OpenAI API with the signal from AbortController
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: promptInput.value,
            },
            { role: "user", content: promptInput.value },
          ],
        }),
      });

      const data = await response.json();
      resultText.innerText = data.choices[0].message.content;
    } catch (error) {
      console.error("Error:", error);
      resultText.innerText = "Error occurred while generating.";
    }
    generateBtn.addEventListener("click", generate);
  };

  return (
    <>
      <input
        type="text"
        id="promptInput"
        className="inpt"
        placeholder="Enter a Question"
        required
      />
      <div id="resultContainer">
        <p data-testid="resultText" className="resultbg" id="resultText"></p>
      </div>
      <button id="generateBtn" onClick={generate} className="btn">
        Result
      </button>
    </>
  );
}

export default ChatGpt;
