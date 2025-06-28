import request from "supertest";
import express from "express";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

import app from "../../../../app"; // Import the express app

// in-memory MongoDB server for testing to avoid using a real database
let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);
  app.use(express.json());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("POST /api/v1/users/register", () => {
  it("should create a new user and return 201", async () => {
    const userData = {
      email: "test@example.com",
      firstName: "Test",
      lastName: "User",
      password: "password123",
    };

    const response = await request(app)
      .post("/api/v1/users/register")
      .send(userData);

    // expect the response to have a 201 status code
    expect(response.status).toBe(201);

    // except the returned user object to have and email matching the input
    expect(response.body.email).toBe(userData.email);

    // we should not return the password hash in the response
    expect(response.body.password).toBeUndefined();
  });
});
