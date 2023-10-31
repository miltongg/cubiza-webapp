import {Body, Controller, Delete, Get, HttpException, Param, Patch, Post} from '@nestjs/common';
import {EquipmentsService} from "./equipments.service";
import CreateEquipmentDto from "./dto/create-equipment.dto";
import {Equipment} from "./equipments.entity";
import UpdateEquipmentDto from "./dto/update-equipment.dto";

@Controller('equipments')
export class EquipmentsController {

  constructor(private equipmentsService: EquipmentsService) {}

  @Post()
  createEquipment(@Body() newEquipment: CreateEquipmentDto): Promise<HttpException | Equipment> {
    return this.equipmentsService.createEquipment(newEquipment)
  }


  @Get()
  getEquipments(): Promise<Equipment[]>{
    return this.equipmentsService.getEquipments()
  }


  @Get(':id')
  getEquipment(@Param('id') id: string): Promise<HttpException | Equipment> {
    return this.equipmentsService.getEquipment(id)
  }


  @Patch(':id')
  updateEquipment(@Param('id') id: string, @Body() equipment: UpdateEquipmentDto) {
    return this.equipmentsService.updateEquipment(id, equipment)
  }


  @Delete(':id')
  deleteEquipment(@Param('id') id: string) {
      return this.equipmentsService.deleteEquipment(id)
  }
}
