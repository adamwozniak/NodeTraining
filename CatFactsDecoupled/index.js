// todo: implement catFacts = catService.getFacts()
async function main(){
    const catFacts = catService.getFacts();
    catFacts.forEach(fact => console.log(fact));
}