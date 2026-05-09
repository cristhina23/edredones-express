<script>
  import {
    ArrowUpRight,
    MessageCircleMore
  } from 'lucide-svelte';

  import { content } from '$lib/data/content';

  let name = $state('');
  let district = $state('');
  let comforterType = $state('');
  let quantity = $state('');
  let message = $state('');

  function sendWhatsApp() {

    const text = `
Hola, quiero solicitar un recojo.%0A%0A
👤 Nombre: ${name}%0A
📍 Distrito: ${district}%0A
🛏️ Tipo de edredón: ${comforterType}%0A
📦 Cantidad: ${quantity}%0A%0A
📝 Comentario:%0A${message || 'Ninguno'}
`;

    const url = `https://wa.me/${content.site.whatsapp}?text=${text}`;

    window.open(url, '_blank');
  }
</script>

<section
  id="contacto"
  class="relative py-10 lg:py-12 bg-background overflow-hidden"
>

  <!-- AMBIENT GLOWS -->
  <div
    class="absolute top-0 left-[10%] w-[280px] h-[280px] rounded-full bg-accent/10 blur-[120px] pointer-events-none"
  ></div>

  <div
    class="absolute bottom-[-100px] right-[5%] w-[320px] h-[320px] rounded-full bg-primary/10 blur-[140px] pointer-events-none"
  ></div>

  <div
    class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
  >

    <!-- MAIN CARD -->
    <div
      class="relative overflow-hidden rounded-[2.5rem] border border-black/[0.04] bg-white/75 backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.05)]"
    >

      <!-- LIGHT -->
      <div
        class="absolute top-0 right-0 w-[360px] h-[360px] bg-accent/10 blur-[120px]"
      ></div>

      <div
        class="grid lg:grid-cols-[0.75fr_1.25fr]"
      >

        <!-- LEFT -->
        <div
          class="relative overflow-hidden bg-primary px-7 py-8 lg:px-8 lg:py-8"
        >

          <!-- INNER GLOW -->
          <div
            class="absolute top-0 right-0 w-[220px] h-[220px] bg-accent/20 blur-[100px]"
          ></div>

          <div
            class="relative z-10"
          >

            <!-- BADGE -->
            <span
              class="uppercase tracking-[0.24em] text-accent text-[11px] font-semibold"
            >
              Solicita tu recojo
            </span>

            <!-- TITLE -->
            <h2
              class="mt-4 text-[2.4rem] lg:text-[3.2rem] leading-[0.92] tracking-[-0.06em] text-white"
            >
              Agenda tu

              <span
                class="block text-accent italic"
              >
                lavado hoy
              </span>

            </h2>

            <!-- DESCRIPTION -->
            <p
              class="mt-5 text-white/70 leading-relaxed max-w-[380px]"
            >
              Completa el formulario y te responderemos rápidamente por WhatsApp para coordinar el recojo de tu edredón.
            </p>

            <!-- FLOATING CARD -->
            <div
              class="mt-7 rounded-[1.8rem] border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >

              <div
                class="flex items-center gap-4"
              >

                <!-- ICON -->
                <div
                  class="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center border border-accent/20 shrink-0"
                >

                  <MessageCircleMore
                    size={22}
                    class="text-accent"
                  />

                </div>

                <!-- TEXT -->
                <div>

                  <h3
                    class="text-white font-semibold text-sm"
                  >
                    Atención inmediata
                  </h3>

                  <p
                    class="mt-1 text-white/60 text-sm leading-relaxed"
                  >
                    Respuesta rápida y coordinación sencilla.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        <!-- FORM -->
        <div
          class="relative px-7 py-8 lg:px-8 lg:py-8"
        >

          <!-- FORM GRID -->
          <div
            class="grid sm:grid-cols-2 gap-4"
          >

            <!-- NAME -->
            <div
              class="sm:col-span-2"
            >

              <label
                class="block text-primary/70 text-sm font-medium mb-2"
              >
                Nombre
              </label>

              <input
                bind:value={name}
                type="text"
                placeholder="Tu nombre"
                class="w-full rounded-2xl border border-black/[0.06] bg-white px-5 py-3 outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_6px_rgba(201,162,95,0.08)]"
              />

            </div>

            <!-- DISTRICT -->
            <div>

              <label
                class="block text-primary/70 text-sm font-medium mb-2"
              >
                Distrito
              </label>

              <input
                bind:value={district}
                type="text"
                placeholder="Ej. Miraflores"
                class="w-full rounded-2xl border border-black/[0.06] bg-white px-5 py-3 outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_6px_rgba(201,162,95,0.08)]"
              />

            </div>

            <!-- QUANTITY -->
            <div>

              <label
                class="block text-primary/70 text-sm font-medium mb-2"
              >
                Cantidad
              </label>

              <input
                bind:value={quantity}
                type="text"
                placeholder="Ej. 2"
                class="w-full rounded-2xl border border-black/[0.06] bg-white px-5 py-3 outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_6px_rgba(201,162,95,0.08)]"
              />

            </div>

            <!-- TYPE -->
            <div
              class="sm:col-span-2"
            >

              <label
                class="block text-primary/70 text-sm font-medium mb-2"
              >
                Tipo de edredón
              </label>

              <input
                bind:value={comforterType}
                type="text"
                placeholder="Regular o plumas"
                class="w-full rounded-2xl border border-black/[0.06] bg-white px-5 py-3 outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_6px_rgba(201,162,95,0.08)]"
              />

            </div>

            <!-- MESSAGE -->
            <div
              class="sm:col-span-2"
            >

              <label
                class="block text-primary/70 text-sm font-medium mb-2"
              >
                Comentario adicional
              </label>

              <textarea
                bind:value={message}
                rows="3"
                placeholder="Horario de recojo, referencias, etc."
                class="w-full rounded-2xl border border-black/[0.06] bg-white px-5 py-3 outline-none resize-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_6px_rgba(201,162,95,0.08)]"
              ></textarea>

            </div>

          </div>

          <!-- BUTTON -->
          <button
            type="button"
            onclick={sendWhatsApp}
            class="group relative mt-5 w-full overflow-hidden rounded-[1.6rem] bg-primary px-7 py-4 text-white shadow-[0_25px_50px_rgba(25,50,35,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_70px_rgba(25,50,35,0.28)]"
          >

            <!-- SHINE -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >

              <div
                class="absolute inset-y-0 -left-[120%] w-[120px] rotate-12 bg-white/20 blur-2xl transition-all duration-700 group-hover:left-[130%]"
              ></div>

            </div>

            <div
              class="relative z-10 flex items-center justify-center gap-3"
            >

              <span
                class="font-semibold text-[1rem]"
              >
                Solicitar recojo
              </span>

              <ArrowUpRight
                size={20}
                class="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />

            </div>

          </button>

        </div>

      </div>

    </div>

  </div>

</section>