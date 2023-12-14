const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: './public/itemImages',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  
const upload = multer({ storage: storage });
const uploadMiddleware = async(req, res, next) => {
    try{
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        await upload.single('image')
        res.send('Image is uploaded successfully');
    }catch (error) {
        res.status(500).send(error.message);
    }
    next();
  };
  
  module.exports = { uploadMiddleware};