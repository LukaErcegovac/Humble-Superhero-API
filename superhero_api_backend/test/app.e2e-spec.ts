// This file is used to write the end to end test cases for the application.
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  //This test case is used to check if the get route returns all superheroes.
  it('should return all superheroes', () => {
    return request(app.getHttpServer())
      .get('/superhero')
      .expect(200)
      .expect([]);
  });

  //This test case is used to check if the post route creates a superhero.
  it('should create a superhero and return sorted by humility score', async () => {
    await request(app.getHttpServer())
      .post('/superhero')
      .send({ name: 'Hero1', superpower: 'Power1', humilityScore: 5 })
      .expect(201)

    await request(app.getHttpServer())
      .post('/superhero')
      .send({ name: 'Hero2', superpower: 'Power2', humilityScore: 8 })
      .expect(201)

    await request(app.getHttpServer())
      .get('/superhero')
      .expect(200)
      .expect([{ name: 'Hero2', superpower: 'Power2', humilityScore: 8 }, { name: 'Hero1', superpower: 'Power1', humilityScore: 5 }]);
  });
});
