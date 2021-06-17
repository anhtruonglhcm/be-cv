export interface IBaseRepository<T> {
  createData(data: any): Promise<T>;
  updateData(id: number, data: any): Promise<T>;
}
