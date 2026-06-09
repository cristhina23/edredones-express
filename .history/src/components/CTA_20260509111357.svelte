<script>
  import {
    ArrowUpRight,
    MessageCircleMore
  } from 'lucide-svelte';

  import { content } from '$lib/data/content';

  const whatsappLink = `https://wa.me/${content.site.whatsapp}?text=${content.site.whatsappMessage}`;
</script>

<section
  class="relative py-10 lg:py-12 bg-background overflow-hidden"
>

  <!-- FLOATING GLOWS -->
  <div
    class="absolute top-[-80px] left-[8%] w-[320px] h-[320px] rounded-full bg-accent/10 blur-[140px] pointer-events-none"
  ></div>

  <div
    class="absolute bottom-[-120px] right-[5%] w-[380px] h-[380px] rounded-full bg-primary/10 blur-[160px] pointer-events-none"
  ></div>

  <div
    class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
  >

    <!-- MAIN CARD -->
    <div
      class="relative overflow-hidden rounded-[2.8rem] border border-black/[0.04] bg-white/70 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.05)]"
    >

      <!-- LIGHT -->
      <div
        class="absolute top-0 right-0 w-[420px] h-[420px] bg-accent/10 blur-[140px]"
      ></div>

      <div
        class="grid lg:grid-cols-[420px_1fr] items-center"
      >

        <!-- IMAGE SIDE -->
        <div
          class="relative h-[340px] lg:h-full overflow-hidden"
        >

          <!-- IMAGE -->
          <img
            src={content.cta.image}
            alt="Recojo de edredones"
            class="absolute inset-0 w-full h-full object-cover object-[70%]"
          />

          <!-- OVERLAY -->
          <div
            class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0)_100%)]"
          ></div>

          <!-- FLOATING BADGE -->
          <div
            class="absolute left-6 bottom-6 rounded-2xl bg-white/85 backdrop-blur-xl px-5 py-4 border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.10)]"
          >

            <div
              class="flex items-center gap-3"
            >

              <div
                class="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center shadow-lg"
              >

                <MessageCircleMore
                  size={22}
                  class="text-white"
                />

              </div>

              <div>

                <p
                  class="text-primary text-sm font-semibold"
                >
                  Atención inmediata
                </p>

                <p
                  class="text-primary/55 text-xs mt-1"
                >
                  Respuesta rápida por WhatsApp
                </p>

              </div>

            </div>

          </div>

        </div>

        <!-- CONTENT -->
        <div
          class="relative px-7 py-10 lg:px-14 lg:py-14"
        >

          <!-- BADGE -->
          <span
            class="uppercase tracking-[0.22em] text-accent text-[11px] font-semibold"
          >
            {content.cta.badge}
          </span>

          <!-- TITLE -->
          <h2
            class="mt-4 text-2xl lg:text-4xl leading-[0.92] tracking-[-0.06em] text-primary max-w-[760px]"
          >
            {content.cta.title}

            <span
              class="block mt-3 text-accent italic"
            >
              {content.cta.highlighted}
            </span>

          </h2>

          <!-- DESCRIPTION -->
          <p
            class="mt-7 text-primary/70 leading-relaxed text-[1.05rem] max-w-[640px]"
          >
            {content.cta.description}
          </p>

          <!-- ACTIONS -->
          <div
            class="mt-10 flex flex-col sm:flex-row gap-4"
          >

            <!-- PRIMARY -->
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              class="group relative overflow-hidden inline-flex items-center justify-center gap-4 rounded-[1.7rem] bg-primary px-7 py-5 text-white shadow-[0_25px_50px_rgba(25,50,35,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_70px_rgba(25,50,35,0.30)]"
            >

              <!-- SHINE -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >

                <div
                  class="absolute inset-y-0 -left-[120%] w-[120px] rotate-12 bg-white/20 blur-2xl transition-all duration-700 group-hover:left-[130%]"
                ></div>

              </div>

              <!-- ICON -->
              <div
                class="relative z-10 w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center"
              >

                <MessageCircleMore
                  size={24}
                  strokeWidth={2}
                />

              </div>

              <!-- TEXT -->
              <div
                class="relative z-10 text-left"
              >

                <span
                  class="block text-[1rem] font-semibold"
                >
                  {content.cta.button.text}
                </span>

                <span
                  class="block mt-1 text-sm text-white/65"
                >
                  {content.cta.button.subtext}
                </span>

              </div>

            </a>

            <!-- SECONDARY -->
            <a
              href="#precios"
              class="group inline-flex items-center justify-center gap-3 rounded-[1.7rem] border border-black/[0.06] bg-white px-7 py-5 text-primary shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
            >

              <span
                class="font-semibold"
              >
                Ver precios
              </span>

              <ArrowUpRight
                size={20}
                class="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />

            </a>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>