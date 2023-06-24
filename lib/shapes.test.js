// shapes.test.js

import {
  generateCircle,
  generateRectangle,
  generateTriangle,
  generatePolygon,
} from "./shapes";

describe("Shapes", () => {
  test("generates a circle SVG shape", () => {
    const radius = "50";
    const color = "#ff0000";
    const text = "Circle Text";
    const fontFamily = "Arial";

    const expected = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="${radius}" fill="${color}" />
        <text x="150" y="100" fill="white" text-anchor="middle" dominant-baseline="middle" font-family="${fontFamily}">${text}</text>
      </svg>
    `.replace(/\s+/g, "");

    const result = generateCircle(radius, color, text, fontFamily).replace(
      /\s+/g,
      ""
    );
    expect(result).toEqual(expected);
  });

  test("generates a rectangle SVG shape", () => {
    const width = "100";
    const height = "80";
    const color = "#00ff00";
    const text = "Rectangle Text";
    const fontFamily = "Verdana";

    const expected = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="60" width="${width}" height="${height}" fill="${color}" />
        <text x="150" y="100" fill="white" text-anchor="middle" dominant-baseline="middle" font-family="${fontFamily}">${text}</text>
      </svg>
    `.replace(/\s+/g, "");

    const result = generateRectangle(
      width,
      height,
      color,
      text,
      fontFamily
    ).replace(/\s+/g, "");
    expect(result).toEqual(expected);
  });

  test("generates a polygon SVG shape", () => {
    const points = "100 50 150 150 200 50";
    const color = "#ff00ff";
    const text = "Polygon Text";
    const fontFamily = "Times New Roman";

    const expected = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${points}" fill="${color}" />
        <text x="150" y="100" fill="white" text-anchor="middle" dominant-baseline="middle" font-family="${fontFamily}">${text}</text>
      </svg>
    `.replace(/\s+/g, "");

    const result = generatePolygon(points, color, text, fontFamily).replace(
      /\s+/g,
      ""
    );
    expect(result).toEqual(expected);
  });
});
