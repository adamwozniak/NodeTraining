const catService = require('./services/catService');

async function main(){
    const catFacts = await catService.getFacts();
    catFacts.forEach(fact => console.log(fact));
}

main();