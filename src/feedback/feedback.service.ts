/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from './entities/feedback.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedbackService {

  constructor(@InjectRepository(Feedback) private readonly feedbackRepository: Repository<Feedback>) {}

 async create(createFeedbackDto: CreateFeedbackDto) {
    const create = this.feedbackRepository.create(createFeedbackDto);
    return await this.feedbackRepository.save(create);
  }

 async findAll() {
    return await this.feedbackRepository.find();
  }

 async findOne(id: number) {
  return await this.feedbackRepository.findOne({
      where:{
        id
      }
    })
  }

 async update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
  const update =await this.feedbackRepository.findOne({
    where:{
      id
    }
  })
  if(!update){
    throw new NotFoundException()
  }
  Object.assign(update,updateFeedbackDto)
    return await this.feedbackRepository.save(update);
  }

 async remove(id: number) {
    const deleted =await this.feedbackRepository.findOne({
      where:{
        id
      }
    })
    if(!deleted){
      throw new NotFoundException()
    }
    return await this.feedbackRepository.remove(deleted);
  }
}
