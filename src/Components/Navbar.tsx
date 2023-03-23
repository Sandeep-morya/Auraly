import {
	Avatar,
	Box,
	Stack,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
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
				<Button>Movies</Button>
				<Button>Library</Button>
			</Stack>
		</Stack>
	);
};

export default Navbar;
