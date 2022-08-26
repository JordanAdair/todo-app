import { useAuthState } from "react-firebase-hooks/auth";

import { Banner, ContentContainer, SignIn } from "../src/components/index";
import { auth } from "./constants/firebase";

function App() {
	const [user] = useAuthState(auth);

	return (
		<div className="fixed flex flex-col bg-gray-200 dark:bg-darkBlue800 h-screen w-screen transition-colors duration-500 ease-in-out overflow-x-hidden overflow-scroll">
			<Banner />
			{user ? <ContentContainer /> : <SignIn />}
		</div>
	);
}

export default App;
