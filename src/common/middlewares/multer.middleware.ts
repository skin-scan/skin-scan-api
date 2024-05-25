import multer from 'multer';
import { BadRequestException } from '../exceptions';
import { ALLOWED_MIME_TYPES, MAX_FILE_SIZE } from '../constants';

const multerMiddleware = (allowedMimeTypes: string[], maxFileSize: number) =>
  multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: maxFileSize,
    },
    fileFilter: (_req, file, cb) => {
      if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new BadRequestException(`Unsupported ${file.mimetype} file type`));
      }
    },
  });

export const multerImageMiddleware = multerMiddleware(
  ALLOWED_MIME_TYPES,
  MAX_FILE_SIZE,
).single('image');
