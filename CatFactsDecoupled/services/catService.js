function _dupadupa(paramter) {
  console.log(paramter);
}

async function getFacts() {
  const apiResponse = await fetch("https://cat-fact.herokuapp.com/facts/");
  const catFactsPayload = await apiResponse.json();
  return catFactsPayload.map((catFact) => {
    return catFact.text;
  });
}

module.exports = {
  getFacts
};
