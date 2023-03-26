import { Avatar, Box, Button, Popover, Stack } from "@mui/material";
import React, { useState } from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import useDebounce from "../Hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../Hooks/Redux_hooks";
import getSearchResult from "../Redux/searchData/search_data.actions";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { gapi } from "gapi-script";
type Props = {};

const Navbar = (props: Props) => {
	const [text, setText] = React.useState("");
	const query = useDebounce(text);
	const { loading, data, error } = useAppSelector((store) => store.single);
	const dispatch = useAppDispatch();
	const [open, setOpen] = useState(false);

	React.useEffect(() => {
		getSearchResult(dispatch, query || data.keywords[0]);
	}, [query, data.keywords]);
	console.log("navbar comrended");

	return (
		<Stack
			position="sticky"
			top="0"
			className="navbar"
			zIndex="7"
			sx={{
				backdropFilter: "blur(100px)",
				borderRadius: "0 0 1rem 1rem",
				boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
			}}
			direction={{
				xs: "column",
				sm: "column",
				md: "row",
				lg: "row",
				xl: "row",
			}}
			width="100%"
			padding={"1rem 0"}
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

				<Box position={"relative"} onClick={() => setOpen(!open)}>
					<Avatar
						alt="Remy Sharp"
						src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
					/>

					<Box
						sx={{
							position: "absolute",
							left: "100%",
							top: "100%",
							display: open ? "block" : "none",
						}}>
						<LoginButton />
						<LogoutButton />
					</Box>
				</Box>
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
				padding="0.5rem 1rem"
				fontSize={{
					xs: "1rem",
					sm: "1rem",
					md: "1.1rem",
					lg: "1.2rem",
					xl: "1.2rem",
				}}
				alignItems="center"
				fontWeight="600">
				<SearchBox {...{ text, setText }} />
			</Stack>
		</Stack>
	);
};

export default Navbar;
