const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');


fs.readdirSync(target)
    .forEach((image) => {
      if (image.includes('-small') || image.includes('-large')) {
        console.log('Skipping image', image);
        return;
      }
      if (fs.existsSync(`${target}/${image.split('.')
          .slice(0, -1)
          .join('.')}-small.jpg`) || fs.existsSync(`${target}/${image.split('.')
          .slice(0, -1)
          .join('.')}-large.jpg`)) {
        console.log('Skipping image', image);
        return;
      }
      sharp(`${target}/${image}`)
          .resize(800)
          .toFile(
              path.resolve(__dirname, `src/public/images/heros/${image.split('.')
                  .slice(0, -1)
                  .join('.')}-large.jpg`),
          );

      sharp(`${target}/${image}`)
          .resize(480)
          .toFile(
              path.resolve(__dirname, `src/public/images/heros/${image.split('.')
                  .slice(0, -1)
                  .join('.')}-small.jpg`),
          );

      sharp(`${target}/${image}`)
          .resize(800)
          .webp()
          .toFile(
              path.resolve(__dirname, `src/public/images/heros/${image.split('.')
                  .slice(0, -1)
                  .join('.')}-large.webp`),
          );

      sharp(`${target}/${image}`)
          .resize(480)
          .webp()
          .toFile(
              path.resolve(__dirname, `src/public/images/heros/${image.split('.')
                  .slice(0, -1)
                  .join('.')}-small.webp`),
          );
      console.log('Image', image, 'processed');
    });
