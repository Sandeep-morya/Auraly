import { Box, Button, InputAdornment, Stack, TextField } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { MdSearch } from "react-icons/md";

type Props = {
	text: string;
	setText: Dispatch<SetStateAction<string>>;
};

const SearchBox = ({ text, setText }: Props) => {
	return (
		<TextField
			fullWidth
			id="standard-basic"
			label="Search"
			value={text}
			sx={{
				width: "100%",
				"& .MuiOutlinedInput-root": {
					"& fieldset": {
						// borderColor: ,
						borderRadius: "5rem",
					},
				},
			}}
			autoComplete="off"
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
	);
};

export default SearchBox;
