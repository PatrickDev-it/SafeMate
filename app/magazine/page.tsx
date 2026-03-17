export default function MagazinePage() {
	const articles = [
		'Sorellanza Digitale: Fare Rete Oggi',
		'Oltre il Silenzio: Dire No alla Violenza',
		'Icone di Stile e di Sostanza',
		'Empowerment Finanziario: Essere Libere',
		'Il Coraggio di Ricominciare',
	];

	return (
		<main className="safe-section">
			<div className="text-center mb-12 safe-card p-8 md:p-12">
				<p className="uppercase tracking-[0.2em] text-sm text-neutral-500">The Voice of Modern Feminism</p>
				<h1 className="text-6xl md:text-7xl italic mt-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
					LaFemmeFatal
				</h1>
			</div>

			<section className="grid gap-4 md:grid-cols-2">
				{articles.map((article, index) => (
					<article key={article} className="safe-card p-6">
						<p className="text-xs uppercase tracking-[0.18em] text-[#c0506f] mb-2">
							{index === 0 ? 'In copertina' : 'Editoriale'}
						</p>
						<h2 className="text-2xl font-semibold mb-3">{article}</h2>
						<p className="text-sm text-neutral-600 leading-relaxed">
							Approfondimento rapido in stile magazine su sicurezza, diritti, cultura e leadership femminile.
						</p>
					</article>
				))}
			</section>
		</main>
	);
}
