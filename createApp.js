import { existsSync, mkdirSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuración para obtener __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createAppStructure(appName, baseDir, isReact) {
  let files;
  // Estructura de archivos
  const toUpperCase = appName[0].toUpperCase() + appName.substring(1);
  if(isReact){
     files = {
      'app.md': `# ${appName}\nDescripción de la aplicación`,
      'script.js': '// Código JavaScript aquí',
      'style.css': '/* Estilos CSS aquí */',
      [`${toUpperCase}.jsx`]: `import '../../App.css'\nimport './style.css'\nexport function ${toUpperCase}() {\nreturn(\n      <>\n\n      </>\n)}`
    };
  }else{
     files = {
      'app.md': `# ${appName}\nDescripción de la aplicación`,
      'script.js': '// Código JavaScript aquí',
      'style.css': '/* Estilos CSS aquí */',
      [`${appName}.html`]: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <link rel="stylesheet" href="style.css">\n  <title>${appName}</title>\n</head>\n\n<body>\n  <h1 style="text-align: center;">${appName}</h1>\n  <a href="/"> Inicio </a>\n  <script src="script.js"></script>\n</body>\n\n </html>`
    };
  }

  // Crea la carpeta
  if (!existsSync(baseDir)) {
    mkdirSync(baseDir, { recursive: true });
    console.log(`Directorio ${appName} creado.`);
  } else {
    console.log(`El directorio ${appName} ya existe.`);
    return;
  }

  // Crea los archivos dentro de la carpeta
  for (const [fileName, content] of Object.entries(files)) {
    const filePath = path.join(baseDir, fileName);
    writeFileSync(filePath, content);
    console.log(`Archivo ${fileName} creado.`);
  }
}

// Usa el nombre de la aplicación que pases como argumento
const argv = process.argv[3];
const appName = process.argv[2];
if (argv === "-r" || argv === '') {
  const baseDir = path.join(__dirname, 'src/pageModuls', appName);
  createAppStructure(appName, baseDir, true);
}else if(argv === "-j"){
  const baseDir = path.join(__dirname, 'public/pageModuls', appName);
  createAppStructure(appName, baseDir, false);
}
else {
  console.log('Por favor, proporciona un nombre para la aplicación.');
}
