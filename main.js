
import express from "express";
import fs from "fs";
import multer from "multer"
import { logger } from "./middleware/logger.js";
import { defaultHandle } from "./utils/handle.js";

import studentRouter from "./routes/students.routes.js";
const app = express();
const PORT = 3002;

app.use(express.json());
//multer storage(search gg)
const storage= multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
  const upload = multer({ storage: storage });
  
  // Định nghĩa API upload hình
  app.post('/upload', upload.single('image'), (req, res) => {
    try {
      const newFile = req.file;
      
      // Kiểm tra xem có file được upload không
      if (!newFile) {
        throw new Error('No file uploaded.');
      }
      
      // Đọc file đã upload dưới dạng base64
      const newFileData = fs.readFileSync(file.path, 'base64');
      
      
      // Xóa file đã upload
      fs.unlinkSync(file.path);
      
      res.status(200).send({ imageBase64: newFileData });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

// //use middleware 
// app.use(logger)


// app.get("/api",(req, res, next) => {
//     res.json("login succes")
// })
// app.use(defaultHandle)
// // app.get("/user",(req, res, next) => {
//     res.json("logger2")
// })
// app.use("/students", studentRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Your app is listening on PORT ${PORT}`);
  }
});
