//This file contains the interface and DTO for the superhero entity.
import { IsInt, IsString, Min, Max } from "class-validator";
import { Type } from 'class-transformer';

//This interface defines the superhero entity.
export interface Superhero {
  humilityScore: number;
  superpower: string;
  name: string;
}

//This DTO is used to validate the request body when creating a superhero.
export class SuperheroDto {
  @IsString()
  name: string;

  @IsString()
  superpower: string;

  @IsInt()
  @Min(1)
  @Max(10)
  @Type(() => Number)
  humilityScore: number;
}
