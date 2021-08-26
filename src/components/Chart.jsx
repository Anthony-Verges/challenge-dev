// import React from "react";
// import { Chart } from "react-charts";

// function MyChart() {
//   const data = React.useMemo(
//     () => [
//       {
//         label: "Series 1",
//         data: [
//           [1, 1],
//           [1, 2],
//           [2, 4],
//           [3, 2],
//           [4, 7],
//         ],
//       },
//       {
//         label: "Series 2",
//         data: [
//           [0, 3],
//           [1, 1],
//           [2, 5],
//           [3, 6],
//           [4, 4],
//         ],
//       },
//     ],
//     []
//   );

//   const axes = React.useMemo(
//     () => [
//       { primary: true, type: "linear", position: "bottom" },
//       { type: "linear", position: "left" },
//     ],
//     []
//   );

//   return (
//     // A react-chart hyper-responsively and continuously fills the available
//     // space of its parent element automatically
//     <div
//       style={{
//         width: "65rem",
//         height: "30rem",
//         marginTop: "10rem",
//       }}
//     >
//       {/* <h2>Cours du bitcoins depuis Janvier 2021</h2> */}
//       <Chart data={data} axes={axes} />
//     </div>
//   );
// }
// export default MyChart;
