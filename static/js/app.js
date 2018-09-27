var tableData = data;
var tbody = d3.select("tbody");
var dateValue = d3.select("#datetime");
var cityValue = d3.select("#city");
var stateValue = d3.select("#state");

var searchBtn = d3.select("#filter-btn");
var clearBtn = d3.select("#clear-btn");
var showBtn = d3.select("#show-btn");

searchBtn.on("click", function(){
    d3.event.preventDefault();

    if (dateValue.property("value") === "" && cityValue.property("value") != "" && stateValue.property("value") != "") {
    var tableData = data;
    var clearTD = d3.selectAll("td").remove();

    var tableData = tableData.filter(data => ((data.city === cityValue.property("value").toLowerCase()) && (data.state === stateValue.property("value").toLowerCase())));

    tableData.forEach(function(ufos){
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
    });
    });
    }

    else if (dateValue.property("value") != "" && cityValue.property("value") === "" && stateValue.property("value") != "") {
    var tableData = data;
    var clearTD = d3.selectAll("td").remove();
    var tableData = tableData.filter(data => ((data.datetime === dateValue.property("value").toLowerCase()) && (data.state === stateValue.property("value").toLowerCase())));

    tableData.forEach(function(ufos){
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
    });
    });
    }

    else if (dateValue.property("value") != "" && cityValue.property("value") === "" && stateValue.property("value") === "") {
    var tableData = data;
    var clearTD = d3.selectAll("td").remove();
    var tableData = tableData.filter(data => (data.datetime === dateValue.property("value").toLowerCase()));

    tableData.forEach(function(ufos){
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
    });
    });
    }

    else if (dateValue.property("value") === "" && cityValue.property("value") != "" && stateValue.property("value") === "") {
    var tableData = data;
    var clearTD = d3.selectAll("td").remove();
    var tableData = tableData.filter(data => (data.city === cityValue.property("value").toLowerCase()));

    tableData.forEach(function(ufos){
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
    });
    });
    }

    else if (dateValue.property("value") === "" && cityValue.property("value") === "" && stateValue.property("value") != "") {
    var tableData = data;
    var clearTD = d3.selectAll("td").remove();
    var tableData = tableData.filter(data => (data.state === stateValue.property("value").toLowerCase()));

    tableData.forEach(function(ufos){
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
    });
    });
    }

    else if (dateValue.property("value") != "" && cityValue.property("value") != "" && stateValue.property("value") === "") {
    var tableData = data;
    var clearTD = d3.selectAll("td").remove();
    var tableData = tableData.filter(data => ((data.datetime === dateValue.property("value").toLowerCase()) && (data.city === cityValue.property("value").toLowerCase())));

    tableData.forEach(function(ufos){
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
    });
    });
    }

    else {
    var tableData = data;
    var clearTD = d3.selectAll("td").remove();
    var tableData = tableData.filter(data => (data.datetime === dateValue.property("value")) && (data.state === stateValue.property("value").toLowerCase()));

    tableData.forEach(function(ufos){
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
    });
});}
});

clearBtn.on("click", function(){
d3.event.preventDefault();
var clearTD = d3.selectAll("td").remove();
d3.select("#datetime").node().value = "" ;
d3.select("#city").node().value = "" ;
d3.select("#state").node().value = "" ;
});

showBtn.on("click", function(){
d3.event.preventDefault();
var clearTD = d3.selectAll("td").remove();
tableData.forEach(function(ufos){
var row = tbody.append("tr");
Object.entries(ufos).forEach(function([key, value]) {
var cell = tbody.append("td");
cell.text(value);
d3.select("#datetime").node().value = "" ;
d3.select("#city").node().value = "" ;
d3.select("#state").node().value = "" ;
});
});
});