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

// column_data = {entries of sourceName: datesReadingsObj} where
  // property source name like MW-1-5
  // value like {entries of date: phReading} where
    // property = date of reading
    // value = pH reading type=int
      // var eventDatesObj = {};
      // var eventNumber = 1;
      
      // console.log(Object.keys(column_data));
      // // an indexed array of date strings
      // console.log(Object.values(column_data));
      // // an indexed array of {date:phReading} objects
      // console.log(Object.entries(column_data));
      // // an indexed array of indexed arrays like i: [0: "dateString", 1: {date:phReading}]
      // console.log((Object.entries(column_data)[0]));
      // //an indexed array like [0: "dateString", 1: {date:phReading}]
      // var zerothSource = (Object.entries(column_data)[0][1]);
      // // an object of date:phReading pairs
      // console.log(zerothSource);
      // // an object of date:phReading pairs
      // console.log(Object.keys(zerothSource));
      // // an indexed array of dateStrings
      // console.log(Object.values(zerothSource));
      // // an indexed array of phReading numbers
      // Object.keys(zerothSource).map((eventDate) => {
      //   Object.defineProperty(eventDatesObj, eventNumber, {value: eventDate});
      //   return (eventNumber += 1), eventDatesObj;
      // });
      // console.log(Object.keys(eventDatesObj));

/*
      console.log(`1. the zeroth source is >>> ${zerothSource}`);
      console.log(typeof(zerothSource));
      console.log(Object.keys(zerothSource));
      console.log(Object.values(zerothSource));
      
      Object.keys((zerothSource[1])).map((someDate) => {
        console.log(`2. someDate is >>> ${someDate}, event number: ${eventNumber}`)
        Object.defineProperty(sampleDates, (`${eventNumber}`), {value: someDate});
        eventNumber += 1;
        console.log(`3. sampleDates = ${sampleDates}`);
        return sampleDates;
      });

      console.log(`4. sampleDates = ${sampleDates}`);
      console.log(typeof(sampleDates)); 
      console.log(Object.getOwnPropertyNames(sampleDates));
      console.log(Object.values(sampleDates).map((thing) => {
        return thing;
      }));
      console.log(Object.values(sampleDates));

      // Object.values(sampleDates).map((eventDate) => {
      //   console.log(`4. samplesDates >>> ${eventDate}`);
      //   // theadrow.append("th").text(`${eventDate}`);
      // });

      Object.entries(sampleDates).map(([key, value]) => {
        console.log(`event number: ${key}, date: ${value}`);
      });
*/

    // function popDates([dateKey, dateValue]) {
    //   return dateObj = new Object(Object.values(dateValue));
    // }
    // console.log(`here are the dates: ${Object.values(dateObj)}`);

    // function popSources([name, readingsObj]) {

    //   Object.values(readingsObj).map((reading) => {
    //     // console.log(`Source: ${name}, Reading: ${reading}`);
    //   });
    //   // console.log(`Source: ${name}, readings: $`)
      
    //   // sources[`${name}`] = Object.values(readingsObj).map((readings) => {});
      
    //   // Object.values(sources).map((value) => {
    //   //   console.log(value);
    //     // console.log(`Well: ${key}, Readings: ${Object.values(value)}`);
    //   // });
    // }

    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  
    /*
    var keysTwo, sources = primaryProperties(column_data);

    function primaryProperties(column_data) {

      var keys = 0;
      var sources = {};
    
      Object.keys(column_data).map((property) => {
        console.log(property);
        Object.defineProperty(sources, property, {value: property});
        return (keys += 1,  sources);
      });

      console.log(`keys logged inside of primaryProperties: ${keys}`);
      return (keysTwo = keys), sources;
      
    }

    console.log(keysTwo);
    console.log(sources);
    */
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||      