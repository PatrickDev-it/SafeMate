export default function MagazinePage() {
	const articles = [
		'Sorellanza Digitale: Fare Rete Oggi #empowerment',
		'Oltre il Silenzio: Dire No alla Violenza #empowerment',
		'Icone di Stile e di Sostanza #beauty',
		'Empowerment Finanziario: Essere Libere #economy',
		'Il Coraggio di Ricominciare #empowerment',
		"Donne e Innovazione: Startup al Femminile #economy",
	];

	return (
		<main className="safe-section">
			<div className="text-center mb-12 safe-card p-8 md:p-12">
				<p className="uppercase tracking-[0.2em] text-sm text-neutral-500">The Voice of Modern Feminism</p>
				<h1 className="text-6xl md:text-7xl italic mt-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
					WOMEN’S
				</h1>
				<p className="mt-4 text-neutral-600 text-base">
					Scopri articoli divisi per categorie (#beauty, #empowerment, #economy, ecc.), con copertine dedicate, immagini interne e una sezione per la discussione. Gli articoli sono selezionati da fonti autorevoli e arricchiti da hashtag tematici e spazi di confronto.
				</p>
			</div>

			<section className="grid gap-4 md:grid-cols-2">
				{articles.map((article, index) => (
					<article key={article} className="safe-card p-6">
						<p className="text-xs uppercase tracking-[0.18em] text-[#c0506f] mb-2">
							{index === 0 ? 'In copertina' : 'Editoriale'}
						</p>
						<h2 className="text-2xl font-semibold mb-3">{article}</h2>
						<p className="text-sm text-neutral-600 leading-relaxed">
							Articolo di approfondimento su sicurezza, diritti, cultura, leadership e crescita femminile. Ogni articolo include hashtag tematici, immagini e una sezione per la discussione.
						</p>
					</article>
				))}
			</section>
		</main>
	);
}
