﻿import { Box } from "@mui/material";
import React from "react";
import { FaHeadphones, FaMusic } from "react-icons/fa";
import { useAppSelector } from "../Hooks/Redux_hooks";
type Props = {};

const Billboard = (props: Props) => {
	const { loading, error, data } = useAppSelector((store) => store.single);
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				position: "absolute",
				top: "0",
			}}
			className="bill_board">
			<video
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					opacity: "0.4",
				}}
				autoPlay
				muted
				poster={data.thumbnail[data.thumbnail.length - 1].url}
				loop>
				<source
					src={data.formats[data.formats.length - 1].url}
					type="video/mp4"
				/>
			</video>

			<FaHeadphones
				style={{
					width: "50%",
					height: "50%",
					position: "absolute",
					top: "55%",
					left: "50%",
					transform: "translate(-50%,-50%)",
					opacity: "0.2",
				}}
			/>
		</Box>
	);
};

export default Billboard;
