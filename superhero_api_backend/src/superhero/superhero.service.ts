//This is the service file for the superhero module. It contains the logic for creating a superhero and getting all superheroes.
import { Injectable } from '@nestjs/common';
import { Superhero, SuperheroDto } from './superhero.interface';

//Injectable decorator is used to define the superhero service.
@Injectable()
export class SuperheroService {
  //This array is used to store the superheroes. 
  //Its private so that it cannot be accessed from outside the service.
  private superheroes: Superhero[] = [];

  //This method is used to create a superhero.
  create(createSuperheroDto: SuperheroDto) {
    this.superheroes.push(createSuperheroDto);
    return createSuperheroDto;
  }

  //This method is used to get all superheroes. 
  //It also sorts the superheroes by humility score.
  getSuperheroes(): Superhero[] {
    return [...this.superheroes].sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
