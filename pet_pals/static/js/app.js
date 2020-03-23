// for examples of d3.json see week 15 day 2 activities 3 and 4
const url_flat = "../static/data/ph_flat.json";
const url_date = "../static/data/ph_date.json";
const url_index = "../static/data/ph_date_index.json";
const url_columns = "../static/data/ph_date_columns.json";
// var sources = {};
var eventDatesObj = {};
var tableCol = d3.select("#table-col");
var plotCol = d3.select("plot-col")
var sandbox = d3.select("#sandbox");
var phPlot = d3.select("#phPlot");
var buttonContainer = d3.select(".button-container");
const column_data = d3.json(url_columns);
const url = url_columns;

function init() {
  createButtonsOne();
}

// use d3 to fetch json, pass to createButtons
function createButtonsOne() {
  d3.json(url).then(data => {
    createButtonsTwo(data)
  });
}

// createButtons by fetching data, 
function createButtonsTwo(data) {
  Object.keys(data).map((key) => {
    appendButton(key);
  });
}

function appendButton(someKey) {
  buttonContainer.
  append("button").
  attr("type", "button").
  attr("class", "point-button").
  attr("value", `${someKey}`).
  attr("onclick", "pointSelected(this.value)").
  text(`${someKey}`);
}

function pointSelected(somePoint) {
  showData(somePoint);
}

function showData(thisPoint) {
  d3.json(url).then((data) => {
    console.log(data[`${thisPoint}`]);
    console.log(`showData() was called for ${thisPoint}`);
  });
}

function dataTable() {
  console.log("dataTable() initiated");
  d3.json(url_columns).then((column_data) => {
    sandbox.selectAll("#phTable").remove();
    var table = sandbox.append("table").attr("class", "table table-striped").attr("id", "phTable");
    var theadrow = table.append("thead").attr("id", "phTableHead").append("tr");
    var tbody = table.append("tbody").attr("id", "phTableBody");
    var eventCount, eventDatesObj = popDates(column_data);
    popTable(column_data);
     
    function popTable(column_data) {
      popDates(column_data);      
      fillHeader(theadrow);
      
      Object.entries(column_data).map(([sourceName, datesReadingsObj]) => {
        // add new row to the table id="#phTable"
        var row = tbody.append("tr");
        // pass the selected row and the entry's key-value pair to display data for each source
        fillRow(row, [sourceName, datesReadingsObj]);
      });
    }

    function fillRow(row, [sourceName, datesReadingsObj]) {
      // add new first cell to the row for source name
      row.append("th").text(`${sourceName}`);
      
      // add new cells to the row for pH readings
      Object.values(datesReadingsObj).map((phReading) => {
        row.append("td").text(`${phReading}`);
      });
    }

    function popDates(column_data) {
      var eventNumber = 1;
      var eventDatesObj = {};
      var zerothSource = (Object.entries(column_data)[0][1]);
      
      Object.keys(zerothSource).map((eventDate) => {
        (eventDatesObj[`${eventNumber}`] = eventDate); 
        (eventNumber += 1);
      });      
      return (eventCount = eventNumber), eventDatesObj;
    }

    function fillHeader(theadrow) {
      
      theadrow.append("th").text("Date: ");
      Object.values(eventDatesObj).map((date) => {
        theadrow.append("th").attr("scope", "cols").attr("colspan", "1").text(`${date}`);
      });
    }
  });
}

function testPlot() {

  let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let y_1 = [7.0, 7.5, 7.6, 7.6, 7.2, 7.7, 7.4, 7.2, 6.9, 7.1];
  let y_2 = [9.4, 9.0, 9.3, 9.6, 9.7, 9.6, 9.7, 9.3, 8.8, 9.7];
  let y_3 = [5.0, 5.1, 5.3, 5.2, 5.5, 5.9, 5.8, 5.7, 4.8, 5.5];
  
  var trace1 = {
    x: x,
    y: y_1,
    mode: 'lines+markers',
    type: 'scatter',
    name: "5-foot depth",
  };

  var trace2 = {
    x: x,
    y: y_2,
    mode: 'lines+markers',
    type: 'scatter',
    name: "10-foot depth",
  };

  var trace3 = {
    x: x,
    y: y_3,
    mode: 'lines+markers',
    type: 'scatter',
    name: "15-foot depth",
  };

  var data = [trace1, trace2, trace3];

  var layout = {
    autosize: true,
    title: {
      text: "Field-measured pH",
    },
    showlegend: true,
    legend: {
      bgcolor: "#adff2f",
    },

  };

  var config = {responsive: true}

  Plotly.newPlot("phPlot", data, layout, config);
}

init();