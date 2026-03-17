import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	const previewBlocks = [
		{
			tag: 'Preview 01 — Protezione immediata',
			title: 'SOS silenzioso e alert intelligente ai contatti fidati',
			text: 'Le donne sono il pilastro fondamentale della nostra società, custodi di vita, resilienza e progresso. Eppure, troppo spesso, la loro sicurezza viene messa a rischio in contesti che dovrebbero essere protetti. SAFE MATE nasce per colmare questo vuoto inaccettabile, trasformando il dolore in azione concreta. La nostra startup non è solo un progetto tecnologico, ma una promessa solenne di protezione e ascolto.',
			items: [
				'Pulsante SOS con fallback vocale',
				'Invio automatico posizione in tempo reale',
				'Storico eventi protetto per supporto legale',
			],
			accent: 'bg-rose-500',
		},
		{
			tag: 'Preview 02 — Percorso sicuro',
			title: 'Navigazione assistita con zone verificate dalla community',
			text: "Crediamo fermamente che ogni donna meriti di camminare nel mondo senza paura, supportata da una rete che non dorme mai. Il nostro impegno è totale: sviluppare strumenti che possano prevenire la violenza e offrire supporto immediato. Non ci fermeremo finché la sicurezza non sarà un diritto garantito e non un privilegio. Ogni anima che combatte trova in noi un alleato fedele. Insieme, possiamo costruire un futuro dove il silenzio è sostituito dalla forza e la paura dalla libertà. La nostra missione è onorare ogni storia con l'innovazione e il coraggio.",
			items: ['Heatmap dei punti segnalati', 'Check-in automatici temporizzati', 'Condivisione percorso con rete personale'],
			accent: 'bg-sky-500',
		},
		{
			tag: 'Preview 03 — Centro supporto',
			title: 'Supporto psicologico, legale e territoriale in un unico hub',
			text: "Safe Mate riduce il time-gap tra il manifestarsi del pericolo e l'intervento di persone competenti, coinvolgendo società di pronto intervento e sicurezza privata come filtro tra la violenza e le forze dell'ordine.",
			items: [
				'Una comunità attiva di supporto pronta a intervenire e fornire rifugio sicuro.',
				"Protezione assoluta dei dati e dell'identità per garantire la massima libertà di ogni utente.",
				'Chat tematiche nazionali e locali, corsi, badge e strumenti di prevenzione.',
			],
			accent: 'bg-violet-500',
		},
	];

	return (
		<main>
			<section className="safe-section">
				<div
					className="safe-hero min-h-[72vh] flex flex-col items-center justify-between text-center"
					style={{
						backgroundImage:
							"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiv2M5aBJZksIPk-YPaHUXWRPvWd6Ahr8mUooGsATKchmWchpIrccEI1t-0K9O17_UNF_KH3FbhBcQNedrx1GRD6WlHYhGdzcK9pggyYmbu3WJlNVrkSzxcJc4euv2wGWoMfK89uU9QJ_ULQHg-1bygizICZf3zCBx8nC1L-NYhj7l_1XkmizDxxvWVk99SCbkHYLEfwgyDkpZwtmK5DlJ3OcPQUpbAtKAzO3660mEgQcoiBqzyS32NWH_cWAhWfFfM4u9Egl1Byo')",
					}}>
					<p className="text-xs uppercase tracking-[0.15em] text-white/80 mb-auto">Associazione per la sicurezza femminile</p>

					<blockquote className=" text-white text-base md:text-lg leading-tight mt-auto text-center">
						“ Nasciamo da un'esigenza che non può più essere trascurata, da un dolore che non può più rimanere inascoltato e
						da un'anima che non smetterà di combattere. ”
					</blockquote>
				</div>
			</section>

			<section className="safe-section pt-0">
				<div className="safe-card p-8 md:p-10 text-center">
					<p className="text-lg md:text-xl text-neutral-700 leading-relaxed text-justify">
						Le donne sono il pilastro fondamentale della nostra società, custodi di vita, resilienza e progresso. Eppure,
						troppo spesso, la loro sicurezza viene messa a rischio in contesti che dovrebbero essere protetti. SAFE MATE nasce
						per colmare questo vuoto inaccettabile, trasformando il dolore in azione concreta. La nostra startup non è solo un
						progetto tecnologico, ma una promessa solenne di protezione e ascolto.
					</p>
					<div className="mt-6 flex flex-wrap justify-center gap-3">
						<Link href="/come-funziona" className="rounded-full px-6 py-3 font-semibold bg-safemate-primary text-neutral-900">
							Scopri il progetto
						</Link>
						<Link
							href="/dashboard"
							className="rounded-full px-6 py-3 font-semibold border border-black/20 bg-white/60 backdrop-blur-lg">
							Guarda anteprima app
						</Link>
						<Link href="/community" className="rounded-full px-6 py-3 font-semibold border border-black/15">
							Entra nella rete
						</Link>
					</div>
				</div>
			</section>

			<section className="safe-section pt-0">
				<div className="grid gap-4 md:grid-cols-4">
					{[
						['24/7', 'Operatività', 'Risposta immediata per interventi rapidi in situazioni di emergenza critica.'],
						['+120', 'Partner locali', 'Centri e professioniste verificate sul territorio.'],
						['+15k', 'Interventi supportati', 'Sistema collettivo fondato su fiducia e connessioni sociali reali.'],
						[
							'100%',
							'Approccio protetto',
							"Protezione assoluta dei dati e dell'identità per garantire la massima libertà di ogni utente.",
						],
					].map(([value, title, text]) => (
						<article key={title} className="safe-card p-5">
							<p className="text-3xl font-bold mb-2 text-center">{value}</p>
							<h3 className="font-semibold text-lg mb-2 text-center">{title}</h3>
							<p className="text-neutral-600 text-sm text-justify">{text}</p>
						</article>
					))}
				</div>
			</section>

			<section className="safe-section pt-2 space-y-5">
				{previewBlocks.map((block, index) => {
					const isLeftAligned = index % 2 === 0;

					return (
						<div key={block.title} className="safe-card p-5 sm:p-6 md:p-8">
							<div className="mb-5">
								<p className="text-xs uppercase tracking-[0.18em] text-neutral-500 mb-3 text-center">{block.tag}</p>
								<h2 className="w-full text-xl sm:text-2xl md:text-5xl font-semibold leading-tight text-center">
									{block.title}
								</h2>
							</div>

							<div className="flex flex-row flex-wrap items-start gap-4 sm:gap-5 md:gap-8">
								<div
									className={
										isLeftAligned ? 'order-1 shrink-0 self-start' : 'order-2 shrink-0 self-start lg:order-2'
									}>
									<div className="relative w-[26vw] min-w-[108px] max-w-[165px] sm:max-w-[210px] md:w-full md:max-w-[320px]">
										<Image
											src="/iphone.png"
											alt="Anteprima app SafeMate su iPhone"
											width={900}
											height={1800}
											className="relative z-20 h-auto w-full drop-shadow-2xl"
										/>
										<div className="absolute left-[11.5%] right-[11.5%] top-[8.5%] bottom-[8%] z-10 overflow-hidden rounded-[12px] sm:rounded-[18px] md:rounded-[28px]">
											<div className="px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 border-b border-black/5 flex items-center justify-between text-[8px] sm:text-[10px] md:text-xs">
												<span className="font-semibold">SafeMate Preview</span>
												<span className="text-neutral-500">Live demo</span>
											</div>
											<div className="space-y-2 md:space-y-3">
												<div
													className={`h-14 sm:h-18 md:h-24 rounded-xl md:rounded-2xl ${block.accent} text-white p-2 md:p-3 flex flex-col justify-between`}>
													<p className="text-[8px] sm:text-[9px] md:text-xs uppercase tracking-widest">
														Core module
													</p>
													<p className="text-[7px] sm:text-[9px] md:text-sm font-semibold leading-snug line-clamp-3">
														{block.title}
													</p>
												</div>
												<div className="grid grid-cols-2 gap-1.5 md:gap-2">
													<div className="h-8 sm:h-10 md:h-16 rounded-lg md:rounded-xl bg-neutral-100" />
													<div className="h-8 sm:h-10 md:h-16 rounded-lg md:rounded-xl bg-neutral-100" />
												</div>
												<div className="h-10 sm:h-12 md:h-20 rounded-lg md:rounded-xl bg-neutral-100" />
											</div>
										</div>
									</div>
								</div>

								<div
									className={
										isLeftAligned ? 'order-2 min-w-0 flex-1 self-start' : (
											'order-1 min-w-0 flex-1 self-start lg:order-1'
										)
									}>
									<p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed text-justify">
										{block.text}
									</p>
								</div>
							</div>

							<div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
								{block.items.map(item => (
									<button
										key={item}
										type="button"
										className="safe-card w-full px-4 py-3 text-left text-sm text-neutral-700 text-justify">
										{item}
									</button>
								))}
							</div>
						</div>
					);
				})}
			</section>

			<section className="safe-section pt-0">
				<div className="safe-card p-8 md:p-10 grid lg:grid-cols-2 gap-8">
					<div>
						<p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3 text-center lg:text-left">
							Impatto associativo
						</p>
						<h2 className="text-4xl font-semibold mb-4 text-center lg:text-left">
							Un’associazione comprovata, non solo un’app.
						</h2>
						<p className="text-neutral-600 leading-relaxed mb-5 text-justify">
							Il punto di forza di Safe Mate non è la singola donna ma tutte le donne che formano la community: un Eden al
							femminile, in cui muoversi senza paura con un senso di appartenenza reale. Il primo pensiero non è la paura
							ma la reazione.
						</p>
						<div className="flex flex-wrap gap-3 justify-center lg:justify-start">
							<Link
								href="/ecosistema"
								className="rounded-full px-5 py-2.5 font-semibold bg-safemate-primary text-neutral-900">
								Vedi i partner
							</Link>
							<Link href="/magazine" className="rounded-full px-5 py-2.5 font-semibold border border-black/15">
								Leggi approfondimenti
							</Link>
						</div>
					</div>
					<div className="grid gap-3">
						{[
							'Collaborazione con le migliori società di pronto intervento e sicurezza privata.',
							'Chat tematiche nazionali e locali su benessere, femminilità e advising.',
							'Badge, corsi e quiz su autodifesa, consapevolezza e riconoscimento della violenza.',
							'Mappa dei percorsi sicuri basata sul vissuto quotidiano delle utenti.',
							'Supporto alla crescita economica di imprenditrici e startup al femminile.',
							'Trigger vocali IA che attivano push nell’area designata con posizione approssimativa.',
						].map(item => (
							<div
								key={item}
								className="rounded-xl border border-black/8 bg-white px-4 py-3 text-sm text-neutral-700 text-justify">
								{item}
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
