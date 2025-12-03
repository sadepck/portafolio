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
    
    // Remover todos los grises del patrón de cuadros
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      
      // Detectar grises del patrón de cuadros (donde R ≈ G ≈ B)
      const isGray = Math.abs(r - g) < 20 && Math.abs(g - b) < 20 && Math.abs(r - b) < 20;
      const avgGray = (r + g + b) / 3;
      
      // Cuadros típicos: gris claro (~204) y gris oscuro (~153) o similares
      const isCheckerboard = isGray && avgGray > 100 && avgGray < 220;
      
      if (isCheckerboard) {
        pixels[i + 3] = 0;
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
