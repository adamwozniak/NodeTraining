const SimpleCSVParser = require('./services/SimpleCSVParser');
const fs = require('fs');
const xlsx = require("json-as-xlsx")

const customersCSV = fs.readFileSync('./input/cars.csv').toString();
const customersArr = SimpleCSVParser.stringToJS(customersCSV);

const data = [
    {
        sheet: "Cars",
        columns: [
            { label: "Make", value: "make" }, // Top level data
            { label: "Model", value: "model" }, // Top level data
            { label: "Year", value: "model_year" }, // Top level data
        ],
        content: customersArr,
    }];

const settings = {
    fileName: "assets", // Name of the resulting spreadsheet
}

const buffer = xlsx(data, settings);
fs.writeFileSync('./out.xlsx', buffer);
