export interface IService<T> {
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T | null>;
    create(t: T): Promise<T | undefined>;
    update(t: T, id: string): Promise<boolean | string | undefined>;
    delete(id: string): Promise<boolean | string>;
}

export interface IApiService {
    listAll(): Promise<any[]>;
    login(name: string, code: string): Promise<any[]>;
}