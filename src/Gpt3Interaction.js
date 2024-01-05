// Gpt3Interaction.js
import React, { useState } from 'react';

const Gpt3Interaction = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const generateResponse = async () => {
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

      try {
        console.log(inputText)
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: inputText,
          max_tokens: 100,
        }),
      });

          const data = await response.json();
          console.log(data)
      setOutputText(data.choices[0].text.trim());
    } catch (error) {
      console.error('Error fetching data from OpenAI:', error);
    }
  };

  return (
    <div>
      <textarea value={inputText} onChange={handleInputChange} placeholder="Enter your prompt" />
      <button onClick={generateResponse}>Generate Response</button>
      <div>
        <strong>Output:</strong>
        <p>{outputText}</p>
      </div>
    </div>
  );
};

export default Gpt3Interaction;
