// variableDeclarations -------------------------------------------

var tableData = data;
var filteredData = tableData;

var allDataBtn = d3.select("#allDataBtn");
var filterDateBtn = d3.select("#filterDateBtn");
var filterCityBtn = d3.select("#filterCityBtn");
var filterStateBtn = d3.select("#filterStateBtn");
var filterCountryBtn = d3.select("#filterCountryBtn");
var filterShapeBtn = d3.select("#filterShapeBtn");

var tableHead = d3.select("#tableHead");

var tableBody = d3.select("#tableBody");

//scriptCode-----------------------------------------------------------
//
// Filtering by each parameter
//
filterDateBtn.on("click", function() {

  d3.select("#tableHead").selectAll("tr").remove();
  d3.select("#tableBody").selectAll("tr").remove();

  theadrow = tableHead.append("tr");
  theadrow.append("th").text("Date");
  theadrow.append("th").text("City");
  theadrow.append("th").text("State");
  theadrow.append("th").text("Country");
  theadrow.append("th").text("Shape");
  theadrow.append("th").text("Duration");
  theadrow.append("th").text("Comments");

  var inputDate = d3.select("#date");
  var dateQuery = inputDate.property("value");
  function matchDate(foobar) {
    return foobar.datetime == dateQuery;
  }
  var filteredOnDate = filteredData.filter(matchDate);

  filteredOnDate.forEach((FD) => {
    var row = tableBody.append("tr");
    Object.entries(FD).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  filteredData = filteredOnDate;
});

filterCityBtn.on("click", function() {

  d3.select("#tableHead").selectAll("tr").remove();
  d3.select("#tableBody").selectAll("tr").remove();

  theadrow = tableHead.append("tr");
  theadrow.append("th").text("Date");
  theadrow.append("th").text("City");
  theadrow.append("th").text("State");
  theadrow.append("th").text("Country");
  theadrow.append("th").text("Shape");
  theadrow.append("th").text("Duration");
  theadrow.append("th").text("Comments");

  var inputCity = d3.select("#city");
  var cityQuery = inputCity.property("value");
  function matchCity(foobar) {
    return foobar.city == cityQuery;
  }
  var filteredOnCity = filteredData.filter(matchCity);

  filteredOnCity.forEach((FD) => {
    var row = tableBody.append("tr");
    Object.entries(FD).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  filteredData = filteredOnCity;
});

filterStateBtn.on("click", function() {

  d3.select("#tableHead").selectAll("tr").remove();
  d3.select("#tableBody").selectAll("tr").remove();

  theadrow = tableHead.append("tr");
  theadrow.append("th").text("Date");
  theadrow.append("th").text("City");
  theadrow.append("th").text("State");
  theadrow.append("th").text("Country");
  theadrow.append("th").text("Shape");
  theadrow.append("th").text("Duration");
  theadrow.append("th").text("Comments");
  
  var inputState = d3.select("#state");
  var stateQuery = inputState.property("value");
  function matchState(foobar) {
    return foobar.state == stateQuery;
  }
  var filteredOnState = filteredData.filter(matchState);

  filteredOnState.forEach((FD) => {
    var row = tableBody.append("tr");
    Object.entries(FD).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  filteredData = filteredOnState;
});

filterCountryBtn.on("click", function() {

  d3.select("#tableHead").selectAll("tr").remove();
  d3.select("#tableBody").selectAll("tr").remove();

  theadrow = tableHead.append("tr");
  theadrow.append("th").text("Date");
  theadrow.append("th").text("City");
  theadrow.append("th").text("State");
  theadrow.append("th").text("Country");
  theadrow.append("th").text("Shape");
  theadrow.append("th").text("Duration");
  theadrow.append("th").text("Comments");
  var inputCountry = d3.select("#country");
  var countryQuery = inputCountry.property("value");
  function matchCountry(foobar) {
    return foobar.country == countryQuery;
  }
  var filteredOnCountry = filteredData.filter(matchCountry);

  filteredOnCountry.forEach((FD) => {
    var row = tableBody.append("tr");
    Object.entries(FD).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  filteredData = filteredOnCouuntry;
});

filterShapeBtn.on("click", function() {

  d3.select("#tableHead").selectAll("tr").remove();
  d3.select("#tableBody").selectAll("tr").remove();

  theadrow = tableHead.append("tr");
  theadrow.append("th").text("Date");
  theadrow.append("th").text("City");
  theadrow.append("th").text("State");
  theadrow.append("th").text("Country");
  theadrow.append("th").text("Shape");
  theadrow.append("th").text("Duration");
  theadrow.append("th").text("Comments");

  var inputShape = d3.select("#shape");
  var shapeQuery = inputShape.property("value");
  function matchShape(foobar) {
    return foobar.shape == shapeQuery;
  }
  var filteredOnShape = filteredData.filter(matchShape);

  filteredOnShape.forEach((FD) => {
    var row = tableBody.append("tr");
    Object.entries(FD).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  filteredData = filteredOnShape;
});
//
// Displaying all data / unfiltering
//
allDataBtn.on("click", function() {

  d3.select("#tableHead").selectAll("tr").remove();
  d3.select("#tableBody").selectAll("tr").remove();

  theadrow = tableHead.append("tr");
  theadrow.append("th").text("Date");
  theadrow.append("th").text("City");
  theadrow.append("th").text("State");
  theadrow.append("th").text("Country");
  theadrow.append("th").text("Shape");
  theadrow.append("th").text("Duration");
  theadrow.append("th").text("Comments");

  tableData.forEach((entry) => {
    var row = tableBody.append("tr");
    Object.entries(entry).forEach(([key, value]) => { 
      var cell = row.append("td");
      cell.text(value);
    });
  });
  filteredData = tableData;
});