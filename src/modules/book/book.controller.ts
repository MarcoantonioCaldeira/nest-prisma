import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './book.dto';



@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post() 
  async create(@Body() data: BookDTO) {
    return this.bookService.create(data);
  }

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

    // http://localhost:3000/238498239472934
    @Put(':id')
    async update(@Param('id') id: string, @Body() data: BookDTO) {
      return this.bookService.update(id, data);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.bookService.delete(id);
    }
}
