import { IApiService } from "../core/service.interface";
import axios from "axios";

export class ListService implements IApiService {
    async listAll(): Promise<any> {
        const list = await axios.get('http://141.94.247.187:3000/api/v1/list')
        return list.data
    }

    async login(name: string, code: string): Promise<any> {
        const list = await axios.get('http://141.94.247.187:3000/api/v1/list')
        const match = list.data.filter((user: any) => user.name == name && user.code == code)
        if (match.length == 0) throw new Error
        return match[0]
    }
}