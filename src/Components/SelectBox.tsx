import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Stack } from "@mui/system";
import React, { SetStateAction } from "react";
import { Format } from "../types";

type Props = {
	formats: Format[];
	label: string;
	format: Format;
	setFormat: React.Dispatch<SetStateAction<Format>>;
};

const SelectBox = ({ label, formats, format, setFormat }: Props) => {
	function findFormatWithUrl(url: string): Format {
		for (let item of formats) {
			if (item.url === url) {
				return item;
			}
		}
		return format;
	}
	return (
		<FormControl>
			<InputLabel id="demo-simple-select-label">{label}</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={format.url}
				label={label}
				onChange={(e) => setFormat(findFormatWithUrl(e.target.value))}>
				{formats.map((item, i) => (
					<MenuItem key={item.url} selected={i === 0} value={item.url}>
						{item.quality.toUpperCase() +
							" - " +
							item.width +
							" X " +
							item.height}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SelectBox;
