import { Module } from '@nestjs/common';
import { EquipmentsController } from './equipments.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Equipment} from "./equipments.entity";
import {EquipmentsService} from "./equipments.service";

@Module({
  imports: [TypeOrmModule.forFeature([Equipment])],
  controllers: [EquipmentsController],
  providers: [EquipmentsService],
  exports: [EquipmentsService]
})

export class EquipmentsModule {}