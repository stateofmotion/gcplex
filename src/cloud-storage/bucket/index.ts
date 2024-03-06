import { Storage } from "@google-cloud/storage";

/**
 * Utility class for working with storage buckets
 */
export class CloudStorageBucket {
  constructor(private client: Storage) {}

  /**
   * Create a GCP storage bucket
   * 
   * @param {string} name 
   * @returns 
   */
  async create(name: string) {
    return await this.client.createBucket(name);
  }
}
