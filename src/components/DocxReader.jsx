import React, { useState } from "react";
import PizZip from "pizzip";
import { DOMParser } from "@xmldom/xmldom";

function str2xml(str) {
  if (str.charCodeAt(0) === 65279) {
    // BOM sequence
    str = str.substr(1);
  }
  return new DOMParser().parseFromString(str, "text/xml");
}

// Get paragraphs as JavaScript array
function getParagraphs(content) {
  const zip = new PizZip(content);
  const xml = str2xml(zip.files["word/document.xml"].asText());
  const paragraphsXml = xml.getElementsByTagName("w:p");
  const paragraphs = [];

  for (let i = 0, len = paragraphsXml.length; i < len; i++) {
    let fullText = "";
    const textsXml = paragraphsXml[i].getElementsByTagName("w:t");
    for (let j = 0, len2 = textsXml.length; j < len2; j++) {
      const textXml = textsXml[j];
      if (textXml.childNodes) {
        fullText += textXml.childNodes[0].nodeValue;
      }
    }
    if (fullText) {
      paragraphs.push(fullText);
    }
  }
  return paragraphs;
}

const DocxReader = ({ file, onTextExtracted }) => {
  const [isLoading, setIsLoading] = useState(false);

  const extractTextFromDocx = (file) => {
    setIsLoading(true);
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      const paragraphs = getParagraphs(content);
      setIsLoading(false);
      onTextExtracted(paragraphs);
    };

    reader.onerror = (err) => {
      setIsLoading(false);
      console.error(err);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className="flex justify-center items-center mx-auto">
      <input
        type="file"
        onChange={(e) => extractTextFromDocx(e.target.files[0])}
        name="docx-reader"
      />
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default DocxReader;
