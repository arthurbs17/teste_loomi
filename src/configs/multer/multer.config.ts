import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export default {
  upload() {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", "..", "uploads/"),
        filename: (req, file, cb) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const newFile = file.originalname.replace(/ /g, "_");
          const fileName = `${fileHash}-${newFile}`;

          return cb(null, fileName);
        },
      }),
    };
  },
};
