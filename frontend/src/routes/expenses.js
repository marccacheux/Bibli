import { Button, TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import Box from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

export default function Sign_up() {
    const url = "http://127.0.0.1:5000/user";
    const [user, setUser] = useState({
		username: "",
		password: "",
        address: "",
        email: "",
        name: "",
        lastname: "",
        birthday: "",
        avatar: "",
        admin: false,
	});

    function handle(e) {
		const newUser = { ...user };
		newUser[e.target.id] = e.target.value;
		setUser(newUser);
		//console.log(newUser);
	};

    async function handleSubmit() {
        await axios.post(url, {
            username: user.username,
            password: user.password,
            address: user.address,
            email: user.email,
            name: user.name,
            lastname: user.lastname,
            birthday: user.birthday,
            avatar: user.avatar,
            admin: false  
        })
    };

    return(
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
                        label="Name"
                        id="name"
                        onChange={(e) => handle(e)}
                        value={user.name}
                        type="name"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ marginTop: "1rem", width: "300px" }}
                        label="Lastname"
                        id="lastname"
                        onChange={(e) => handle(e)}
                        value={user.lastname}
                        type="lastname"
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
                    <TextField
                        sx={{ marginTop: "1rem", width: "300px" }}
                        label="Address"
                        id="address"
                        onChange={(e) => handle(e)}
                        value={user.address}
                        type="address"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ marginTop: "1rem", width: "300px" }}
                        label="Birthday"
                        id="birthday"
                        onChange={(e) => handle(e)}
                        value={user.birthday}
                        type="birthday"
                        variant="outlined"
                    />
                    <Button
                        onClick={handleSubmit}
                        sx={{
							marginTop: "1rem",
							width: "300px",
							backgroundColor: "#36454F",
							"&:hover": {
								color: "red",
								backgroundColor: "white",
							},
                        }}
                        variant="contained"
                    >
                        Sign up
                    </Button>
                        
                </FormControl>
            </Box>
        </div>
    );
}