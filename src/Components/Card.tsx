import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { FaVideo, FaMusic } from "react-icons/fa";
// @ts-ignore,
import Marquee from "./Marquee";
import { SearchResultType } from "../types";
import "../Styles/card.css"

type Props = {
	data: SearchResultType;
};

const Card = ({ data }: Props) => {
	const theme = useTheme();
	return (
		<Stack
			whiteSpace={"nowrap"}
			textOverflow="ellipsis"
			gap="0.5rem"
			width={{
				xs: "10rem",
				sm: "10rem",
				md: "15rem",
				lg: "18rem",
				xl: "20rem",
			}}>
			<Box className="card_div" width="100%" height="100%" position={"relative"} overflow="hidden">
				<img
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
					<FaVideo />
					<FaMusic />
				</Stack>
			</Box>
			<Marquee>{data.title}</Marquee>
		</Stack>
	);
};

export default Card;

/*
,
 */
