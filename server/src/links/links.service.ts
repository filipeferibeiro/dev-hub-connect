import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Link } from './entities/link.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(Link)
    private readonly repository: Repository<Link>,
  ) {}

  create(dto: CreateLinkDto) {
    const link = this.repository.create(dto);

    return this.repository.save(link);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateLinkDto) {
    const link = await this.repository.findOneBy({ id });

    if (!link) return null;

    this.repository.merge(link, dto);
    return this.repository.save(link);
  }

  async remove(id: string) {
    const link = await this.repository.findOneBy({ id });

    if (!link) return null;

    return this.repository.remove(link);
  }
}
