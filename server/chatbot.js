const { NlpManager } = require("node-nlp");
const { User } = require("./user");

const manager = new NlpManager({ languages: ["en"] });
// 1 - Train the IA
async function trainChatBotIA() {
  return new Promise(async (resolve, reject) => {
     // Train also the NLG
    manager.addCorpus("corpus.json");
    await manager.train();
    manager.save()
    console.log("AI has been trainded");
    resolve(true);
  });
}
async function generateResponseAI(qsm) {
  // Train and save the mode
  return new Promise(async (resolve, reject) => {
    response = await manager.process("en", qsm);
    response = await new User(manager).onIntent(response);
    resolve(response);
  });
}

module.exports = {
  trainChatBotIA,
  generateResponseAI,
};
