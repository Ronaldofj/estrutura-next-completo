import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
	return (
		<div>
			<Navbar />
			<div>{children}</div>
			{/* Children é a Pagina */}
			<Footer />
		</div>
	);
}
