import {
  generateCircle,
  generateRectangle,
  generatePolygon,
  generateTriangle,
} from "./shapes";

describe("SVG Generator", () => {
  describe("generateCircle", () => {
    test("should generate a circle SVG shape", () => {
      const radius = 50;
      const color = "red";
      const text = "Circle";
      const fontFamily = "Arial";

      const expectedSvg =
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="red" />
        <text x="150" y="100" fill="white" text-anchor="middle" font-size="2rem" dominant-baseline="middle" font-family="Arial">Circle</text>
      </svg>`.replace(/\s+/g, "");

      const generatedSvg = generateCircle(
        radius,
        color,
        text,
        fontFamily
      ).replace(/\s+/g, "");

      expect(generatedSvg).toEqual(expectedSvg);
    });
  });

  describe("generateRectangle", () => {
    test("should generate a rectangle SVG shape", () => {
      const width = 100;
      const height = 80;
      const color = "blue";
      const text = "Rectangle";
      const fontFamily = "Verdana";

      const expectedSvg =
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="60" width="100" height="80" fill="blue" />
        <text x="150" y="100" fill="white" text-anchor="middle" font-size="2rem" dominant-baseline="middle" font-family="Verdana">Rectangle</text>
      </svg>`.replace(/\s+/g, "");

      const generatedSvg = generateRectangle(
        width,
        height,
        color,
        text,
        fontFamily
      ).replace(/\s+/g, "");

      expect(generatedSvg).toEqual(expectedSvg);
    });
  });

  describe("generatePolygon", () => {
    test("should generate a polygon SVG shape", () => {
      const points = "100,50 200,50 150,150";
      const color = "orange";
      const text = "Polygon";
      const fontFamily = "Helvetica";

      const expectedSvg =
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,50 200,50 150,150" fill="orange" />
        <text x="150" y="100" fill="white" text-anchor="middle" dominant-baseline="middle" font-size="2rem" font-family="Helvetica">Polygon</text>
      </svg>`.replace(/\s+/g, "");

      const generatedSvg = generatePolygon(
        points,
        color,
        text,
        fontFamily
      ).replace(/\s+/g, "");

      expect(generatedSvg).toEqual(expectedSvg);
    });
  });

  describe("generateTriangle", () => {
    test("should generate a triangle SVG shape", () => {
      const sideLength = 100;
      const color = "green";
      const text = "Triangle";
      const fontFamily = "Courier New";

      const expectedSvg =
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,85.56624327025935 100,172.1687836487032 200,172.1687836487032" fill="green" />
        <text x="150" y="128.8675134594813" fill="white" text-anchor="middle" dominant-baseline="middle" font-size="1rem" font-family="Courier New">Triangle</text>
      </svg>`.replace(/\s+/g, "");

      const generatedSvg = generateTriangle(
        sideLength,
        color,
        text,
        fontFamily
      ).replace(/\s+/g, "");

      expect(generatedSvg).toEqual(expectedSvg);
    });
  });
});
