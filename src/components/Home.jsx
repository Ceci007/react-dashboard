import { useContext } from "react";
import { ThemeCotext } from "../context/ThemeContextProvider";
import { FaChevronDown, FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register Chart.js components for all chart types
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Register ArcElement for doughnut chart
);


const Home = () => {
  const { theme } = useContext(ThemeCotext);

  // Chart data configuration
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // X-axis labels
    datasets: [
      {
        label: 'Solid Line', // Label for the first line
        data: [10, 15, 8, 22, 18, 25, 12], // Sample data points for the first line
        borderColor: `${theme === "light" ? "rgb(0, 0, 0)" : "#9F9FF8"}`, // Line color
        backgroundColor: `${theme === "light" ? "rgb(0, 0, 0)" : "#9F9FF8"}`, // Area under the line color
        tension: 0.4, // Smooth the line curve
        pointBackgroundColor: `${theme === "light" ? "rgb(0, 0, 0)" : "#9F9FF8"}`, // Color of data points
        pointBorderColor: `${theme === "light" ? "rgba(0, 0, 0, 0.9)" : "#9F9FF8"}`, // Border color of data points
        pointHoverBackgroundColor: `${theme === "light" ? "rgba(0, 0, 0, 0.9)" : '#7878d1'}`, // Hover background color of data points
        pointHoverBorderColor: `${theme === "light" ? "rgb(0, 0, 0)" : "#7878d1"}`, // Hover border color of data points
        pointRadius: 5, // Radius of data points
        pointHoverRadius: 7, // Radius of data points on hover
      },
      {
        label: 'Dashed Line', // Label for the second line
        data: [5, 12, 18, 10, 25, 15, 28], // Sample data points for the second line
        borderColor: `${theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"}`, // Line color
        backgroundColor: `${theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"}`, // Area under the line color
        tension: 0.4, // Smooth the line curve
        borderDash: [5, 5], // Make the line dashed (5px dash, 5px space)
        pointBackgroundColor: `${theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"}`, // Color of data points
        pointBorderColor: "rgba(0, 0, 0, 0.2)", // Border color of data points
        pointHoverBackgroundColor: `${theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"}`, // Hover background color of data points
        pointHoverBorderColor: `${theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"}`, // Hover border color of data points
        pointRadius: 5, // Radius of data points
        pointHoverRadius: 7, // Radius of data points on hover
      },
    ],
  };

  const barChartData = {
    labels: ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Other'], // X-axis labels
    datasets: [
      {
        label: 'Users', // Label for the bars
        data: [15, 22, 18, 28, 25, 10], // Sample data points for the bars
        backgroundColor: [ // Colors for each bar
          "rgba(159, 159, 248, 0.8)",
          "rgba(150, 226, 214, 0.8)",
          "rgba(0, 0, 0, 0.8)",
          "rgba(146, 191, 255, 0.8)",
          "rgba(174, 199, 237, 0.8)",
          "rgba(148, 233, 184, 0.8)",
        ],
        borderColor: [ // Border colors for each bar
          '#9F9FF8',
          '#96E2D6',
          '#000',
          '#92BFFF',
          '#AEC7ED',
          '#94E9B8',
        ],
        borderWidth: 1, // Border width for bars
        borderRadius: 8,
      },
    ],
  };

  const doughnutChartData = {
    labels: ['United States', 'Canada', 'Mexico', 'Other'],
    datasets: [
      {
        data: [52.1, 22.8, 13.9, 11.2], // Percentage points
        backgroundColor: [
          'rgba(0, 0, 0, 1)', // United States
          'rgba(146, 191, 255, 1)', // Canada
          'rgba(148, 233, 184, 1)', // Mexico
          'rgba(174, 199, 237, 1)', // Other
        ],
        borderColor: [
          theme === "light" ? "#e5e7eb" : "#364153",
          theme === "light" ? "#e5e7eb" : "#364153",
          theme === "light" ? "#e5e7eb" : "#364153",
          theme === "light" ? "#e5e7eb" : "#364153",
        ],
        borderWidth: 5,
        borderRadius: 8
      },
    ],
  };

  const lineChartOptions = {
    responsive: true, // Make the chart responsive to container size
    plugins: {
      legend: {
        display: false, // Not display legends
        position: 'top', // Position the legend at the top
        labels: {
          font: {
            size: 14, // Set font size for legend labels
            family: 'Sans-serif', // Use Sans-serif font
          },
          color: theme === "light" ? "#101828" : "#e5e7eb",
          align: "start"
        },
      },
      title: {
        display: false, // Not display the chart title
        text: 'Total Users', // Set the chart title text
        font: {
          size: 14, // Set font size for the title
          family: 'Sans-serif',
        },
        color: theme === "light" ? "#101828" : "#e5e7eb", // Set title color
        align: 'start',
      },
    },
    scales: {
      y: {
        min: 0, // Y-axis starts from 0
        max: 30, // Y-axis goes up to 30
        ticks: {
          stepSize: 10, // Y-axis steps by 10
          font: {
            size: 12, // Set font size for Y-axis ticks
            family: 'Sans-serif',
          },
          color: theme === "light" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)", // Set Y-axis tick color
          callback: function(value) {
            return value + 'K'; // Add 'K' suffix to Y-axis labels
          },
        },
        grid: {
          color: theme === "light" ? "rgba(0, 0, 0, 0.1)": "rgba(255, 255, 255, 0.1)", // Light grid lines
          display: false,
        },
      },
      x: {
        ticks: {
          font: {
            size: 12, // Set font size for X-axis ticks
            family: 'Sans-serif', // Use Inter font
          },
          color: theme === "light" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)", // Set X-axis tick color
        },
        grid: {
          color: theme === "light" ? "rgba(0, 0, 0, 0.1)": "rgba(255, 255, 255, 0.1)", // Light grid lines
          display: false,
        },
      },
    },
  };

  const barChartOptions = {
    responsive: true, // Make the chart responsive to container size
    plugins: {
      legend: {
        display: false, // Display the legend for bar chart
        position: 'top', // Position the legend at the top
        labels: {
          font: {
            size: 14, // Set font size for legend labels
            family: 'Sans-serif', // Use Sans-serif font
          },
        },
      },
      title: {
        display: false, // Display the chart title
        text: 'Traffic by device', // Set the chart title text
        font: {
          size: 20, // Set font size for the title
          family: 'Sans-serif',
        },
        color: '#333', // Set title color
        align: 'start', // Align the title to the center
      },
    },
    scales: {
      y: {
        min: 0, // Y-axis starts from 0
        max: 30, // Y-axis goes up to 30
        ticks: {
          stepSize: 10, // Y-axis steps by 10
          font: {
            size: 12, // Set font size for Y-axis ticks
            family: 'Sans-serif',
          },
          color: theme === "light" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)", // Set Y-axis tick color
          callback: function(value) {
            return value + 'K'; // Add 'K' suffix to Y-axis labels
          }
        },
        grid: {
          color: theme === "light" ? "rgba(0, 0, 0, 0.1)": "rgba(255, 255, 255, 0.1)", // Light grid lines
          display: false,
        },
      },
      x: {
        ticks: {
          font: {
            size: 12, // Set font size for X-axis ticks
            family: 'Sans-serif', // Use Inter font
          },
          color: theme === "light" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)", // Set X-axis tick color
        },
        grid: {
          display: false, // Hide X-axis grid lines for cleaner bar chart
        },
      },
    },
  };

  // --- Doughnut Chart Options ---
  const doughnutChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'right', // Position legend to the right for doughnut chart
        labels: {
          font: {
            size: 14,
            family: 'Sans-serif',
          },
        },
      },
      title: {
        display: false,
        text: 'Traffic by location',
        font: {
          size: 20,
          family: 'Sans-serif',
        },
        color: '#333',
        align: 'center',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed + '%'; // Display percentage in tooltip
            }
            return label;
          }
        }
      }
    },
  };

  return (
    <div className="w-full h-auto px-7 py-3 pt-[50px] leght:bg-white dark:bg-gray-800 mt-[60px] flex items-center">
     <div className="flex flex-col w-full xl:w-[calc(100vw - 530px)] xl:ml-[230px] xl:mr-[300px]">
      <div className="flex justify-between">
        <div className="flex items-center">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200">Overview</h3>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-sm text-gray-900 dark:text-gray-200">Today</h3>
        <FaChevronDown size={12} color={theme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"} />
      </div>
      </div>
      <div className="grid grid-flow-col mt-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full xl:w-[calc(100vw - 530px)]">
       <div className="col-start-1 col-end-2 md:col-start-1 md:col-end-2 xl:col-start-1 xl:col-end-2 bg-[#EDEEFC] p-4 flex flex-col rounded-2xl">
        <h3 className="mb-2 text-sm">Views</h3>
        <div className="flex gap-3">
          <h4 className="text-2xl font-bold">7,265</h4>
          <p className="flex items-center gap-2 text-sm">+11.01% <FaArrowTrendUp size={12} /></p>
        </div>
       </div>
       <div className="col-start-1 col-end-2 md:col-start-2 md:col-end-3 xl:col-start-2 xl:col-end-3 bg-[#E6F1FD] p-4 flex flex-col rounded-2xl">
        <h3 className="mb-2 text-sm">Visits</h3>
        <div className="flex gap-3">
          <h4 className="text-2xl font-bold">3,671</h4>
          <p className="flex items-center gap-2 text-sm">-0.03% <FaArrowTrendDown size={12} /></p>
        </div>
      </div>
      <div className="col-start-1 col-end-2 md:col-start-1 md:col-end-2 xl:col-start-3 xl:col-end-4 bg-[#EDEEFC] p-4 flex flex-col rounded-2xl">
        <h3 className="mb-2 text-sm">New Users</h3>
        <div className="flex gap-3">
          <h4 className="text-2xl font-bold">156</h4>
          <p className="flex items-center gap-2 text-sm">+15.03% <FaArrowTrendUp size={12} /></p>
        </div>  
      </div>
      <div className="col-start-1 col-end-2 md:col-start-2 md:col-end-3 xl:col-start-4 xl:col-end-5 bg-[#E6F1FD] p-4 flex flex-col rounded-2xl">
        <h3 className="mb-2 text-sm">Active Users</h3>
        <div className="flex gap-3">
          <h4 className="text-2xl font-bold">2,318</h4>
          <p className="flex items-center gap-2 text-sm">+6.08% <FaArrowTrendUp size={12} /></p>
        </div>
      </div> 
      </div>

      <div className="grid grid-cols-1 gap-4 mt-6 lg:grid-cols-4">
        <div className="col-start-1 col-end-2 bg-gray-200 p-7 sm:col-start-1 sm:col-end-4 dark:bg-gray-700 rounded-2xl"> 
          <div className="flex flex-col gap-5 mb-3 md:flex-row">
            <div className="flex items-center gap-5">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200">Total Users</h3>
            <h4 className="text-sm text-gray-500">Total Projects</h4>
            <h4 className="text-sm text-gray-500">Operating Status</h4>
            <div className="w-[1px] h-[20px] hidden md:block bg-gray-500"></div>
            </div>
            <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className={"w-[10px] h-[10px] bg-black dark:bg-[#9F9FF8] rounded-full"} />
              <h3 className="text-sm text-gray-900 dark:text-gray-200">This year</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className={"w-[10px] h-[10px] rounded-full bg-black/30 dark:bg-white/30"} />
              <h3 className="text-sm text-gray-900 dark:text-gray-200">Last year</h3> 
            </div>
            </div>
          </div>
          <Line options={lineChartOptions} data={lineChartData} />
        </div>
        <div className="col-start-1 col-end-2 bg-gray-200 sm:col-start-4 sm:col-end-5 dark:bg-gray-700 rounded-2xl p-7">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200">Traffic by website</h3>
          <div className="mt-8"> 
            <div className="flex items-center mt-6 gap-7">
              <h3 className="text-sm text-gray-900 dark:text-gray-200">Google</h3>
              <div className="flex gap-1">
                <span className="w-[10px] h-[3px] rounded-md bg-black/90 dark:bg-white/90" />
                <span className="w-[10px] h-[3px] rounded-md bg-black/40 dark:bg-white/40" /> 
                <span className="w-[10px] h-[3px] rounded-md bg-black/20 dark:bg-white/20" />
              </div>
            </div>
            <div className="flex items-center mt-6 gap-7">
              <h3 className="text-sm text-gray-900 dark:text-gray-200">Youtube</h3>
              <div className="flex gap-1">
                <span className="w-[22px] h-[3px] bg-black/90 dark:bg-white/90 rounded-md" />
                <span className="w-[22px] h-[3px] bg-black/40 dark:bg-white/40 rounded-md" />
                <span className="w-[22px] h-[3px] bg-black/20 dark:bg-white/20 rounded-md" />
              </div>
            </div>
            <div className="flex items-center mt-6 gap-7">
              <h3 className="text-sm text-gray-900 dark:text-gray-200">Instagram</h3>
              <div className="flex gap-1">
                <span className="w-[14px] h-[3px] bg-black/90 dark:bg-white/90 rounded-md" />
                <span className="w-[14px] h-[3px] bg-black/40 dark:bg-white/40 rounded-md" />
                <span className="w-[14px] h-[3px] bg-black/20 dark:bg-white/20 rounded-md" />
              </div>
            </div>
            <div className="flex items-center mt-6 gap-7">
              <h3 className="text-sm text-gray-900 dark:text-gray-200">Pinterest</h3>
              <div className="flex gap-1">
                <span className="w-[26px] h-[3px] bg-black/90 dark:bg-white/90 rounded-md" />
                <span className="w-[26px] h-[3px] bg-black/40 dark:bg-white/40 rounded-md" />
                <span className="w-[26px] h-[3px] bg-black/20 dark:bg-white/20 rounded-md" />
              </div>
            </div>
            <div className="flex items-center mt-6 gap-7">
              <h3 className="text-sm text-gray-900 dark:text-gray-200">Facebook</h3>
              <div className="flex gap-1">
                <span className="w-[6px] h-[3px] bg-black/90 dark:bg-white/90 rounded-md" />
                <span className="w-[6px] h-[3px] bg-black/40 dark:bg-white/40 rounded-md" />
                <span className="w-[6px] h-[3px] bg-black/20 dark:bg-white/20 rounded-md" />
              </div>
            </div>
            <div className="flex items-center mt-6 gap-7">
              <h3 className="text-sm text-gray-900 dark:text-gray-200">Twiter</h3>
              <div className="flex gap-1">
                <span className="w-[18px] h-[3px] bg-black/90 dark:bg-white/90 rounded-md" />
                <span className="w-[18px] h-[3px] bg-black/40 dark:bg-white/40 rounded-md" />
                <span className="w-[18px] h-[3px] bg-black/20 dark:bg-white/20 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
        <div className="items-center col-start-1 col-end-2 bg-gray-200 dark:bg-gray-700 p-7 rounded-2xl">
        <h3 className="mb-8 text-sm font-semibold text-gray-900 dark:text-gray-200">Traffic by device</h3>
        <Bar options={barChartOptions} data={barChartData} />
        </div>
        <div className="items-center col-start-1 col-end-2 bg-gray-200 dark:bg-gray-700 lg:col-start-2 lg:col-end-3 p-7 rounded-2xl">
        <h3 className="mb-8 text-sm font-semibold text-gray-900 dark:text-gray-200">Traffic by location</h3>
        <div className="grid grid-cols-2"> 
        <div className="col-start-1 col-end-2">
          <Doughnut options={doughnutChartOptions} data={doughnutChartData} />
        </div>
        <div className="col-start-2 col-end-3 ml-6">
          <div className="flex items-center justify-between w-full py-2">
            <div className="flex items-center gap-1">
              <span className="bg-black rounded-full size-3"/>
              <h3 className="text-sm text-gray-900 dark:text-gray-200">United States</h3>
            </div>
            <h4 className="text-sm text-gray-900 dark:text-gray-200">52.1%</h4>
          </div>

          <div className="flex items-center justify-between w-full py-2">
            <div className="flex items-center gap-1">
              <span className="bg-[#92BFFF] rounded-full size-3"/>
              <h3 className="text-sm text-gray-900 dark:text-gray-200">Canada</h3>
            </div>
            <h4 className="text-sm text-gray-900 dark:text-gray-200">22.8%</h4>
          </div>

          <div className="flex items-center justify-between w-full py-2">
            <div className="flex items-center gap-1">
              <span className="bg-[#94E9B8] rounded-full size-3"/>
              <h3 className="text-sm text-gray-900 dark:text-gray-200">Mexico</h3>
            </div>
            <h4 className="text-sm text-gray-900 dark:text-gray-200">13.9%</h4>
          </div>

          <div className="flex items-center justify-between w-full py-2">
            <div className="flex items-center gap-1">
              <span className="bg-[#AEC7ED] rounded-full size-3"/>
              <h3 className="text-sm text-gray-900 dark:text-gray-200">Other</h3>
            </div>
            <h4 className="text-sm text-gray-900 dark:text-gray-200">11.2%</h4>
          </div>
        </div>
        </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Home;