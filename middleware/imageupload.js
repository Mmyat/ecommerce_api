const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: './public/itemImages',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  
const upload = multer({ storage: storage });
const uploadMiddleware = upload.single('image');
// const uploadMiddleware = (req, res, next) => {
//     try{
//         console.log(req.body);
//         if (!req.body) {
//             res.status(400).json({ message: 'No file uploaded' })
//             return;
//         }else{
//             upload.single('image')
//             res.send('Image is uploaded successfully');
//         }
//     }catch (error) {
//         res.status(500).send(error.message);
//     }
//     next();
//   };
  
  module.exports = { uploadMiddleware};