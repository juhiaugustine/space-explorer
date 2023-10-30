function ChatGpt() {
  const generate = async () => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const API_KEY = "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";

    const promptInput = document.getElementById("promptInput");
    const generateBtn = document.getElementById("generateBtn");
    //const stopBtn = document.getElementById("stopBtn");
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
      <label>Your Question:</label>
      <input type="text" id="promptInput" placeholder="Enter prompt..." />
      <div id="resultContainer">
        <p>Generated Text</p>
        <p id="resultText"></p>
      </div>
      <button id="generateBtn" onClick={generate}>
        Generate
      </button>
    </>
  );
}

export default ChatGpt;
