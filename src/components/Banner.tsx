import { getAuth, signOut } from "firebase/auth";

type Props = {};

const Banner = (props: Props) => {
	const auth = getAuth();

	const signUserOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log("Sign out success");
			})
			.catch((error) => {
				// An error happened.
				console.log(error);
			});
	};

	return (
		<div className="absolute -z-10 dark:bg-desktopDarkBg bg-desktopLightBg w-screen min-w-fit h-[40vh] min-h-[12em] bg-cover">
			{auth.currentUser && (
				<button
					onClick={signUserOut}
					className="hover:scale-90 transition duration-100 text-sm px-3 py-1 rounded-lg dark:text-lightBlue100 text-gray-600 my-3 mx-10 float-right w-auto whitespace-nowrap dark:bg-darkBlue500 bg-white shadow-lg font-josefinSans"
				>
					Sign Out
				</button>
			)}
		</div>
	);
};

export default Banner;
