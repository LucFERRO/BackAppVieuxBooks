import { SpotDTO } from "../dto/spot.dto"; 
import { Spot } from "../database/models"; 

export class SpotMapper {
    static mapToDto(spot: SpotDTO | null): SpotDTO {
        if (spot === null) return null as any;
        return {
            _id : spot._id,
            address: spot.address, 
            createdAt: spot.createdAt
        }
    }
}