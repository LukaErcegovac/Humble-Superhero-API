// This is the controller file for the superhero module. It contains the logic for creating a superhero and getting all superheroes.
import { Controller, Post, Body, Get } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { SuperheroDto } from './superhero.interface';

//This decorator defines the superhero controller. 
//The path 'superhero' is the base path for all the routes defined in this controller.
@Controller('superhero')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}
  //This route is used to create a superhero.
  @Post()
  create(@Body() createSuperheroDto: SuperheroDto) {
    return this.superheroService.create(createSuperheroDto);
  }
  //This route is used to get all superheroes.
  @Get()
  getSuperheroes() {
    return this.superheroService.getSuperheroes();
  }
}
