import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Post()
    create() {
        return 'create songs';
    }

    @Get()
    findAll() {
        return 'Get all songs';
    }

    @Get(":id")
    findOne() {
        return 'Get song by id';
    }

    @Put(':id')
    update() {
        return 'Update song by id';
    }

    @Delete('id')
    delete() {
        return 'Delete song by id';
    }

}
