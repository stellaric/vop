// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images'); // Répertoire de destination des images
//     },
//     filename: function (req, file, cb) {
//         // Générez un nom de fichier unique pour éviter les conflits
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });

// const upload = multer({ storage: storage });
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Définissez le chemin du dossier public
const publicDir = path.join(__dirname, '../public'); // Remplacez 'public' par le chemin souhaité

// Vérifiez si le dossier public existe, sinon créez-le
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, publicDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage }).single('image');
module.exports = upload
