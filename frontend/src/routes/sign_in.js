import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import Box from "@mui/material/Button";
import { useState } from "react";

export default function Sign_in() {
  const [user, setUser] = useState({
		username: "",
		password: "",
	});

	function handle(e) {
		const newUser = { ...user };
		newUser[e.target.id] = e.target.value;
		setUser(newUser);
		//console.log(newUser);
	}
    return (
      <div>
        <div>HELLO ! </div>
        <Box
			sx={{
				display: "block",
				background: "linear-gradient(#f1c40f, #e74c3c)",
				margin: "auto",
				marginTop: "5rem",
			}}
		>
			<FormControl
				sx={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<TextField
					sx={{ marginTop: "1rem", width: "300px" }}
					label="Username"
					id="username"
					onChange={(e) => handle(e)}
					value={user.username}
					variant="outlined"
				/>
        		<TextField
					sx={{ marginTop: "1rem", width: "300px" }}
					label="Password"
					id="password"
					onChange={(e) => handle(e)}
					value={user.password}
					type="password"
					variant="outlined"
				/>
        	</FormControl>
        </Box>
      </div>
    );
  }
  