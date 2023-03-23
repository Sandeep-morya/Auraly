import { Avatar, Stack, TextField, Typography, useTheme } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import { MdSearch } from "react-icons/md";
import Button from "./Button";
type Props = {};

const Navbar = (props: Props) => {
	const theme = useTheme();
	return (
		<Stack
			direction={{
				xs: "column",
				sm: "column",
				md: "row",
				lg: "row",
				xl: "row",
			}}
			pt="0.5rem"
			alignItems="center"
			justifyContent={"space-between"}>
			<Stack
				width={{
					xs: "100%",
					sm: "100%",
					md: "30%",
					lg: "30%",
					xl: "30%",
				}}
				direction={"row"}
				padding="0 0.3rem"
				justifyContent="space-between"
				alignItems="center">
				<Logo />

				<Avatar
					alt="Remy Sharp"
					src="https://res.cloudinary.com/due9pi68z/image/upload/v1679150892/tgxg96102yhtqqgyi3us.png"
				/>
			</Stack>
			<Stack
				width={{
					xs: "100%",
					sm: "100%",
					md: "30%",
					lg: "30%",
					xl: "30%",
				}}
				justifyContent="space-between"
				direction={"row"}
				fontSize="1.2rem"
				alignItems="center"
				padding="0.5rem"
				fontWeight="600">
				<Button>Home</Button>
				<Button>Music</Button>
				<Button>Videos</Button>
				<Button>Movies</Button>
			</Stack>
		</Stack>
	);
};

export default Navbar;

/* <Stack

			justifyContent="space-between"
			alignItems="center"
			p={"1rem"}>

		</Stack> */
