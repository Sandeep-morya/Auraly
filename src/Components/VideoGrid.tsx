import { Box, Stack } from "@mui/material";
import React from "react";
import { SearchResultType } from "../types";
import Card from "./Card";
import Heading from "./Heading";

type Props = {
	title: string;
	items: SearchResultType[];
	audio?: boolean;
	video?: boolean;
	fixedColumns?: string;
};

const VideoGrid = ({
	fixedColumns,
	items,
	title,
	audio = true,
	video = true,
}: Props) => {
	return (
		<Stack gap={"1rem"}>
			<Heading {...{ title }} />
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: fixedColumns
						? fixedColumns
						: {
								xs: "1fr 1fr",
								sm: "1fr 1fr",
								md: "1fr 1fr 1fr",
								lg: "1fr 1fr 1fr 1fr",
								xl: "1fr 1fr 1fr 1fr 1fr",
						  },
					gap: "2rem",
				}}>
				{items.map((data) => (
					<Card key={data.id} {...{ data, audio, video }} />
				))}
			</Box>
		</Stack>
	);
};

export default VideoGrid;
