export interface IRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T | null>;
    create(t: T): Promise<T>;
    update(data: T, id: string): Promise<boolean | string | undefined>;
    delete(id: string): Promise<boolean>;
}