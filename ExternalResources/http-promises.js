// promise:

console.log("=========== cat facts promises ==========")
const catFactsPromise = fetch('https://cat-fact.herokuapp.com/facts/');
catFactsPromise.then((data) => {
    const catFactsJsonPromise = data.json();
    catFactsJsonPromise.then((data) => {
        data.forEach(fact => console.log(fact.text));
    })
});