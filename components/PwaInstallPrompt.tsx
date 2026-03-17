'use client';

import { useEffect, useMemo, useState } from 'react';

type BeforeInstallPromptEvent = Event & {
	prompt: () => Promise<void>;
	userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
};

const DISMISS_KEY = 'safemate_pwa_prompt_dismissed';

export default function PwaInstallPrompt() {
	const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [isInstalled, setIsInstalled] = useState(false);

	const isIos = useMemo(() => {
		if (typeof navigator === 'undefined') return false;
		return /iPad|iPhone|iPod/.test(navigator.userAgent);
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const standalone =
			window.matchMedia('(display-mode: standalone)').matches ||
			(window.navigator as Navigator & { standalone?: boolean }).standalone === true;

		if (standalone) {
			setIsInstalled(true);
			return;
		}

		const dismissed = window.localStorage.getItem(DISMISS_KEY) === '1';
		if (!dismissed) {
			setIsVisible(true);
		}

		const handleBeforeInstallPrompt = (event: Event) => {
			event.preventDefault();
			setDeferredPrompt(event as BeforeInstallPromptEvent);
			setIsVisible(true);
		};

		const handleInstalled = () => {
			setIsInstalled(true);
			setIsVisible(false);
			window.localStorage.removeItem(DISMISS_KEY);
		};

		window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
		window.addEventListener('appinstalled', handleInstalled);

		return () => {
			window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
			window.removeEventListener('appinstalled', handleInstalled);
		};
	}, []);

	if (isInstalled || !isVisible) {
		return null;
	}

	const dismiss = () => {
		if (typeof window !== 'undefined') {
			window.localStorage.setItem(DISMISS_KEY, '1');
		}
		setIsVisible(false);
	};

	const install = async () => {
		if (!deferredPrompt) return;
		await deferredPrompt.prompt();
		await deferredPrompt.userChoice;
		setDeferredPrompt(null);
	};

	return (
		<div className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-md rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
			<h3 className="text-base font-semibold text-neutral-900">Installa SafeMate</h3>
			<p className="mt-1 text-sm text-neutral-600">
				{deferredPrompt ?
					'Aggiungi SafeMate alla schermata Home per un accesso rapido come app.'
				: isIos ?
					'Su iPhone/iPad apri Condividi e poi “Aggiungi a Home”.'
				:	'Apri il menu del browser e scegli “Installa app” o “Aggiungi a Home”.'}
			</p>

			<div className="mt-3 flex items-center justify-end gap-2">
				<button
					type="button"
					onClick={dismiss}
					className="rounded-full px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100">
					Chiudi
				</button>

				{deferredPrompt && (
					<button
						type="button"
						onClick={install}
						className="rounded-full bg-safemate-primary px-4 py-2 text-sm font-semibold text-neutral-900 hover:opacity-90">
						Installa
					</button>
				)}
			</div>
		</div>
	);
}
