export class SVGShape {
  constructor(svgWidth, svgHeight, centerX, centerY) {
    this.svgWidth = svgWidth;
    this.svgHeight = svgHeight;
    this.centerX = centerX;
    this.centerY = centerY;
  }

  generateSVGElement(shapeContent) {
    return `
      ${shapeContent}
    `;
  }
}

export class Circle extends SVGShape {
  constructor(radius, color, text, fontFamily, svgWidth = 300, svgHeight = 200) {
    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;
    super(svgWidth, svgHeight, centerX, centerY);
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.fontFamily = fontFamily;
  }

  generateShape() {
    return this.generateSVGElement(`
      <circle cx="${this.centerX}" cy="${this.centerY}" r="${this.radius}" fill="${this.color}" />
      <text x="${this.centerX}" y="${this.centerY}" fill="white" text-anchor="middle" font-size="2rem" dominant-baseline="middle" font-family="${this.fontFamily}">${this.text}</text>
    `);
  }
}

export class Rectangle extends SVGShape {
  constructor(
    width,
    height,
    color,
    text,
    fontFamily,
    svgWidth = 300,
    svgHeight = 200
  ) {
    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;
    super(svgWidth, svgHeight, centerX, centerY);
    this.width = width;
    this.height = height;
    this.color = color;
    this.text = text;
    this.fontFamily = fontFamily;
  }

  generateShape() {
    return this.generateSVGElement(
      `<rect x="${this.centerX - this.width / 2}" y="${
        this.centerY - this.height / 2
      }" width="${this.width}" height="${this.height}" fill="${
        this.color
      }" /><text x="${this.centerX}" y="${
        this.centerY
      }" fill="white" text-anchor="middle" font-size="2rem" dominant-baseline="middle" font-family="${
        this.fontFamily
      }">${this.text}</text>`
    );
  }
}

export class Triangle extends SVGShape {
  constructor(sideLength, color, text, fontFamily, svgWidth = 300, svgHeight = 200) {
    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;
    const height = (Math.sqrt(3) / 2) * sideLength;
    const halfSideLength = sideLength / 2;
    const points = `
      ${centerX},${centerY - height / 6}
      ${centerX - halfSideLength},${centerY + (5 * height) / 6}
      ${centerX + halfSideLength},${centerY + (5 * height) / 6}
    `;
    super(svgWidth, svgHeight, centerX, centerY);
    this.points = points;
    this.color = color;
    this.text = text;
    this.fontFamily = fontFamily;
  }

  generateShape() {
    return this.generateSVGElement(`
      <polygon points="${this.points}" fill="${this.color}" />
      <text x="${this.centerX}" y="${this.centerY + height / 3}" fill="white" text-anchor="middle" dominant-baseline="middle" font-size="1rem" font-family="${this.fontFamily}">${this.text}</text>
    `);
  }
}

export class Polygon extends SVGShape {
  constructor(points, color, text, fontFamily, svgWidth = 300, svgHeight = 200) {
    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;
    super(svgWidth, svgHeight, centerX, centerY);
    this.points = points;
    this.color = color;
    this.text = text;
    this.fontFamily = fontFamily;
  }

  generateShape() {
    return this.generateSVGElement(`
      <polygon points="${this.points}" fill="${this.color}" />
      <text x="${this.centerX}" y="${this.centerY}" fill="white" text-anchor="middle" dominant-baseline="middle" font-size="2rem" font-family="${this.fontFamily}">${this.text}</text>
    `);
  }
}
