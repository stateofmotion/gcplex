import { Storage } from '@google-cloud/storage';
import { CloudStorageBucket } from './bucket';

/**
 * Utility for working with various aspects of
 * Google Cloud Storage
 */
export class CloudStorage {
  public bucket: CloudStorageBucket;

  constructor(public client: Storage) {
    this.bucket = new CloudStorageBucket(client);
  }
}