// Function to generate a circle SVG shape
export function generateCircle(radius, color, text, fontFamily) {
  const svgWidth = 300;
  const svgHeight = 200;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;

  return `
    <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${color}" />
      <text x="${centerX}" y="${centerY}" fill="white" text-anchor="middle" font-size="2rem" dominant-baseline="middle" font-family="${fontFamily}">${text}</text>
    </svg>
  `;
}

// Function to generate a rectangle SVG shape
export function generateRectangle(width, height, color, text, fontFamily) {
  const svgWidth = 300;
  const svgHeight = 200;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;

  return `
    <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect x="${centerX - width / 2}" y="${
    centerY - height / 2
  }" width="${width}" height="${height}" fill="${color}" />
      <text x="${centerX}" y="${centerY}" fill="white" text-anchor="middle" font-size="2rem" dominant-baseline="middle" font-family="${fontFamily}">${text}</text>
    </svg>
  `;
}

// Function to generate a triangle SVG shape
export function generateTriangle(sideLength, color, text, fontFamily) {
  const svgWidth = 300;
  const svgHeight = 200;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const height = (Math.sqrt(3) / 2) * sideLength;
  const halfSideLength = sideLength / 2;
  const points = `
    ${centerX},${centerY - height / 6}
    ${centerX - halfSideLength},${centerY + (5 * height) / 6}
    ${centerX + halfSideLength},${centerY + (5 * height) / 6}
  `;

  return `
    <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${points}" fill="${color}" />
      <text x="${centerX}" y="${
    centerY + height / 3
  }" fill="white" text-anchor="middle" dominant-baseline="middle" font-size="1rem" font-family="${fontFamily}">${text}</text>
    </svg>
  `;
}

// Function to generate a polygon SVG shape
export function generatePolygon(points, color, text, fontFamily) {
  const svgWidth = 300;
  const svgHeight = 200;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;

  return `
    <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${points}" fill="${color}" />
      <text x="${centerX}" y="${centerY}" fill="white" text-anchor="middle" dominant-baseline="middle" font-size="2rem" font-family="${fontFamily}">${text}</text>
    </svg>
  `;
}
