import { IService } from "../core/service.interface";
import { SpotDTO } from "../dto/spot.dto"

export class SpotService implements IService<SpotDTO> {

    private spotRepository: IService<SpotDTO>;

    constructor(_spotRepository: IService<SpotDTO>) {
        this.spotRepository = _spotRepository;
    }

    async findAll(): Promise<SpotDTO[]> {
        return this.spotRepository.findAll()
    }

    async findById(id: string): Promise<SpotDTO | null> {
        return this.spotRepository.findById(id)
    }

    async create(data: SpotDTO): Promise<SpotDTO | undefined> {
        return this.spotRepository.create(data)
    }

    async update(data: SpotDTO, id: string): Promise<string | boolean | undefined> {
        return this.spotRepository.update(data, id)
    }

    async delete(id: string): Promise<boolean | string> {
        return this.spotRepository.delete(id)
    }
}