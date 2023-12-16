// // Object creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";
// company.hobby = "Being a complete CUNT";

// console.log(company);
// console.log("Company CEO name is: " 
//   + company.ceo.firstName);
// console.log("Company CEO's favorite color is: "
//   + company.ceo.favColor);
// console.log("Company CEO's favorite hobby is: "
//   + company.hobby);    

// console.log(company["name"] + "'s CEO likes " + company["hobby"]);
// console.log(company["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = 110;

// console.log("Stock price is: " + 
//   company[stockPropName]);


// Better way: object literal
var facebook = {
  name: "FACEBOOK",
  ceo: {
    firstName: "MARK",
    favColor: "BLUE"
  },
  "Stock of Company": 110
};

console.log(facebook.ceo.firstName);







