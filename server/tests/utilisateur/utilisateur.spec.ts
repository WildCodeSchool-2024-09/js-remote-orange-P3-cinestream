import supertest from "supertest";
import databaseClient from "../../database/client";
import type { Result, Rows } from "../../database/client";
import app from "../../src/app";

afterEach(() => {
  jest.restoreAllMocks();
});

describe("POST /api/connection", () => {
  const testCases = [
    {
      description: "devrait dire que l'email n'est pas valide (manque @)",
      values: {
        nom: "teste",
        email: "testegmail.com",
        motDePasse: "12345678",
        motDePasse2: "12345678",
      },
      expected: { message: "l'email n'est pas valide" },
    },
    {
      description:
        "devrait dire que l'email n'est pas valide (domaine incomplet)",
      values: {
        nom: "teste",
        email: "teste@gmail.c",
        motDePasse: "12345678",
        motDePasse2: "12345678",
      },
      expected: { message: "l'email n'est pas valide" },
    },
    {
      description: "devrait dire que l'email n'est pas valide (trop long)",
      values: {
        nom: "teste",
        email:
          "testelongemailtestelongemailtestelongemailtestelongemailtestelongemailtestelongemailtestelongemailtestelongemailtestelongemailtestelongemail@gmail.com",
        motDePasse: "12345678",
        motDePasse2: "12345678",
      },
      expected: { message: "l'email n'est pas valide" },
    },
    {
      description: "mot de passe ne doit pas contenir d'espace",
      values: {
        nom: "teste",
        email: "teste@gmail.com",
        motDePasse: "12345 678",
        motDePasse2: "12345 678",
      },
      expected: { message: "le mot de passe ne doit pas contenir d'espace" },
    },
    {
      description: "mot de passe trop long",
      values: {
        nom: "teste",
        email: "teste@gmail.com",
        motDePasse: "1".repeat(51),
        motDePasse2: "1".repeat(51),
      },
      expected: {
        message: "le mot de passe doit avoir entre 8 et 50 caractères",
      },
    },
    {
      description: "compte introuvable",
      values: {
        nom: "teste",
        email: "compteinexistant@gmail.com",
        motDePasse: "12345678",
        motDePasse2: "12345678",
      },
      expected: { message: "Compte introuvable" },
    },
    {
      description: "mot de passe incorrect",
      values: {
        nom: "teste",
        email: "teste@gmail.com",
        motDePasse: "wrongpassword",
        motDePasse2: "wrongpassword",
      },
      expected: { message: "Mot de passe incorrect" },
    },
    {
      description: "connexion réussie",
      values: {
        nom: "teste",
        email: "teste@gmail.com",
        motDePasse: "12345678",
        motDePasse2: "12345678",
      },
      expected: { message: "Connexion réussie" },
    },
  ];

  for (const { description, values, expected } of testCases) {
    it(description, async () => {
      // Mock rows returned from the database
      const rows = [{}] as Rows;

      // Mock the implementation of the database query method
      jest
        .spyOn(databaseClient, "query")
        .mockImplementation(async () => [rows, []]);

      const response = await supertest(app)
        .post("/api/connection")
        .send(values)
        .set("Content-Type", "application/json");

      expect(response.body).toEqual(expected);
    });
  }
});
