import { Box } from "@mui/material";
import React from "react";
import "../Styles/bill_board.css"

type Props = {};

const Billboard = (props: Props) => {
	return (
		<div className="bill_board">
			<video autoPlay={true} muted loop>
				<source
					src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
	);
};

export default Billboard;
