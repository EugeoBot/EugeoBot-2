"use strict";
const { NlpManager } = require("node-nlp");
const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

const manager = new NlpManager({
  languages: ["en"],
  forceNER: true,
});
(async () => {
  manager.addCorpus("corpus.json");
  let availableDoctors = await db.doctor.findMany();
  availableDoctors.forEach((doctor) => {
    return manager.addNamedEntityText(
      "doctors",
      doctor.name,
      ["en"],
      [doctor.name]
    );
  });
  await manager.train();
  manager.save();
})();

module.exports = { manager };
