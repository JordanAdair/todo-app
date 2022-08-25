import useDarkMode from "./../hooks/useDarkMode";

type Props = {};

const Header = (props: Props) => {
	const [darkTheme, setDarkTheme] = useDarkMode();
	const handleMode = () => setDarkTheme(!darkTheme);

	return (
		<div className="mt-5">
			<div className="flex justify-between select-none">
				<h1 className=" font-josefinSans text-4xl text-lightBlue100 font-bold">
					T O D O
				</h1>
				<span
					onClick={handleMode}
					className="cursor-pointer hover:scale-125 transition duration-100 ease-in-out"
				>
					{darkTheme ? (
						<img src="assets/icon-sun.svg" alt="" />
					) : (
						<img src="assets/icon-moon.svg" alt="" />
					)}
				</span>
			</div>
		</div>
	);
};

export default Header;
