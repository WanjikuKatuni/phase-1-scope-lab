// Write your solution in this file!

var customerName = "bob";
const leastFavoriteCustomer = "ann";

function upperCaseCustomerName(){

    // let customer= "bob";

    customerName=customerName.toUpperCase();

    // return customer;
}

upperCaseCustomerName();


console.log(upperCaseCustomerName("bob"));

function setBestCustomer(){
    
    bestCustomer = "not bob"

    return bestCustomer;

}
setBestCustomer();

function overwriteBestCustomer(){
    bestCustomer ="maybe bob";

    return bestCustomer;
}

overwriteBestCustomer();



function changeLeastFavoriteCustomer(){

    leastFavoriteCustomer = "jane";

    return leastFavoriteCustomer;

}

changeLeastFavoriteCustomer();