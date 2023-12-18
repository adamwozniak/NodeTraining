console.log("=========== cat facts async/await ==========")

async function main() {
    try {
        const catFactsData = await fetch('https://cat-fact.herokuapp.com/facts/');
        const catFactsJsonParsed = await catFactsData.json();
        catFactsJsonParsed.forEach((fact)=> {
            console.log(fact.text);
        });
    } catch(error) {
        console.log(error)
    }
}
main();