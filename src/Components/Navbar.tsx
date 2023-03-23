﻿import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import { MdSearch } from "react-icons/md";
import Button from "./Button";
type Props = {};

const Navbar = (props: Props) => {
	return (
		<Stack
			position="sticky"
			top="0"
			sx={{ backdropFilter: "blur(5px)", borderRadius: "1rem" }}
			zIndex="7"
			direction={{
				xs: "column",
				sm: "column",
				md: "row",
				lg: "row",
				xl: "row",
			}}
			width="100%"
			pt="0.5rem"
			alignItems="center"
			justifyContent={"space-between"}>
			<Stack
				width={{
					xs: "100%",
					sm: "100%",
					md: "30%",
					lg: "20%",
					xl: "20%",
				}}
				direction={"row"}
				padding="0 0.3rem"
				justifyContent="space-between"
				alignItems="center">
				<Logo />

				<Avatar
					alt="Remy Sharp"
					src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
				/>
			</Stack>
			<Stack
				width={{
					xs: "100%",
					sm: "100%",
					md: "50%",
					lg: "50%",
					xl: "40%",
				}}
				justifyContent="space-between"
				direction={"row"}
				fontSize={{
					xs: "1rem",
					sm: "1rem",
					md: "1.1rem",
					lg: "1.2rem",
					xl: "1.2rem",
				}}
				alignItems="center"
				fontWeight="600">
				<Button url="/">Home</Button>
				<Button url="/music">Music</Button>
				<Button url="/videos">Videos</Button>
				<Button url="/favourites">Favourites</Button>
			</Stack>
		</Stack>
	);
};

export default Navbar;
