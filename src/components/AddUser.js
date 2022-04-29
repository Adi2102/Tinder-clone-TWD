// import * as React from "react";
// import Box from "@mui/material/Box";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Button } from "@mui/material";

// export default function ComposedTextField() {
//   const [name, setName] = React.useState("");
//   const [photoUrl, setPhotoUrl] = React.useState("");

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   const handlePhotoUrl = (event) => {
//     setPhotoUrl(event.target.value);
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         "& > :not(style)": { m: 1 },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <FormControl>
//         <InputLabel
//           htmlFor="name"
//           className="name"
//           sx={{
//             display: "grid",
//             direction: "column",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           Name
//         </InputLabel>
//         <OutlinedInput
//           id="name"
//           value={name}
//           onChange={handleChange}
//           label="Name"
//         />
//       </FormControl>

//       <FormControl>
//         <InputLabel htmlFor="PhotoUrl">PhotoURL</InputLabel>
//         <OutlinedInput
//           id="PhotoUrl"
//           value={photoUrl}
//           onChange={handlePhotoUrl}
//           label="PhotoUrl"
//         />
//       </FormControl>
//       <Button variant="contained">Add User</Button>
//       <Button variant="outlined" startIcon={<DeleteIcon />}>
//         Delete
//       </Button>
//     </Box>
//   );
// }

// import React from "react";
// import Button from "@mui/material/Button";
// import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

// export default class SimpleFormExample extends React.Component {
//   state = {
//     formData: {
//       email: "",
//       password: "",
//     },
//     submitted: false,
//   };

//   handleChange = (event) => {
//     const { formData } = this.state;
//     formData[event.target.name] = event.target.value;
//     this.setState({ formData });
//   };

//   handleSubmit = () => {
//     this.setState({ submitted: true }, () => {
//       setTimeout(() => this.setState({ submitted: false }), 5000);
//     });
//   };

//   render() {
//     const { formData, submitted } = this.state;
//     return (
//       <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
//         <h2>Simple form</h2>
//         <TextValidator
//           label="Email"
//           onChange={this.handleChange}
//           name="email"
//           value={formData.email}
//           validators={["required", "isEmail"]}
//           errorMessages={["this field is required", "email is not valid"]}
//         />
//         <br />
//         <TextValidator
//           label="Password"
//           onChange={this.handleChange}
//           name="password"
//           value={formData.password}
//           validators={["required"]}
//           errorMessages={["this field is required"]}
//         />
//         <br />
//         <Button
//           color="primary"
//           variant="contained"
//           type="submit"
//           disabled={submitted}
//         >
//           {(submitted && "Your form is submitted!") || (!submitted && "Submit")}
//         </Button>
//       </ValidatorForm>
//     );
//   }
// }

import React, { useState } from "react";
import "./AddUser.css";

const AddUser = () => {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [newUser, setNewUser] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { name: name, photoUrl: photoUrl };
    setNewUser([...newUser, newEntry]);
    console.log(newUser);
  };

  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <div className="name">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="photoUrl">
          <label htmlFor="photoUrl">Photo URL</label>
          <input
            type="url"
            name="url"
            id="url"
            autoComplete="off"
            placeholder="paste your photo url"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        </div>

        <button className="loginBtn" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
