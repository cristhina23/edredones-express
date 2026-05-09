<script>
	import { content } from '$lib/data/content';
	import { Play, Truck, ShieldCheck, Clock3, Star, CircleSlash } from 'lucide-svelte';
</script>

<section
	id="inicio"
	class="relative flex min-h-[720px] items-center overflow-hidden bg-[#fbf9f6] sm:min-h-[760px] lg:min-h-[680px]"
>
	<div class="absolute inset-0 z-0">
		<img
			src={content.hero.image}
			alt="Cama con edred&oacute;n impecable"
			class="absolute inset-y-0 right-0 h-full w-full object-cover object-[62%_center] contrast-[1.04] saturate-[0.98] sm:w-[88%] lg:w-[76%] lg:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.08)_12%,rgba(0,0,0,0.55)_26%,#000_42%,#000_100%)]"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-b from-[#fbf9f6]/88 via-[#fbf9f6]/48 to-[#fbf9f6]/0 sm:bg-gradient-to-r sm:from-[#fbf9f6] sm:from-[8%] sm:via-[#fbf9f6]/56 sm:via-[27%] sm:to-[#fbf9f6]/0 sm:to-[48%] lg:to-[38%]"
		></div>
		<div class="absolute inset-y-0 left-0 hidden w-20 bg-white/30 blur-xl sm:block"></div>
	</div>

	<div
		class="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pb-10 pt-28 sm:px-8 lg:px-10 lg:pb-8 lg:pt-20"
	>
		<div class="max-w-[31rem]">
			<div class="space-y-2">
				<h1
					class="font-display text-[3.35rem] font-semibold leading-[0.82] text-primary sm:text-7xl lg:text-[5.4rem]"
				>
					Lavado de<br />
					Edredones
					<span class="mt-2 block text-[0.72em] font-medium italic leading-[0.95] text-accent-dark">
						sin salir de casa
					</span>
				</h1>

				<div class="mt-5 h-[2px] w-12 bg-accent"></div>
			</div>

			<p class="mt-5 max-w-[24rem] text-sm font-medium leading-relaxed text-text-soft sm:text-base">
				Recogemos, lavamos y entregamos tu edred&oacute;n listo, limpio y perfumado en
				<strong class="font-extrabold text-primary">24-48h.</strong>
			</p>

			<div
				class="mt-7 inline-flex items-center gap-3 rounded-xl border border-border/70 bg-white/76 px-4 py-3 shadow-[0_10px_32px_rgba(31,61,43,0.08)] backdrop-blur-md"
			>
				<div class="text-accent">
					<CircleSlash size={22} strokeWidth={1.6} />
				</div>
				<div>
					<p
						class="mb-0.5 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-accent-dark"
					>
						Precio &uacute;nico
					</p>
					<p class="text-xs font-semibold text-text-soft">Sin importar el tama&ntilde;o</p>
				</div>
			</div>

			<div class="mt-7 flex flex-wrap items-center gap-4">
				<a
					href="#como-funciona"
					class="inline-flex min-h-12 items-center gap-3 rounded-xl border border-border/70 bg-white px-5 py-3 text-primary shadow-[0_10px_26px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-0.5 hover:bg-surface-soft active:scale-95"
				>
					<Play size={16} class="text-accent" fill="currentColor" />
					<span class="text-[0.72rem] font-extrabold uppercase tracking-[0.03em]"
						>Ver c&oacute;mo funciona</span
					>
				</a>
			</div>
		</div>

		<div
			class="mt-12 w-full rounded-2xl border border-white/70 bg-white/86 p-2 shadow-[0_18px_45px_rgba(31,61,43,0.12)] backdrop-blur-xl sm:mt-16 lg:mt-20 lg:max-w-[64rem]"
		>
			<div
				class="grid grid-cols-1 divide-y divide-border/60 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
			>
				<div class="flex min-h-[5.2rem] items-center gap-3 px-4 py-4">
					<div
						class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-dark"
					>
						<Truck size={21} strokeWidth={1.7} />
					</div>
					<div class="min-w-0">
						<h3 class="text-xs font-bold leading-snug text-primary">
							Recojo y entrega a domicilio
						</h3>
						<p class="mt-0.5 text-xs font-extrabold text-primary">S/10</p>
					</div>
				</div>

				<div class="flex min-h-[5.2rem] items-center gap-3 px-4 py-4">
					<div
						class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-dark"
					>
						<ShieldCheck size={21} strokeWidth={1.7} />
					</div>
					<div class="min-w-0">
						<h3 class="text-xs font-bold leading-snug text-primary">
							Higiene y desinfecci&oacute;n profunda
						</h3>
					</div>
				</div>

				<div class="flex min-h-[5.2rem] items-center gap-3 px-4 py-4 sm:border-l-0 lg:border-l">
					<div
						class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-dark"
					>
						<Clock3 size={21} strokeWidth={1.7} />
					</div>
					<div class="min-w-0">
						<h3 class="text-xs font-bold leading-snug text-primary">Servicio r&aacute;pido</h3>
						<p class="mt-0.5 text-xs font-extrabold text-primary">24-48h</p>
					</div>
				</div>

				<div class="flex min-h-[5.2rem] items-center gap-3 px-4 py-4">
					<div
						class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-dark"
					>
						<Star size={21} strokeWidth={1.7} />
					</div>
					<div class="min-w-0">
						<h3 class="text-xs font-bold leading-snug text-primary">Calidad tipo hotel</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	:global(.font-display) {
		font-weight: 500;
	}
</style>
