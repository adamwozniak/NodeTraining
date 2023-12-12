console.log("=========== cat facts async/await ==========")

async function main() {
    const catFactsData = await fetch('https://cat-fact.herokuapp.com/facts/');
    const catFactsJsonParsed = await catFactsData.json();
    catFactsJsonParsed.forEach((fact)=> {
        console.log(fact.text);
    });
}
main();