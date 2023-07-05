import { SVGShape, Circle, Rectangle, Triangle, Polygon } from "./shapes";

describe("SVG Shapes", () => {
  describe("SVGShape", () => {
    test("should create an instance of SVGShape", () => {
      const svgShape = new SVGShape(300, 200, 150, 100);

      expect(svgShape.svgWidth).toBe(300);
      expect(svgShape.svgHeight).toBe(200);
      expect(svgShape.centerX).toBe(150);
      expect(svgShape.centerY).toBe(100);
    });

    test("generateSVGElement should return the correct SVG element", () => {
      const svgShape = new SVGShape(300, 200, 150, 100);
      const shapeContent = '<circle cx="150" cy="100" r="50" fill="red" />';

      const result = svgShape.generateSVGElement(shapeContent);

      expect(result).toBe(shapeContent);
    });
  });

  describe("Circle", () => {
    test("should create an instance of Circle", () => {
      const circle = new Circle(50, "red", "Circle", "Arial");

      expect(circle.svgWidth).toBe(300);
      expect(circle.svgHeight).toBe(200);
      expect(circle.centerX).toBe(150);
      expect(circle.centerY).toBe(100);
      expect(circle.radius).toBe(50);
      expect(circle.color).toBe("red");
      expect(circle.text).toBe("Circle");
      expect(circle.fontFamily).toBe("Arial");
    });

    test("generateShape should return a valid SVG circle", () => {
      const circle = new Circle(50, "red", "Circle", "Arial");
      const svgCode = circle.generateShape();

      expect(svgCode).toContain("<circle");
      expect(svgCode).toContain('cx="150"');
      expect(svgCode).toContain('cy="100"');
      expect(svgCode).toContain('r="50"');
      expect(svgCode).toContain('fill="red"');
      expect(svgCode).toContain("<text");
      expect(svgCode).toContain('font-family="Arial"');
      expect(svgCode).toContain("Circle");
    });
  });

  describe("Rectangle", () => {
    test("should create an instance of Rectangle", () => {
      const rectangle = new Rectangle(200, 100, "blue", "Rectangle", "Verdana");

      expect(rectangle.svgWidth).toBe(300);
      expect(rectangle.svgHeight).toBe(200);
      expect(rectangle.centerX).toBe(150);
      expect(rectangle.centerY).toBe(100);
      expect(rectangle.width).toBe(200);
      expect(rectangle.height).toBe(100);
      expect(rectangle.color).toBe("blue");
      expect(rectangle.text).toBe("Rectangle");
      expect(rectangle.fontFamily).toBe("Verdana");
    });

    test("generateShape should return a valid SVG rectangle", () => {
      const rectangle = new Rectangle(200, 100, "blue", "Rectangle", "Verdana");
      const svgCode = rectangle.generateShape();

      expect(svgCode).toContain("<rect");
      expect(svgCode).toContain('x="50"');
      expect(svgCode).toContain('y="50"');
      expect(svgCode).toContain('width="200"');
      expect(svgCode).toContain('height="100"');
      expect(svgCode).toContain('fill="blue"');
      expect(svgCode).toContain("<text");
      expect(svgCode).toContain('font-family="Verdana"');
      expect(svgCode).toContain("Rectangle");
    });
  });

  describe("Triangle", () => {
    test("shouldcreate an instance of Triangle", () => {
      const triangle = new Triangle(100, "green", "Triangle", "Helvetica");

      expect(triangle.svgWidth).toBe(300);
      expect(triangle.svgHeight).toBe(200);
      expect(triangle.centerX).toBe(150);
      expect(triangle.centerY).toBe(100);
      expect(triangle.points).toBe("...");
      expect(triangle.color).toBe("green");
      expect(triangle.text).toBe("Triangle");
      expect(triangle.fontFamily).toBe("Helvetica");
    });

    test("generateShape should return a valid SVG triangle", () => {
      const triangle = new Triangle(100, "green", "Triangle", "Helvetica");
      const svgCode = triangle.generateShape();

      expect(svgCode).toContain("<polygon");
      expect(svgCode).toContain('points="..."');
      expect(svgCode).toContain('fill="green"');
      expect(svgCode).toContain("<text");
      expect(svgCode).toContain('font-family="Helvetica"');
      expect(svgCode).toContain("Triangle");
    });
  });

  describe("Polygon", () => {
    test("should create an instance of Polygon", () => {
      const polygon = new Polygon(
        "...",
        "yellow",
        "Polygon",
        "Times New Roman"
      );

      expect(polygon.svgWidth).toBe(300);
      expect(polygon.svgHeight).toBe(200);
      expect(polygon.centerX).toBe(150);
      expect(polygon.centerY).toBe(100);
      expect(polygon.points).toBe("...");
      expect(polygon.color).toBe("yellow");
      expect(polygon.text).toBe("Polygon");
      expect(polygon.fontFamily).toBe("Times New Roman");
    });

    test("generateShape should return a valid SVG polygon", () => {
      const polygon = new Polygon(
        "...",
        "yellow",
        "Polygon",
        "Times New Roman"
      );
      const svgCode = polygon.generateShape();

      expect(svgCode).toContain("<polygon");
      expect(svgCode).toContain('points="..."');
      expect(svgCode).toContain('fill="yellow"');
      expect(svgCode).toContain("<text");
      expect(svgCode).toContain('font-family="Times New Roman"');
      expect(svgCode).toContain("Polygon");
    });
  });
});
