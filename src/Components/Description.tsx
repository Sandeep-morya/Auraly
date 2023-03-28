import { Chip, Divider, Stack } from "@mui/material";
import React from "react";

type Props = {
	description: string;
	keywords: string[];
};

const Description = ({ description, keywords }: Props) => {
	return (
		<Stack marginTop={"2rem"} width="100%" gap="2rem">
			<Divider />
			<Stack width="100%" direction="row" flexWrap="wrap" gap="1rem">
				{keywords.map((tag, index) => (
					<Chip variant="outlined" label={"#" + tag} key={tag + index} />
				))}
			</Stack>
			<p>{description}</p>
		</Stack>
	);
};

export default Description;
