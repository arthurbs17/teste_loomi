import { S3 } from "aws-sdk";
import fs from "fs";
import mime from "mime";

import { IS3Provider } from "../IS3Providers";

import dotenv from "dotenv";

dotenv.config();

export class S3Provider implements IS3Provider {
  private client: S3;

  constructor() {
    this.client = new S3({ region: process.env.AWS_BUCKET_REGION });
  }

  async save(arquive_name: string): Promise<void> {
    const fileContent = await fs.promises.readFile(`uploads/${arquive_name}`);

    const ContentType = mime.getType(`uploads/${arquive_name}`);

    await this.client
      .putObject({
        Bucket: `${process.env.AWS_BUCKET}/avatar`,
        Key: arquive_name,
        ACL: "public-read",
        Body: fileContent,
        ContentType: ContentType || "",
      })
      .promise();

    await fs.promises.unlink(`uploads/${arquive_name}`);
  }
}
