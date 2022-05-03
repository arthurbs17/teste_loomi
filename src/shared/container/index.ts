import { container } from "tsyringe";

import { S3Provider } from "../providers/S3Providers/implementions/S3Provider";
import { IS3Provider } from "../providers/S3Providers/IS3Providers";

container.registerSingleton<IS3Provider>("S3Provider", S3Provider);
