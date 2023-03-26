import { Box } from "@mui/material";
import React from "react";

type Props = {};

const Billboard = (props: Props) => {
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
					src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
					type="video/mp4"
				/>
			</video>
		</Box>
	);
};

export default Billboard;
