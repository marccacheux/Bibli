import { Button, TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import Box from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

export default function Sign_up() {
    const url = "http://127.0.0.1:5000/user";
    const [user, setUser] = useState({
		username: "",
        name: "",
        lastname: "",
		password: "",
        email: "",
        address: "",
        birthday: "",
        avatar: "",
        admin: false,
	});

    function handle(e) {
		const newUser = { ...user };
		newUser[e.target.id] = e.target.value;
		setUser(newUser);
		console.log(newUser);
	};

    function handleSubmit() {
        axios.post(url, {
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

    return (
        <div>
            <div>HELLO ! </div>
            <div
                sx={{
                    display: "block",
                    background: "linear-gradient(#f1c40f, #e74c3c)",
                    margin: "auto",
                    marginTop: "5rem",
                }}
            >
                <form method="POST">
                    <input
                        sx={{ marginTop: "1rem", width: "300px" }}
                        label="Username"
                        name="username"
                        id="username"
                        onChange={(e) => handle(e)}
                        value={user.username}
                        variant="outlined"
                    />
                    <input
                        sx={{ marginTop: "1rem", width: "300px" }}
                        label="Name"
                        name="name"
                        id="name"
                        onChange={(e) => handle(e)}
                        value={user.name}
                        type="name"
                        variant="outlined"
                    />
                    <input
                        sx={{ marginTop: "1rem", width: "300px" }}
                        label="Lastname"
                        name="lastname"
                        id="lastname"
                        onChange={(e) => handle(e)}
                        value={user.lastname}
                        type="lastname"
                        variant="outlined"
                    />
                    <input
                        sx={{ marginTop: "1rem", width: "300px" }}
                        label="Password"
                        name="password"
                        id="password"
                        onChange={(e) => handle(e)}
                        value={user.password}
                        type="password"
                        variant="outlined"
                    />
                    <input
                        sx={{ marginTop: "1rem", width: "300px" }}
                        label="Email"
                        name="email"
                        id="email"
                        onChange={(e) => handle(e)}
                        value={user.email}
                        type="email"
                        variant="outlined"
                    />
                    <input
                        sx={{ marginTop: "1rem", width: "300px" }}
                        label="Address"
                        name="address"
                        id="address"
                        onChange={(e) => handle(e)}
                        value={user.address}
                        type="address"
                        variant="outlined"
                    />
                    <input
                        sx={{ marginTop: "1rem", width: "300px" }}
                        label="Birthday"
                        name="birthday"
                        id="birthday"
                        onChange={(e) => handle(e)}
                        value={user.birthday}
                        type="birthday"
                        variant="outlined"
                    />
                    <input
                        sx={{ marginTop: "1rem", width: "300px" }}
                        label="Avatar"
                        name="avatar"
                        id="avatar"
                        onChange={(e) => handle(e)}
                        value={user.avatar}
                        type="avatar"
                        variant="outlined"
                    />
                    <button
                        onClick={handleSubmit}
                        type="button"
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
                    </button>
                        
                </form>
            </div>
        </div>
    );
  }