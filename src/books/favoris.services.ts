import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favoris } from "./entities/favoris.entity";


@Injectable()
export class FavorisService {
  constructor(
    @InjectRepository(Favoris)
    private favorisRepo: Repository<Favoris>,
  ) {}

  async add(userId: number, bookId: number) {
    const exists = await this.favorisRepo.findOne({
      where: { user: { id: userId }, book: { id: bookId } }
    })
    if (exists) throw new ConflictException('Already in favorites')

    await this.favorisRepo
      .createQueryBuilder()
      .insert()
      .into(Favoris)
      .values({
        user: { id: userId } as any,
        book: { id: bookId } as any
      })
      .execute()

    return { message: 'Added to favorites' }
  }

  async remove(userId: number, bookId: number) {
    await this.favorisRepo.delete({
      user: { id: userId } as any,
      book: { id: bookId } as any
    })
  }

  async findByUser(userId: number) {
    return this.favorisRepo.find({
      where: { user: { id: userId } },
      relations: ['book', 'book.author']
    })
  }
}