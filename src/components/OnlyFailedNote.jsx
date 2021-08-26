// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showFailedOnly: false,
//       studentList: [
//         {
//           note: 18,
//           name: "Young Allen",
//           gender: "female",
//         },
//         {
//           note: 15,
//           name: "Weaver Yates",
//           gender: "male",
//         },
//         {
//           note: 4,
//           name: "Patrica Reilly",
//           gender: "female",
//         },
//         {
//           note: 12,
//           name: "Schroeder Hewitt",
//           gender: "male",
//         },
//         {
//           note: 10,
//           name: "Holmes Kennedy",
//           gender: "male",
//         },
//         {
//           note: 19,
//           name: "Holt Smith",
//           gender: "male",
//         },
//         {
//           note: 9,
//           name: "Reyna Rollins",
//           gender: "female",
//         },
//         {
//           note: 5,
//           name: "Craig Golden",
//           gender: "male",
//         },
//         {
//           note: 4,
//           name: "Bentley Owens",
//           gender: "male",
//         },
//         {
//           note: 16,
//           name: "Mia Hall",
//           gender: "female",
//         },
//       ],
//     };
//     this.handleShowFailedOnlyClick = this.handleShowFailedOnlyClick.bind(this);
//   }

//   handleShowFailedOnlyClick() {
//     this.setState({ showFailedOnly: !this.state.showFailedOnly });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleShowFailedOnlyClick}>
//           Show only failed results: {this.state.showFailedOnly ? "ON" : "OFF"}
//         </button>
//         <h2>Exam results</h2>
//         {this.state.showFailedOnly ? (
//           <ul>
//             {this.state.studentList
//               .filter((student) => {
//                 return student.note <= 10;
//               })
//               .map((student, index) => (
//                 <li key={index}>
//                   Name: {student.name} Note: {student.note}
//                 </li>
//               ))}
//           </ul>
//         ) : (
//           <ul>
//             {this.state.studentList.map((student, index) => (
//               <li key={index}>
//                 Name: {student.name} Note: {student.note}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   }
// }

// export default App;
