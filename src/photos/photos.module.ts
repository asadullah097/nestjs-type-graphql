import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entity/photo.entity';
import { PhotosService } from './photos.service';

@Module({
  imports:[TypeOrmModule.forFeature([Photo])],
  providers: [PhotosService]
})
export class PhotosModule {}
