import React from "react";
import { useAppSelector } from "../Hooks/Redux_hooks";
import { PlayerDataType } from "../types";

export const PlayerDataContext = React.createContext(
	{} as {
		playerData: PlayerDataType;
		setPlayerData: React.Dispatch<React.SetStateAction<PlayerDataType>>;
	},
);

const PlayerDataProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const single = useAppSelector((store) => store.single);
	const initailState: PlayerDataType = {
		active: single?.data?.formats?.length ? true : false,
		paused: true,
		muted: true,
	};
	const [playerData, setPlayerData] = React.useState(initailState);
	const value = { playerData, setPlayerData };

	return (
		<PlayerDataContext.Provider value={value}>
			{children}
		</PlayerDataContext.Provider>
	);
};

export default PlayerDataProvider;
