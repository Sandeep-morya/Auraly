import { Box } from "@mui/material";
import React from "react";
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
				loop>
				<source
					src={data.formats[data.formats.length - 1].url}
					type="video/mp4"
				/>
			</video>
		</Box>
	);
};

export default Billboard;
