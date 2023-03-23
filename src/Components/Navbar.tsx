import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import { MdSearch } from "react-icons/md";
import Button from "./Button";
type Props = {};

const Navbar = (props: Props) => {
	return (
		<Stack
			padding={{
				xs: "0 0.1rem",
				sm: "0 0.5rem",
				md: "0 1rem",
				lg: "0 5rem",
				xl: "0 15rem",
			}}
      position="absolute"
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
					xl: "50%",
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
				padding="0.5rem"
				fontWeight="600">
				<Button>Home</Button>
				<Button>Music</Button>
				<Button>Videos</Button>
				<Button>Favourites</Button>
			</Stack>
		</Stack>
	);
};

export default Navbar;
