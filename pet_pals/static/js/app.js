var data_url = "./static/data/ph_data.json";

function init () {

  d3.json(data_url).then((response) => {

    var wellsArr = Object.keys(response);

    wellsArr.forEach(well => {
      d3.select("#wellSelector").append("option").text(`${well}`);
    });

  });
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
