import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { FaPlay } from "react-icons/fa";

import { SearchResultType } from "../types";
import "../Styles/card.css";
import { useNavigate } from "react-router-dom";

type Props = {
	data: SearchResultType;
};

const Card = ({ data }: Props) => {
	const theme = useTheme();
	const navigate = useNavigate();

	function handleClick() {
		localStorage.removeItem("trackData");
		navigate("/preview/" + data.id);
	}
	return (
		<Stack flex="1" gap="0.5rem" sx={{ "&:hover": { scale: "1.2" } }}>
			<Box
				className="card_div"
				sx={{ aspectRatio: "1280/720", objectFit: "cover" }}
				position={"relative"}
				overflow="hidden">
				<img
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
					src={data.thumbnail.url}
					alt={data.title}
				/>
				<Stack
					position={"absolute"}
					top="0"
					left="0"
					className="card_options"
					direction={"row"}
					alignItems="center"
					justifyContent="center"
					width="100%"
					height="100%"
					gap="3rem"
					fontSize={"2rem"}
					bgcolor={theme.palette.primary.contrastText}>
					<FaPlay onClick={handleClick} />
				</Stack>
			</Box>
			<span
				style={{
					fontSize: "0.8rem",
				}}>
				{data.title.slice(0, 40) + "..."}
			</span>
		</Stack>
	);
};

export default Card;

/*
,
 */
