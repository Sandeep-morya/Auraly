import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import { MdSearch } from "react-icons/md";
import Button from "./Button";
import SearchBox from "./SearchBox";
import useDebounce from "../Hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../Hooks/Redux_hooks";
import getSearchResult from "../Redux/searchData/search_data.actions";
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
			p="1.5rem 0"
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
				<SearchBox {...{ text, setText }} />
			</Stack>
		</Stack>
	);
};

export default Navbar;
