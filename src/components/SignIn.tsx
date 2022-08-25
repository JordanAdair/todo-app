import firebase from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

type Props = {};

const SignIn = () => {
	const provider = new GoogleAuthProvider();
	const auth = getAuth();

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a google access token, which can be used to access the Google API
				const credentials = GoogleAuthProvider.credentialFromResult(result);
				const token = credentials?.accessToken;
				// The signed-in user's information
				const user = result.user;
				console.log("Sign in with Google success");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used
				const email = error.customData.email;
				// The AuthCredential type that was used
				const credential = GoogleAuthProvider.credentialFromError(error);
			});
	};

	return (
		<div>
			<button
				onClick={signInWithGoogle}
				className="bar-style | flex justify-center dark:text-lightBlue100 text-gray-700"
			>
				Please&nbsp;
				<span className="bar-hover-style | underline text-blue-600 dark:text-blue-400">
					sign in with Google
				</span>
				&nbsp;to get started!
			</button>
		</div>
	);
};

export default SignIn;
