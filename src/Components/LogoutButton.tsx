import React from "react";
import { googleLogout } from "@react-oauth/google";
import Button from "./BubbleButton";
import { Avatar, useTheme } from "@mui/material";
import { MdLogout } from "react-icons/md";
import { useAppDispatch } from "../Hooks/Redux_hooks";
import { handleLogout } from "../Redux/auth/auth.actions";
type Props = {};

const LogoutButton = (props: Props) => {
	const dispatch = useAppDispatch();

	const theme = useTheme();
	return (
		<Button
			colorScheme={theme.palette.text.primary}
			style={{ color: theme.palette.primary.contrastText }}
			onClick={() => {
				googleLogout();
				handleLogout(dispatch);
			}}>
			<Avatar
				alt="Remy Sharp"
				src="https://cdn-icons-png.flaticon.com/512/720/720255.png"
			/>
		</Button>
	);
};

export default LogoutButton;
