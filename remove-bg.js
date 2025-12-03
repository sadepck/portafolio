import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'logo', 'Gemini_Generated_Image_vwgk9vvwgk9vvwgk.png');
const outputPath = path.join(__dirname, 'logo', 'logo-transparent.png');

async function removeCheckerboardBackground() {
  try {
    const image = sharp(inputPath);
    const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
    
    const pixels = new Uint8Array(data);
    const width = info.width;
    const height = info.height;
    
    // Detectar TODOS los grises del fondo (checkerboard y grises oscuros)
    const isBackgroundColor = (r, g, b) => {
      // Verificar si es un gris (R ≈ G ≈ B)
      const isGray = Math.abs(r - g) <= 10 && Math.abs(g - b) <= 10 && Math.abs(r - b) <= 10;
      if (!isGray) return false;
      
      const avg = (r + g + b) / 3;
      // Capturar grises desde oscuros (~50) hasta claros (~220)
      // Esto incluye el checkerboard y cualquier gris de fondo
      return avg >= 45 && avg <= 220;
    };
    
    const isCheckerboardColor = isBackgroundColor;
    
    // Primera pasada: detectar y marcar píxeles del checkerboard
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      
      if (isCheckerboardColor(r, g, b)) {
        pixels[i + 3] = 0; // Hacer transparente
      }
    }
    
    // Segunda pasada: limpiar píxeles grises aislados en los bordes
    const getPixelIndex = (x, y) => (y * width + x) * 4;
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = getPixelIndex(x, y);
        const r = pixels[idx];
        const g = pixels[idx + 1];
        const b = pixels[idx + 2];
        const a = pixels[idx + 3];
        
        // Si el píxel es gris y está cerca de píxeles transparentes
        const isGrayish = Math.abs(r - g) <= 15 && Math.abs(g - b) <= 15;
        const avg = (r + g + b) / 3;
        
        if (isGrayish && avg > 130 && avg < 220 && a > 0) {
          // Contar vecinos transparentes
          let transparentNeighbors = 0;
          const neighbors = [
            [-1, -1], [0, -1], [1, -1],
            [-1, 0],          [1, 0],
            [-1, 1],  [0, 1],  [1, 1]
          ];
          
          for (const [dx, dy] of neighbors) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              const nIdx = getPixelIndex(nx, ny);
              if (pixels[nIdx + 3] === 0) {
                transparentNeighbors++;
              }
            }
          }
          
          // Si más de la mitad de los vecinos son transparentes, hacer transparente
          if (transparentNeighbors >= 4) {
            pixels[idx + 3] = 0;
          }
        }
      }
    }
    
    await sharp(Buffer.from(pixels), {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile(outputPath);
    
    console.log('Logo con fondo transparente creado en:', outputPath);
  } catch (error) {
    console.error('Error:', error);
  }
}

removeCheckerboardBackground();
