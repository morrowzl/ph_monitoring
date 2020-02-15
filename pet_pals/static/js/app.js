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
buildPlot();
