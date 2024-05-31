import { conf } from '../common/conf';
import { Storage } from '@google-cloud/storage';

const storage = new Storage({
  projectId: conf.gcp.projectId,
  keyFilename: conf.gcp.serviceKey,
});

const bucket = storage.bucket(conf.gcp.bucketName);

function getExtension(filename: string) {
  const ext = filename.split('.');
  return `.${ext[ext.length - 1]}`;
}

export const uploadFile = (file: Express.Multer.File, id: string) =>
  new Promise<string>(async (resolve, reject) => {
    const { originalname, buffer } = file;

    const ext = getExtension(originalname);
    const key = `${id}${ext}`;

    const blob = bucket.file(key);
    const blobStream = blob.createWriteStream({
      resumable: false,
    });

    console.info('Uploading file');

    blobStream
      .on('finish', async () => {
        resolve(`https://storage.googleapis.com/${bucket.name}/${key}`);
      })
      .on('error', async (_err: unknown) => {
        reject(`Unable to upload file, something went wrong`);
      })
      .end(buffer, async () => {
        console.info('File uploaded');
      });
  });
