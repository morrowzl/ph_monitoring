var url_flat = "ph_flat.json";
var url_date = "ph_date.json";
var sources = {};

function init() {
  d3.json(url_date).then((data) => {
    var sandbox = d3.select(".sandbox");
    var table = sandbox.append("table").attr("class", "phTable");
    var phPlot = d3.select("#phPlot");

    Object.entries(data).map(([key, value]) => {
      var row = table.append("tr");
      fillRow(row, [key, value]);
      if (key == "Date") {
        popDates([key, value]);
      } else {
        popSources([key, value]);
      }
      plotData();      
    });

    function fillRow(row, [key, value]) {
      row.append("td").text(`${key}`);
      
      Object.values(value).map((reading) => {
      row.append("td").text(`${reading}`);
      });
    };

    function popDates([dateKey, dateValue]) {
      return dateObj = new Object(Object.values(dateValue));
    }
    console.log(`here are the dates: ${Object.values(dateObj)}`);
    console.log(`${Object.keys(dateObj)}`);

    function popSources([name, readingsObj]) {
      sources[`${name}`] = Object.values(readingsObj).map((readings) => {
        return readings;
      });
      
      Object.values(sources).map((value) => {
        console.log(value);
        // console.log(`Well: ${key}, Readings: ${Object.values(value)}`);
      });
    }

    function plotData() {

      let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let y_1 = [7.0, 7.5, 7.6, 7.6, 7.2, 7.7, 7.4, 7.2, 6.9, 7.1];
      let y_2 = [9.4, 9.0, 9.3, 9.6, 9.7, 9.6, 9.7, 9.3, 8.8, 9.7];
      let y_3 = [5.0, 5.1, 5.3, 5.2, 5.5, 5.9, 5.8, 5.7, 4.8, 5.5];
      
      var trace1 = {
        x: x,
        y: y_1,
        mode: 'lines+markers',
        type: 'scatter',
        // hovertext: y_1,
        name: "5-foot depth",
        // marker: {
        //   size: myObj.samples.sample_values,
        //   colorscale: "Rainbow",
        //   color: myObj.samples.otu_ids,
        //   line: {
        //     color: "000000",
        //     width: "0.5",
        //   },      
        // },
        // text: myObj.samples.otu_labels,
      };

      var trace2 = {
        x: x,
        y: y_2,
        mode: 'lines+markers',
        type: 'scatter',
        // hovertext: y_2,
        name: "10-foot depth",
      };

      var trace3 = {
        x: x,
        y: y_3,
        mode: 'lines+markers',
        type: 'scatter',
        // hovertext: y_3,
        name: "15-foot depth",
      };

      var data = [trace1, trace2, trace3];

      var layout = {
        title: {
          text: "Field-measured pH",
        },
        showlegend: true,
        legend: {
          bgcolor: "#adff2f",
        },

      };

      Plotly.newPlot("phPlot", data, layout);
    }
  });
}

init();












// function init () {

//   d3.json(url_date).then((date_data) => {
//     console.log(data_date);
//     var sandbox = d3.select(".sandbox");
//     // sandbox.selectAll("table").remove();
//     sandbox.append("table").attr("class", "phTable");
//     sandbox.append("thead");
//     sandbox.append("tbody");
//     var theadrow = d3.select("thead").append("tr");
//     var tbody = d3.select("tbody");
    
//     Object.keys(data_date).map((key) => {
//       theadrow.append("th").text(key);
//     });

//     Object.values(data_date).map((valObj) => {
//       var row = tbody.append("tr");

//       Object.values(valObj).map((dataObj) => {
//         row.append("td").text(dataObj);
//       });
//     });
//   });
// }

    // Object.entries(data_date).forEach((entry) => {
    //   var row = d3.select(".phTable").append("tr");
      
    //   Object.entries(entry).forEach(([key, value]) => {
    //     var cell = row.append("td");
    //     cell.text(value);
    //   });

    //   Object.entries(entry).map(kvpair => {
    //     var cell2 = row.append("td");
    //     cell2.text(Object.values(kvpair));
    //   });
    
    // });



/*
var data_url = "./static/data/ph_data.json";

function init () {
  d3.json(data_url).then((response) => {
    console.log(response);
    var wellsArr = Object.keys(response);
    wellsArr.map(well => {
        d3.select("#well-selector").append("option").text(`${well}`)
      });
  });
}

function wellSelected(value) { 
  alert(value);
  updateVisuals(value);
}

function updateVisuals(value) {

  var source = value;

  d3.json(data_url).then((response) => {

    console.log(Object.values(response[source]));

    // scatterplot /////////////////////////////////////////////
    var trace1 = {
      type: "scatter",
      mode: "lines",
      // name: something pointing to current data via var "source",
      // x: [dates],
      x: [1,2,3,4,5,6],
      // y: [pH readings],
      y: [1,3,5,7,11,13],
      line: {
        color: "#000000",
        width: 1
      },
      marker: {
        color: "#adff2f",
        size: 10,
        line: {
          color: "000000",
          width: 0.5
        }
      }
    };
    var data = [trace1];
    var layout = {
      title: "pH of GW in MW-## at 5 feet below TOC",
      xaxis: {
        // range: [startDate, endDate],
        // OR autorange: true,
        title: "date",
        type: "date"
      },
      yaxis: {
        type: "linear"
      },
      // legend: ,
    };
    Plotly.newPlot("scatter-plot-div", data, layout);

    // table /////////////////////////////////////////////////////

    // ********************var source = value = type-id-detail from dropdown selector, passed to updateVisuals********************
    // "#table-div"

    d3.select("#table-head").removeAll("tr")
    //select table head div
    //clear all table head rows

    //select table body div
    //clear all table body rows

    //add row of source type-id-detail to thead

    //add rows of data to tbody

  // close d3 .then((response) => {
  });
// close function updateVisuals(value) {  
}

function buildPlot() {
    /* data route */

/*

  var url = "/api/pals";
  d3.json(url).then(function(response) {

    console.log(response);

    var data = response;

    var layout = {
      scope: "usa",
      title: "Pet Pals",
      showlegend: false,
      height: 600,
            // width: 980,
      geo: {
        scope: "usa",
        projection: {
          type: "albers usa"
        },
        showland: true,
        landcolor: "rgb(217, 217, 217)",
        subunitwidth: 1,
        countrywidth: 1,
        subunitcolor: "rgb(255,255,255)",
        countrycolor: "rgb(255,255,255)"
      }
    };

    Plotly.newPlot("plot", data, layout);
  });
}

init();
buildPlot();*/