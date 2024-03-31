import PropTypes from "prop-types";
import Chart from "react-apexcharts";

const CurrencyGraph = ({ data }) => {
  const options = {
    xaxis: {
      type: "datetime",
      labels: { style: { colors: "white" } },
      axisBorder: { show: true, color: "white" },
      axisTicks: { show: true, color: "white" },
    },
    yaxis: {
      labels: { style: { colors: "white" } },
      axisBorder: { show: true, color: "white" },
      axisTicks: { show: true, color: "white" },
    },
    tooltip: { x: { format: "dd MMM yyyy" } },
    plotOptions: {
      candlestick: { colors: { upward: "#009e1a", downward: "#cf0101" } },
    },
  };

  const series = [
    {
      data: data,
    },
  ];

  return (
    <Chart options={options} series={series} type="candlestick" height={400} />
  );
};

CurrencyGraph.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CurrencyGraph;
