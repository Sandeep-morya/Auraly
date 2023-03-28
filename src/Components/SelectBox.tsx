import { Paper, useTheme } from "@mui/material";
import React, { SetStateAction } from "react";
import { Format } from "../types";

type Props = {
	formats: Format[];
	label: string;
	format: Format;
	setFormat: React.Dispatch<SetStateAction<Format>>;
};

const SelectBox = ({ label, formats, format, setFormat }: Props) => {
	const theme = useTheme();
	function findFormatWithUrl(url: string): Format {
		for (let item of formats) {
			if (item.url === url) {
				return item;
			}
		}
		return format;
	}
	return (
		<Paper className="box">
			<select
				style={{
					backgroundColor: theme.palette.text.primary,
					color: theme.palette.primary.contrastText,
					padding: "1rem",
					borderRadius: "0.3rem",
				}}
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
		</Paper>
	);
};

export default SelectBox;
