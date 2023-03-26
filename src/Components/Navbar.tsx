import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import { MdSearch } from "react-icons/md";
import Button from "./Button";
import SearchBox from "./SearchBox";
import useDebounce from "../Hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../Hooks/Redux_hooks";
import getSearchResult from "../Redux/searchData/search_data.actions";
import Billboard from "./Billboard";
type Props = {};

const Navbar = (props: Props) => {
	const [text, setText] = React.useState("");
	const query = useDebounce(text);
	const { loading, data, error } = useAppSelector((store) => store.single);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		getSearchResult(dispatch, query || data.keywords[0]);
	}, [query, data.keywords]);

	return (
		<Stack
			position="sticky"
			top="0"
			zIndex="7"
			sx={{
				backdropFilter: "blur(100px)",
				borderRadius: "0.5rem",

				boxShadow:
					"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
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
