import { IRepository } from "../core/respository.interface"
import { Spot } from "../database/models"
import { SpotDTO } from "../dto/spot.dto"
import { SpotMapper } from "../mapper/spot.mapper"

export class SpotRepository implements IRepository<SpotDTO> {
    async findById(id: string): Promise<SpotDTO | null> {
        return Spot.findById(id).then((spot: any) => SpotMapper.mapToDto(spot))
    }

    async findAll(): Promise<SpotDTO[]> {
        return Spot.find({}).then((spots: any[]) => spots.map((spot: any) => SpotMapper.mapToDto(spot)))
    }

    async create(data: SpotDTO): Promise<any> {
        const newSpot = new Spot(data)
        await newSpot.save()   
        return newSpot.toJSON()
    }

    async update(data: SpotDTO, id: string): Promise<any | string> {
        return Spot.updateOne({ _id: id }, data)
    }

    async delete(id: string): Promise<any> {
        return Spot.deleteOne({ _id: id })
    }
}