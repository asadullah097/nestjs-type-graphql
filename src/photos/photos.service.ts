import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './entity/photo.entity';

@Injectable()
export class PhotosService {
    constructor(@InjectRepository(Photo) private photoRepository:Repository<Photo>){}
}
