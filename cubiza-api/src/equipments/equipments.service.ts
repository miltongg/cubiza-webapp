import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Equipment} from "./equipments.entity";
import {Repository} from "typeorm";
import CreateEquipmentDto from "./dto/create-equipment.dto";
import UpdateEquipmentDto from "./dto/update-equipment.dto";

@Injectable()
export class EquipmentsService {

  constructor(
    @InjectRepository(Equipment) private equipmentRepository: Repository<Equipment>,
  ) {
  }

  // Create equipment
  createEquipment(equipment: CreateEquipmentDto): Promise<Equipment> {

    const newEquipment: Equipment = this.equipmentRepository.create(equipment);
    return this.equipmentRepository.save(newEquipment)

  }

  // Get equipments
  getEquipments(): Promise<Equipment[]> {
    return this.equipmentRepository.find()
  }


  // Get equipment
  async getEquipment(id: string): Promise<HttpException | Equipment> {
    const equipmentFound: Equipment = await this.equipmentRepository.findOne({
      where: {id}
    })

    if (!equipmentFound) {
      return new HttpException('Equipment not found', HttpStatus.NOT_FOUND)
    }

    return equipmentFound

  }


  // Update equipment
  async updateEquipment(id: string, equipment: UpdateEquipmentDto) {

    const equipmentFound: Equipment = await this.equipmentRepository.findOne({
      where: {id}
    })

    if (!equipmentFound) {
      return new HttpException('Equipment not founf', HttpStatus.NOT_FOUND)
    }

    const updateEquipment = { ...equipmentFound, ...equipment }

    return this.equipmentRepository.save(updateEquipment)

  }


  // Delete equipment
  async deleteEquipment(id: string) {
    const result = await this.equipmentRepository.delete({id})

    if (result.affected === 0) {
      return new HttpException('Equipment not found', HttpStatus.NOT_FOUND)
    }

    return result
  }

}
