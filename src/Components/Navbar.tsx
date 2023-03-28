import { Box, Stack } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import useDebounce from "../Hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../Hooks/Redux_hooks";
import getSearchResult from "../Redux/searchData/search_data.actions";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import VideoGrid from "./VideoGrid";
import Loader from "./Loader";
type Props = {};

const Navbar = (props: Props) => {
	const [text, setText] = React.useState("");
	const query = useDebounce(text);
	const { loading, data, error } = useAppSelector((store) => store.single);
	const auth = useAppSelector((store) => store.auth);
	const searchResults = useAppSelector((store) => store.searchData);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		getSearchResult(dispatch, query || data.keywords[0]);
	}, [query, data.keywords]);
	// console.log(searchResults);

	return (
		<Stack
			position="fixed"
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

				<Box>{auth.token == "" ? <LoginButton /> : <LogoutButton />}</Box>
			</Stack>
			<Stack
				position="relative"
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
				{query != "" && (
					<Box
						sx={{
							width: "100%",
							height: "50vh",
							position: "absolute",
							top: "100%",
							overflow: "scroll",
							backgroundColor: "rgba(0,0,0,0.9)",
							"&::-webkit-scrollbar": { display: "none" },
							borderRadius: "0.5rem",
							padding: "0 2rem",
							backdropFilter: "blur(10px)",
							boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
						}}>
						{searchResults.loading && <Loader />}
						<VideoGrid
							fixedColumns="1fr 1fr"
							title=""
							items={searchResults.list}
						/>
					</Box>
				)}
			</Stack>
		</Stack>
	);
};

export default Navbar;
