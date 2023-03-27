import React from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import Button from "./BubbleButton";
import { Avatar, useTheme } from "@mui/material";
import { useAppDispatch } from "../Hooks/Redux_hooks";
import { handleLogin } from "../Redux/auth/auth.actions";

type Props = {};

const LoginButton = (props: Props) => {
	const theme = useTheme();
	const dispatch = useAppDispatch();
	const login = useGoogleLogin({
		onSuccess: (tokenResponse) => handleLogin(dispatch, tokenResponse),
	});

	React.useEffect(() => {
		googleLogout();
	}, []);

	return (
		<Button
			colorScheme={theme.palette.text.primary}
			onClick={login}
			style={{ color: theme.palette.primary.contrastText }}>
			<Avatar
				alt="Remy Sharp"
				src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
			/>
		</Button>
	);
};

export default LoginButton;
