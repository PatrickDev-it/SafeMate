export default function ComeFunzionaPage() {
	const chatTypes = [
		'Le donne sono il pilastro fondamentale della nostra società, custodi di vita, resilienza e progresso. Eppure, troppo spesso, la loro sicurezza viene messa a rischio in contesti che dovrebbero essere protetti.',
		'SAFE MATE nasce per colmare questo vuoto inaccettabile, trasformando il dolore in un’azione concreta. La nostra startup non è solo un progetto tecnologico, ma la promessa di dare vita ad un cambiamento nella società in cui viviamo, protezione e ascolto a coloro che non hanno la forza di combattere da sole.',
		'Crediamo fermamente che ogni donna meriti di camminare nel mondo senza timore, supportata da chi come lei si è stancata di avere paura. Il nostro impegno è totale: sviluppare strumenti che possano prevenire la violenza che ogni giorno le donne vivono ed offrire supporto immediato a chi si trova da sola ad affrontare il pericolo.',
		'Non ci fermeremo finché la sicurezza non sarà un diritto garantito ad ogni donna e non un privilegio di poche. Ogni anima combattente trova in noi un alleato che sarà sempre al suo fianco.',
		'Insieme, possiamo costruire un futuro dove il silenzio non è più un’opzione, dove le donne hanno il coraggio di combattere per la libertà di essere se stesse. La nostra missione è onorare ogni storia facendo sì che il sacrificio di coloro che non sono più tra noi non sia stato vano.',
		'Non ci basiamo sulle statistiche ufficiali per la sicurezza delle donne. Ma su una mappa costruita sulle percezioni reali e sul vissuto quotidiano delle utenti.',
		'Interfaccia nascosta e specifica per situazioni di violenza domestica, per dare modo alla vittima di chiedere supporto alla community senza destare sospetti.',
		'La posizione viene temporaneamente condivisa in modo approssimativo per permettere ai rinforzi di poter intervenire nel minor tempo possibile.',
		"Premiamo le azioni positive che ogni membro della community svolge all’interno della community. L’utente guadagna badge e punti diventando una 'Safe Guard' nella comunità tramite attività di supporto o volontariato nell’associazione. Offriamo corsi e quiz integrati per aumentare la consapevolezza sulla sicurezza e sulla violenza, nonché corsi di autodifesa per donne.",
		'Collaboriamo attivamente con associazioni e fondazioni per garantire standard di sicurezza senza precedenti. Attraverso partnership con brand che al centro del loro business hanno il benessere e la valorizzazione delle donne.',
		'offriamo in-store training per la difesa personale e supportiamo attivamente le startup al femminile incentivando così la crescita personale ed economica di ogni donna.',
	];

	return (
		<main>
			<section className="safe-section">
				<div
					className="safe-hero min-h-[56vh] flex items-end"
					style={{
						backgroundImage:
							"url('https://lh3.googleusercontent.com/aida-public/AB6AXuArFey8vD-okSul5fNA7mpXcPY6THNZ7As_WnaefjpmJozLnXIEJ8HhgZQtGYn25IsKjXptORQomnMqmOrAP8Z2HpcGJaJFfeJb4DpojIaL8Of4LWEOC34s8qWZdA1kcGxMNdKMYsR50WBenRn3wMZMmulKMtsq4qU3vPnlbE6_rXI1XgvuebIFyoBz7eqhYc9dohODp8vimCoGyR-8QIWngxSdFje9GJ4yIKplVT4s0GVzTaTT3SUcdJ19M8OsVmGd1gUTuQUoM5Q')",
					}}>
					<div className="max-w-2xl text-white">
						<h1 className="text-5xl font-semibold mb-4">Come funziona SafeMate</h1>
						<p className="text-white/90 text-lg leading-relaxed">
							Prevenzione, rete locale, risposta rapida e strumenti digitali per trasformare il pericolo in protezione
							concreta.
						</p>
					</div>
				</div>
			</section>

			<section className="safe-section pt-0">
				<h2 className="text-3xl font-semibold mb-6">Spiegazione completa del modello SafeMate</h2>
				<div className="grid md:grid-cols-2 gap-4">
					{chatTypes.map((text, index) => (
						<div key={`text-${index + 1}`} className="safe-card p-5">
							<p className="text-xs uppercase tracking-[0.18em] text-neutral-500 mb-2">Testo {index + 1}</p>
							<p className="text-sm text-neutral-700 leading-relaxed">{text}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
