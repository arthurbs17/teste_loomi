export interface IS3Provider {
  save(arquive_name: string): Promise<void>;
}
