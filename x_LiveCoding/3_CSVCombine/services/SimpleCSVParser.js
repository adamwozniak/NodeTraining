module.exports = {
    stringToJS: (csvString) => {
        const rows = csvString.split('\r\n');
        const header = rows[0];

        const headerKeys = header.split(',');

        const resultObjects = [];

        for (let i = 1; i < rows.length; i++) {
            const currentlyParsedRow = rows[i];
            const parsedElement = {};
            currentlyParsedRow.split(',').forEach((element, index) => {
                parsedElement[headerKeys[index]] = element
            });
            resultObjects.push(parsedElement);
        }

        return resultObjects;
    }
}

