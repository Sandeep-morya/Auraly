import { Box, Button, InputAdornment, Stack, TextField } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { MdSearch } from "react-icons/md";

type Props = {
	text: string;
	setText: Dispatch<SetStateAction<string>>;
};

const SearchBox = ({ text, setText }: Props) => {
	return (
		<Stack
			width="100%"
			padding="1rem 0"
			justifyContent="space-between"
			gap="1rem"
			direction="row"
			alignItems="center">
			<TextField
				fullWidth
				id="standard-basic"
				label="Search"
				value={text}
				onChange={(e) => setText(e.target.value)}
				variant="outlined"
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<MdSearch size="25" style={{ cursor: "pointer" }} />
						</InputAdornment>
					),
				}}
			/>
		</Stack>
	);
};

export default SearchBox;
