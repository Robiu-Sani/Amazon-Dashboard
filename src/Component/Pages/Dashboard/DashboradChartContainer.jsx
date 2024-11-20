import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip
);

const DashboradChartContainer = () => {
  // Chart data with dummy data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Performance",
        data: [500, 700, 1200, 1000, 1400, 1700], // Dummy data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `৳ ${tooltipItem.raw}`; // Show the data value with currency
          },
        },
      },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div className="w-full my-3">
      <div className="flex flex-wrap gap-4">
        {/* Cards */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Team Commission", color: "bg-blue-500" },
            { title: "Defaulter Balance", color: "bg-blue-400" },
            { title: "Sells Profit", color: "bg-blue-300" },
            { title: "Layer Base Com.", color: "bg-yellow-500" },
            { title: "Future Fund", color: "bg-red-400" },
            { title: "Incentive", color: "bg-red-300" },
          ].map((card, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md ${card.color} text-white`}
            >
              <div className="p-3 border-b border-[#dfdfdf4b]">
                <h4 className="text-lg font-semibold">{card.title}</h4>
              </div>
              <div className="w-full p-4 flex flex-col justify-start items-start">
                <p className="text-2xl font-bold mt-2">
                  ৳ {data.datasets[0].data[index]}
                </p>
                <div className="w-full">
                  <Line
                    data={data}
                    options={chartOptions}
                    width={100}
                    height={50}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboradChartContainer;
