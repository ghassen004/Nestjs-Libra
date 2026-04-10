import { Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { FavorisService } from "./favoris.services";

@Controller('favoris')
@UseGuards(AuthGuard('jwt'))
export class FavorisController {
  constructor(private favorisService: FavorisService) {}

  @Post(':bookId')
  add(@Param('bookId') bookId: number, @Req() req) {
    return this.favorisService.add(+req.user.userId, +bookId)  // ← userId
  }

  @Delete(':bookId')
  remove(@Param('bookId') bookId: number, @Req() req) {
    return this.favorisService.remove(+req.user.userId, +bookId)  // ← userId
  }

  @Get()
  findAll(@Req() req) {
    return this.favorisService.findByUser(+req.user.userId)  // ← userId
  }
}