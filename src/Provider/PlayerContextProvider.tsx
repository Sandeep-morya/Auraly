import React from "react";
import { PlayerDataType } from "../types";

export const PlayerDataContext = React.createContext(
	{} as {
		playerData: PlayerDataType;
		setPlayerData: React.Dispatch<React.SetStateAction<PlayerDataType>>;
	},
);
const previousState = JSON.parse(
	localStorage.getItem("track") as string,
) as PlayerDataType;
const initailState: PlayerDataType = {
	active: false,
	paused: true,
	muted: true,
	current: 0,
};
const PlayerDataProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [playerData, setPlayerData] = React.useState(
		previousState || initailState,
	);
	const value = { playerData, setPlayerData };

	return (
		<PlayerDataContext.Provider value={value}>
			{children}
		</PlayerDataContext.Provider>
	);
};

export default PlayerDataProvider;
