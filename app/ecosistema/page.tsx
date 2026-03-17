export default function EcosistemaPage() {
	const initiatives = ["Gallerie d'arte solidali", 'Centri antiviolenza', 'Rifugi sicuri'];

	const stats = [
		['1 su 3', 'Donne subisce violenza'],
		['15k+', 'Interventi supportati'],
		['120', 'Partner locali'],
		['24/7', 'Monitoraggio attivo'],
	];

	return (
		<main>
			<section className="safe-section">
				<div
					className="safe-hero min-h-[50vh] flex items-end"
					style={{
						backgroundImage:
							"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIXn4JlXer1G64gWwGsd9bjx2v5zrr_ZvhmBQfnTk7JXjiIcLgUeUjzyboK6XC9g1xgE1AkBx7Tifq00M-cNsrP6Hi2-R-_FNUp4TGL26nKK551GyhKs_DlfwizBFrV3y0CDfob5n46T8q1GMEWXlFp-uTtOhr-xvtob5qZJcZeDEdetTi39vTFeUQeK5-Ki5ryv_4RLxrf13TkaqR7wmwT8R0j-jQ3J258HZIt-Qe4KXneoMpswbi5NPYZ5Nv2KO3Q8GnnY-HO8c')",
					}}>
					<div className="max-w-3xl text-white">
						<h1 className="text-5xl font-semibold mb-5">Ecosistema SafeMate</h1>
						<p className="text-lg text-white/90">
							Un network tra startup, partner territoriali e iniziative sociali per aumentare sicurezza e autonomia
							femminile.
						</p>
					</div>
				</div>
			</section>

			<section className="safe-section pt-0">
				<h2 className="text-3xl font-semibold mb-6">Iniziative</h2>
				<div className="grid md:grid-cols-3 gap-4">
					{initiatives.map(item => (
						<article key={item} className="safe-card p-5">
							<h3 className="font-semibold text-lg mb-2">{item}</h3>
							<p className="text-sm text-neutral-600">Collaborazione strategica ad alto impatto sociale.</p>
						</article>
					))}
				</div>
			</section>

			<section className="safe-section pt-0">
				<h2 className="text-3xl font-semibold mb-6">Impatto</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{stats.map(([value, label]) => (
						<article key={value} className="safe-card p-6">
							<p className="text-3xl font-bold">{value}</p>
							<p className="text-sm text-neutral-500 mt-2">{label}</p>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
