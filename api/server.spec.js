const request = require("supertest");
const server = require("./server");
const db = require("../database/dbConfig");
const testUser = {
  username: "Bananas",
  password: "testing",
  email: "mail@testmail.com",
  age_verified: true,
  reason_for_use: "medicinal",
  medical_condition: "anxiety",
  desired_effect: "relaxed",
};
const testLogin = { username: "Bananas", password: "testing" };

describe("server.js", () => {
  describe("registering a new user", () => {
    test("that it returns status 201 when a new user is added", async () => {
      await db("users").truncate();
      const res = await request(server)
        .post("/api/auth/register")
        .send(testUser);
      expect(res.status).toBe(201);
    });
    test("that it returns a status of 500 with invalid user data", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({ user: "not", pass: "valid" });
      expect(res.status).toBe(500);
    });
  });
  describe("logging in user", () => {
    test("that it returns a status of 200 with test user login", async () => {
      const res = await request(server).post("/api/auth/login").send(testLogin);
      expect(res.status).toBe(200);
    });
    test("that it returns status of 401 when given invalid user data", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username: "ImaFake", password: "lies" });
      expect(res.status).toBe(401);
    });
  });
});
