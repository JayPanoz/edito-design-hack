const fs = require('fs');
const epubZip = require('epub-zip');
 
const edito = epubZip("src/LEditorialNumerique");
const design = epubZip("src/DesignDuLivreNumerique");
const hack = epubZip("src/HackLeLivre");

fs.writeFileSync("dist/LEditorialNumerique.epub", edito);
fs.writeFileSync("dist/DesignDuLivreNumerique.epub", design);
fs.writeFileSync("dist/HackLeLivre.epub", hack);