import "./styles.css";
// Import Highcharts
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie.js";
import Exporting from "highcharts/modules/exporting";
import ExportDdata from "highcharts/modules/export-data";
VariablePie(Highcharts);
Exporting(Highcharts);
ExportDdata(Highcharts)
export default function App() {
  let options = {
    title: {
      text: '统计'
    },
    chart: {
      type: "variablepie",
      marginTop: 40,
      renderTo: 'container',
      plotBorderWidth: 1,
      style: {
        fontFamily: "",
        fontSize: '12px',
        fontWeight: 'bold',
        borderWidth: 1,
        plotBorderWidth: 1,

      }
    },
    title: {
      text: "Countries compared by population density and total area."
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Area (square km): <b>{point.y}</b><br/>" +
        "Population density (people per square km): <b>{point.z}</b><br/>"
    },
    series: [
      {
        minPointSize: 10,
        innerSize: "20%",
        zMin: 0,
        name: "countries",
        data: [
          {
            name: "Spain",
            y: 505370,
            z: 92.9
          },
          {
            name: "France",
            y: 551500,
            z: 118.7
          },
          {
            name: "Poland",
            y: 312685,
            z: 124.6
          },
          {
            name: "Czech Republic",
            y: 78867,
            z: 137.5
          },
          {
            name: "Italy",
            y: 301340,
            z: 201.8
          },
          {
            name: "Switzerland",
            y: 41277,
            z: 214.5
          },
          {
            name: "Germany",
            y: 357022,
            z: 235.6
          }
        ]
      }
    ]
  };
  // 

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
