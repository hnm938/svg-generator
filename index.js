// svg-generator.mjs

import fs from "fs";
import inquirer from "inquirer";
import { Circle, Rectangle, Triangle, Polygon } from "./lib/shapes.js";

function generateSVG(text, textColor, shape, shapeColor, points, font) {
  let shapeCode = "";

  switch (shape) {
    case "circle":
      const circle = new Circle(50, shapeColor, text, font);
      shapeCode = circle.generateShape();
      break;
    case "rectangle":
      const rectangle = new Rectangle(200, 100, shapeColor, text, font);
      shapeCode = rectangle.generateShape();
      break;
    case "triangle":
      const triangle = new Triangle(100, shapeColor, text, font);
      shapeCode = triangle.generateShape();
      break;
    case "polygon":
      const polygon = new Polygon(points, shapeColor, text, font);
      shapeCode = polygon.generateShape();
      break;
  }

  const svgTemplate = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeCode}
    </svg>`;

  return svgTemplate;
}


// Prompt the user for input using inquirer
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter the text for the SVG logo:",
    },
    {
      type: "list",
      name: "font",
      message: "Select the font for the text:",
      choices: ["Arial", "Verdana", "Helvetica", "Times New Roman", "Impact"],
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (e.g., #000000):",
    },
    {
      type: "list",
      name: "shape",
      message: "Select the SVG shape:",
      choices: ["circle", "rectangle", "triangle", "polygon"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (e.g., #ffffff):",
    },
    {
      type: "input",
      name: "points",
      message: "Enter the points for the polygon (comma-separated):",
      when: (answers) => answers.shape === "polygon",
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor, points, font } = answers;
    const svgCode = generateSVG(
      text,
      textColor,
      shape,
      shapeColor,
      points,
      font
    );

    fs.writeFile("logo.svg", svgCode, (err) => {
      if (err) {
        console.error("Error writing SVG file:", err);
      } else {
        console.log('SVG file "logo.svg" generated successfully!');
      }
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
