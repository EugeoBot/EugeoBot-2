const { NlpManager } = require("node-nlp");
const { User } = require("./user");

const manager = new NlpManager({ languages: ["en","fr","zh","es"] });
// 1 - Train the IA
async function trainChatBotIA() {
  return new Promise(async (resolve, reject) => {
     // Train also the NLG
    manager.addCorpus("corpus.json");
    manager.addCorpus("corpus-fr.json");
    manager.addCorpus("corpus-zh.json");
    manager.addCorpus("corpus-es.json");
    await manager.train();
    manager.save()
    console.log("AI has been trainded");
    resolve(true);
  });
}
async function generateResponseAI(qsm) {
  // Train and save the mode
  return new Promise(async (resolve, reject) => {
    manager.process("en", qsm).then(resolve);
    manager.process("fr", qsm).then(resolve);
    manager.process("zh", qsm).then(resolve);
    manager.process("es", qsm).then(resolve);
    //response = await new User(manager).onIntent(response);
    //resolve(response);
  });
}

module.exports = {
  trainChatBotIA,
  generateResponseAI,
};
