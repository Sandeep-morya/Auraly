import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Stack } from "@mui/system";
import React, { SetStateAction } from "react";
import { Format } from "../types";

import "../Styles/select_box.css";

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
		<Box className="box">
			<select
				value={format.url}
				onChange={(e) => setFormat(findFormatWithUrl(e.target.value))}>
				{formats.map((item, i) => (
					<option key={item.url} value={item.url}>
						{item.quality.toUpperCase() +
							" - " +
							item.width +
							" X " +
							item.height}
					</option>
				))}
			</select>
		</Box>
	);
};

export default SelectBox;
