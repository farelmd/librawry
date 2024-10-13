import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let jwtToken: string; // Simpan JWT token untuk digunakan di test berikutnya

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close(); // Tutup aplikasi setelah semua test selesai
  });

  it('/auth/login (POST) - should login successfully', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'admin', password: 'admin' })
      .expect(200);

    expect(response.body).toHaveProperty('access_token');
    jwtToken = response.body.access_token; // Simpan JWT token untuk digunakan dalam test berikutnya
  });

  it('/auth/profile (POST) - should get profile with valid token', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/profile')
      .set('Authorization', `Bearer ${jwtToken}`) // Gunakan token JWT yang didapat dari login admin
      .expect(200);

    expect(response.body).toHaveProperty('username', 'admin');
  });

  it('/auth/profile (POST) - should return 401 without token', async () => {
    await request(app.getHttpServer())
      .post('/auth/profile')
      .expect(401);
  });

  it('/auth/login (POST) - should login successfully', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'user', password: 'user' })
      .expect(200);

    expect(response.body).toHaveProperty('access_token');
    jwtToken = response.body.access_token; // Simpan JWT token untuk digunakan dalam test berikutnya
  });

  it('/books (POST) - should return 403 with Unauthorized user', async () => {
    await request(app.getHttpServer())
      .post('/genres')
      .set('Authorization', `Bearer ${jwtToken}`) // Gunakan token JWT yang didapat dari login user
      .expect(403); 
  });
});
