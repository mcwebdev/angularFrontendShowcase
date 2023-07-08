import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
//http
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  providers: [MessageService]
})
export class ChartsComponent implements OnInit {

  @ViewChild('chart', { static: false }) chart: any;
  dataD3: any;
  dataDoughnut: any;
  dataPolar: any;
  dataPie: any;
  dataRadar: any;
  jsonDataArray;
  hobsData;
  hobsLayout;
  parchords;
  key;
  text;
  statData;
  statLayout;
  pl_colorscale;
  axis;
  cityName;
  cityPop;
  cityLat;
  cityLon;
  color;
  citySize;
  hoverText;
  scale;
  mapData;
  mapLayout;
  rand() {
    return Math.random();
  }

  interval = setInterval(() => {
    this.a = this.rand() * 10 - this.rand();
    this.b = this.rand() * 14 - this.rand();
    this.c = this.rand() * 18 - this.rand();
    this.d = this.rand() * 11 - this.rand();

    this.trace1.y.push(this.a);
    this.trace1.y.push(this.b);
    this.trace1.y.push(this.c);
    this.trace1.y.push(this.d);

    this.dataLine.datasets[0].data.push(this.a);
    this.dataLine.datasets[0].data.push(this.b);
    this.dataLine.datasets[0].data.push(this.c);
    this.dataLine.datasets[0].data.push(this.d);

    this.dataLine.datasets[1].data.push(this.a * 93);
    this.dataLine.datasets[1].data.push(this.b * 3);
    this.dataLine.datasets[1].data.push(this.c * 9);
    this.dataLine.datasets[1].data.push(this.d * 6);

    this.trace2.y.push(this.a * 3.14);
    this.trace2.y.push(this.a * 3.14);
    this.trace2.y.push(this.a * 3.14);
    this.trace2.y.push(this.a * 3.14);

    this.trace3.y.push(this.a * 1.14);
    this.trace3.y.push(this.a * 1.11);
    this.trace3.y.push(this.a * 4.44);
    this.trace3.y.push(this.a * 4.11);
    //console.log(this.chart);
    //console.log(this.trace1);
    this.dataPloty = {
      data: [this.trace1, this.trace2, this.trace3],
      layout: { autosize: true, title: 'Simulated async chart using RNG' }
    }

    this.dataLine = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Accuracy',
          data: [this.a, this.b, this.c, this.d, this.a, this.b, this.c],
          fill: false,
          borderColor: 'rgba(0, 80, 207, 0.46)'
        },
        {
          label: 'Loss',
          data: [this.b, this.a, this.d, this.c, this.d, this.a, this.c],
          fill: false,
          borderColor: 'rgba(242, 194, 7, 0.60)'
        }
      ],
    }
  }, 1000);

  erroHandler(error: HttpErrorResponse) {
    console.log('error:', error.message);
    return throwError(error.message || 'server Error');
  }

  constructor(private messageService: MessageService, private http: HttpClient) {

    (<any>window).Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv',  (err, rows) => {

      function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
      }

      this.cityName = unpack(rows, 'name'),
        this.cityPop = unpack(rows, 'pop'),
        this.cityLat = unpack(rows, 'lat'),
        this.cityLon = unpack(rows, 'lon'),
        this.color = [, "rgb(255,65,54)", "rgb(133,20,75)", "rgb(255,133,27)", "lightgrey"],
        this.citySize = [],
        this.hoverText = [],
        this.scale = 50000;

      for (var i = 0; i < this.cityPop.length; i++) {
        var currentSize = this.cityPop[i] / this.scale;
        var currentText = this.cityName[i] + " pop: " + this.cityPop[i];
        this.citySize.push(currentSize);
        this.hoverText.push(currentText);
      }

      this.mapData = [{
        type: 'scattergeo',
        locationmode: 'USA-states',
        lat: this.cityLat,
        lon: this.cityLon,
        hoverinfo: 'text',
        text: this.hoverText,
        marker: {
          size: this.citySize,
          line: {
            color: 'black',
            width: 2
          },
        }
      }];

      this.mapLayout = {
        title: '2014 US City Populations',
        showlegend: false,
        height: 800,
        autosize: true,
        geo: {
          scope: 'usa',
          projection: {
            type: 'albers usa'
          },
          showland: true,
          landcolor: 'rgb(217, 217, 217)',
          subunitwidth: 1,
          countrywidth: 1,
          subunitcolor: 'rgb(255,255,255)',
          countrycolor: 'rgb(255,255,255)'
        },
      };

      //Plotly.newPlot("myDiv", data, layout, { showLink: false });

    });

    (<any>window).Plotly.d3.csv('https://raw.githubusercontent.com/bcdunbar/datasets/master/parcoords_data.csv', (err, rows) => {

      function unpack(rows, key) {
        return rows.map(function (row) {
          return row[key];
        });
      }

      this.parchords = [{
        type: 'parcoords',
        line: {
          showscale: true,
          reversescale: true,
          colorscale: 'Jet',
          cmin: -4000,
          cmax: -100,
          color: unpack(rows, 'colorVal')
        },

        dimensions: [{
          constraintrange: [100000, 150000],
          range: [32000, 227900],
          label: 'Block height',
          values: unpack(rows, 'blockHeight')
        }, {
          range: [0, 700000],
          label: 'Block width',
          values: unpack(rows, 'blockWidth')
        }, {
          label: 'Cylinder material',
          tickvals: [0, 0.5, 1, 2, 3],
          ticktext: ['A', 'AB', 'B', 'Y', 'Z'],
          values: unpack(rows, 'cycMaterial')
        }, {
          label: 'Block material',
          tickvals: [0, 1, 2, 3],
          range: [-1, 4],
          values: unpack(rows, 'blockMaterial')
        }, {
          range: [134, 3154],
          label: 'Total weight',
          visible: true,
          values: unpack(rows, 'totalWeight')
        }, {
          range: [9, 19984],
          label: 'Assembly penalty weight',
          values: unpack(rows, 'assemblyPW')
        }, {
          range: [49000, 568000],
          label: 'Height st width',
          values: unpack(rows, 'HstW')
        }, {
          range: [-28000, 196430],
          label: 'Min height width',
          values: unpack(rows, 'minHW')
        }, {
          range: [98453, 501789],
          label: 'Min width diameter',
          values: unpack(rows, 'minWD')
        }, {
          range: [1417, 107154],
          label: 'RF block',
          values: unpack(rows, 'rfBlock')
        }]
      }];

      //Plotly.newPlot('myDiv', data);

    });




    (<any>window).Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/hobbs-pearson-trials.csv', (err, rows) => {
      function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
      }
      let hobsData = [
        {
          type: "scatterpolargl",
          r: unpack(rows, 'trial_1_r'),
          theta: unpack(rows, 'trial_1_theta'),
          mode: "markers",
          name: "Trial 1",
          marker: {
            color: "rgb(27,158,119)",
            size: 15,
            line: {
              color: "white"
            },
            opacity: 0.7
          },
          cliponaxis: false
        },
        {
          type: "scatterpolargl",
          r: unpack(rows, "trial_2_r"),
          theta: unpack(rows, "trial_2_theta"),
          mode: "markers",
          name: "Trial 2",
          marker: {
            color: "rgb(217,95,2)",
            size: 20,
            line: {
              color: "white"
            },
            "opacity": 0.7
          },
          "cliponaxis": false
        },
        {
          type: "scatterpolargl",
          r: unpack(rows, "trial_3_r"),
          theta: unpack(rows, "trial_3_theta"),
          mode: "markers",
          name: "Trial 3",
          marker: {
            color: "rgb(117,112,179)",
            size: 12,
            line: {
              color: "white"
            },
            opacity: 0.7
          },
          cliponaxis: false
        },
        {
          type: "scatterpolargl",
          r: unpack(rows, "trial_4_r"),
          theta: unpack(rows, "trial_4_theta"),
          mode: "markers",
          name: "Trial 4",
          marker: {
            color: "rgb(231,41,138)",
            size: 22,
            line: {
              color: "white"
            },
            opacity: 0.7
          },
          cliponaxis: false
        },
        {
          type: "scatterpolargl",
          r: unpack(rows, "trial_5_r"),
          theta: unpack(rows, "trial_5_theta"),
          mode: "markers",
          name: "Trial 5",
          marker: {
            color: "rgb(102,166,30)",
            size: 19,
            line: {
              color: "white"
            },
            opacity: 0.7
          },
          cliponaxis: false
        },
        {
          type: "scatterpolargl",
          r: unpack(rows, "trial_6_r"),
          theta: unpack(rows, "trial_6_theta"),
          mode: "markers",
          name: "Trial 6",
          marker: {
            color: "rgb(230,171,2)",
            size: 10,
            line: {
              color: "white"
            },
            opacity: 0.7
          },
          cliponaxis: false
        }
      ]

      let hobsLayout = {
        title: "Hobbs-Pearson Trials",
        font: {
          size: 15
        },
        showlegend: false,
        polar: {
          bgcolor: "rgb(223, 223, 223)",
          angularaxis: {
            tickwidth: 2,
            linewidth: 3,
            layer: "below traces"
          },
          radialaxis: {
            side: "counterclockwise",
            showline: true,
            linewidth: 2,
            tickwidth: 2,
            gridcolor: "white",
            gridwidth: 2
          }
        },
        paper_bgcolor: "rgb(223, 223, 223)",
        autosize: true,
      }
      console.log(hobsData);
      (<any>window).Plotly.newPlot('myDiv', hobsData, hobsLayout);
    })

    //console.log(hobsData);
    console.log((<any>window).Plotly);
    console.log(...this.dates);
    console.log(this.dates);
    this.dataD3 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }

    this.dataDoughnut = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };




    function randomScalingFactor() {
      return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
    }

    function onRefresh(chart) {
      chart.config.data.datasets.forEach(function (dataset) {
        dataset.data.push({
          x: randomScalingFactor(),
          y: Date.now()
        });
      });
    }

    this.dataPolar = {
      datasets: [{
        data: [
          11,
          16,
          7,
          3,
          14
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB"
        ],
        label: 'My dataset'
      }],
      labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Blue"
      ]
    }

    this.dataPie = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };

    this.dataRadar = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    };

  }

  ngOnInit(): void {
  }



  dataPlotPolar = [{
    type: "scatterpolargl",
    r: [1, 2, 3],
    theta: [50, 100, 200],
    marker: { symbol: "square" }
  }, {
    type: "scatterpolargl",
    r: [1, 2, 3],
    theta: [1, 2, 3],
    thetaunit: "radians"
  }, {
    type: "scatterpolargl",
    r: ["a", "b", "c", "b"],
    theta: ["D", "C", "B", "A"],
    subplot: "polar2"
  }, {
    type: "scatterpolargl",
    r: [50, 300, 900],
    theta: [0, 90, 180],
    subplot: "polar3"
  }, {
    type: "scatterpolargl",
    mode: "lines",
    r: [3, 3, 4, 3],
    theta: [0, 45, 90, 270],
    fill: "toself",
    subplot: "polar4"
  }]

  layoutPolar = {
    polar: {
      domain: {
        x: [0, 0.46],
        y: [0.56, 1]
      },
      radialaxis: {
        range: [1, 4]
      },
      angularaxis: {
        thetaunit: "radians"
      }
    },
    polar2: {
      domain: {
        x: [0, 0.46],
        y: [0, 0.42]
      }
    },
    polar3: {
      domain: {
        x: [0.54, 1],
        y: [0.56, 1]
      },
      radialaxis: {
        type: "log",
        tickangle: 45
      },
      sector: [0, 180]
    },
    polar4: {
      domain: {
        x: [0.54, 1],
        y: [0, 0.44]
      },
      radialaxis: {
        visible: false,
        range: [0, 6]
      }
    },
    showlegend: false
  }


    //Plotly.newPlot('myDiv', data, layout);


  




  selectData(event) {
    this.messageService.add({ severity: 'info', summary: 'Data Selected', 'detail': this.dataD3.datasets[event.element._datasetIndex].data[event.element._index] });
  }

  public myData = {
    values: [['Mon', 23], ['Tue', 20], ['Wed', 27], ['Thu', 29], ['Fri', 25], ['Sat', 17], ['Sun', 15]],
  }

  public graph = {
    data: [{ x: [1, 2, 3], y: [2, 5, 3], type: 'bar' }],
    layout: { autosize: true, title: 'A Fancy Plot' },
  };

  labels = this.myData.values.map(x => x[0]);
  dates = this.myData.values.map(x => x[1]);

  weekDays = {
    data: [{ x: [...this.labels], y: [...this.dates], type: 'bar' }],
    layout: { autosize: true, title: 'A Fancy Plot' }
  }

  a = 10;
  b = 12;
  c = 15;
  d = 9;







  public trace1 = {
    y: [this.a, this.b, this.c, this.d],
    mode: 'lines',
    line: { color: 'rgba(176, 42, 42, 0.53)' },
    type: 'line'
  };

  public trace2 = {
    y: [this.a, this.b, this.c, this.d],
    mode: 'lines',
    line: { color: 'rgba(128, 202, 246, 0.63)' },
    type: 'scatter'
  };

  public trace3 = {
    y: [this.a, this.b, this.c, this.d],
    mode: 'lines+markers',
    line: { color: 'rgba(232, 206, 0, 0.23)' },
    type: 'scatter'
  };

  public dataPloty = {
    data: [this.trace1, this.trace2, this.trace3],
    layout: { autosize: true, title: '' }
  }

  public dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First Dataset',
        data: [this.a, this.b, this.c, this.d],
        fill: false,
        borderColor: '#4bc0c0'
      },
      {
        label: 'Second Dataset',
        data: [this.a, this.b, this.c, this.d],
        fill: false,
        borderColor: '#565656'
      }
    ],
  }
  //public graph = {
  //  data: [{ x: [1, 2, 3], y: [2, 5, 3], type: 'bar' }],
  //  layout: { autosize: true, title: 'A Fancy Plot' },
  //};



}
