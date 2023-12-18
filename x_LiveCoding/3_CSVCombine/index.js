const SimpleCSVParser = require("./services/SimpleCSVParser");
const fs = require("fs");
const xlsx = require("json-as-xlsx");

const carsCSV = fs.readFileSync("./input/cars.csv").toString();
const customersCSV = fs.readFileSync("./input/customers.csv").toString();
const officesCSV = fs.readFileSync("./input/offices.csv").toString();

const customers = SimpleCSVParser.stringToJS(customersCSV);
const cars = SimpleCSVParser.stringToJS(carsCSV);
const offcies = SimpleCSVParser.stringToJS(officesCSV);

const data = [
  {
    sheet: "Cars",
    columns: [
      { label: "Make", value: "make" }, // Top level data
      { label: "Model", value: "model" }, // Top level data
      { label: "Year", value: "model_year" }, // Top level data
    ],
    content: cars,
  },
  {
    sheet: "Offices",
    columns: [
      { label: "City", value: "city" }, // Top level data
      { label: "Street", value: "street" }, // Top level data
      { label: "Zip code", value: "zip" }, // Top level data
    ],
    content: offcies,
  },
  {
    sheet: "Customers",
    columns: [
      { label: "First Name", value: "first_name" }, // Top level data
      { label: "Last Name", value: "last_name" }, // Top level data
      { label: "Email", value: "email" }, // Top level data
    ],
    content: customers,
  }
];

const settings = {
  writeOptions: {
    type: "buffer",
    bookType: 'xlsx'
  }
};


const buffer = xlsx(data, settings);
fs.writeFileSync("./out.xlsx", buffer);
