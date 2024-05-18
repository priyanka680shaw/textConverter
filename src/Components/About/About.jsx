import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto mt-8 flex justify-center flex-col items-center h-screen">
      <h1 className="text-3xl font-bold mb-4">About Text Converter App</h1>
      <p className="text-gray-700 mb-4">
        Welcome to the Text Converter App! This app allows you to convert text in various formats.
      </p>
      <h2 className="text-xl font-bold mb-2">Features:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Text Case Conversion: Convert text to uppercase, lowercase, or title case.</li>
        <li>Text Reversal: Reverse the order of characters in the text.</li>
        <li>Word Count: Count the number of words in the text.</li>
        <li>Character Count: Count the number of characters in the text.</li>
        <li>Text Encoding/Decoding: Encode and decode text using various encoding schemes.</li>
      </ul>
      <p className="text-gray-700">
        This app is easy to use and can be helpful for tasks like formatting text, analyzing text data, or encoding/decoding messages.
      </p>
    </div>
  );
};

export default AboutPage;
