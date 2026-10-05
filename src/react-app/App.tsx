import "./App.css";

// Teklif e-postası: boş bırakılırsa buton gizlenir.
const CONTACT_EMAIL = "";

function App() {
	return (
		<main className="card">
			<span className="tag">Premium domain</span>
			<h1>pornnn.si</h1>
			<p>
				This domain is available for purchase.
				<br />
				Serious offers only.
			</p>
			{CONTACT_EMAIL && (
				<a
					className="btn"
					href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Offer for pornnn.si")}`}
				>
					Make an offer
				</a>
			)}
			<footer>Secure transfer via escrow available.</footer>
		</main>
	);
}

export default App;
