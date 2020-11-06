// import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
// import axios from "axios";
// class Faq extends Component {
//   state = {
//     userList: [],
//     loading: false,
//   };
//   handleGetData = () => {
//     this.setState({ loading: true });
//     fetch("https://reqres.in/api/users")
//       .then((res) => res.json())
//       .then((res) => {
//         setTimeout(() => {
//           this.setState({ loading: false, userList: res.data });
//         }, 2000);
//       });
//     console.log(this.state.userList);
//   };

//   // handleGetData = () => {
//   //   this.setState({ loading: true });
//   //   axios.get("https://reqres.in/api/users").then((res) => {
//   //     this.setState({ loading: false, userList: res.data });
//   //     console.log(res.data);
//   //     return false;
//   //   });
//   // };

//   render() {
//     const { userList, loading } = this.state;
//     return (
//       <div className="container App">
//         <h4 className="d-inline-block">Test</h4>
//         <button
//           className="btn btn-info float-right"
//           onClick={() => this.handleGetData()}
//           disabled={loading}
//         >
//           {loading ? "Loading..." : "Get User List"}
//         </button>
//         <div className="clearfix"></div>

//         <table className="table mt-3">
//           <thead Name="thead-dark">
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Avatar</th>
//           </thead>
//           <tbody>
//             {userList.map((x) => (
//               <tr>
//                 <td>{x.first_name}</td>
//                 <td>{x.last_name}</td>
//                 <td>{x.email}</td>
//                 <td>
//                   <img src={x.avatar} width="50" height="50" />
//                 </td>
//               </tr>
//             ))}
//             {userList.length == 0 && (
//               <tr>
//                 <td className="text-center" colSpan="4">
//                   <b>No data found to display.</b>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default Faq;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Faq() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
