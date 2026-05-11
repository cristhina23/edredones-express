<script>
  import { content } from '$lib/data/content';

  import {
    ArrowRight,
    BadgeCheck,
    ShieldCheck,
    Clock3,
    Star,
    Truck,
    House
  } from 'lucide-svelte';

  const whatsappLink = `https://wa.me/${content.site.whatsapp}?text=${content.site.whatsappMessage}`;
</script>

<section
  id="inicio"
  class="relative overflow-hidden bg-[#f7f4ef] w-[100vw]"
>

  <!-- BACKGROUND IMAGE -->
  <div
    class="absolute top-0 right-0 h-full w-full lg:w-[60vw] z-0 pointer-events-none"
  >

    <img
      src={content.hero.image}
      alt="Lavado de edredones"
      class="w-full h-full object-cover object-center lg:object-right opacity-25 lg:opacity-100"
    />

    <!-- OVERLAY MOBILE -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-[#f7f4ef] via-transparent to-[#f7f4ef] lg:hidden"
    ></div>

    <!-- OVERLAY DESKTOP -->
    <div
      class="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#f7f4ef] via-[#f7f4ef]/60 to-transparent hidden lg:block"
    ></div>

  </div>

  <!-- CONTENT -->
  <div
    class="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 pt-28 lg:pt-32"
  >

    <!-- HERO -->
    <div
      class="min-h-[720px] lg:min-h-[760px] flex flex-col"
    >

      <!-- LEFT / CENTERED ON MOBILE -->
      <div
        class="max-w-4xl lg:max-w-7xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-6"
      >

        <!-- BADGE -->
      

        <!-- SECOND BADGE -->
        <div
          class="mt-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2"
        >

          <div
            class="w-2 h-2 rounded-full bg-accent animate-pulse"
          ></div>

          <span
            class="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold"
          >
            {content.hero.badge2}
          </span>

        </div>

        <!-- TITLE -->
        <h1
          class="mt-5 text-[3.7rem] sm:text-[4.6rem] lg:text-[5rem] leading-[0.9] tracking-[-0.06em] text-primary"
        >

          {content.hero.title.line1}


          {content.hero.title.line2}

          <span
            class="block text-accent italic font-medium mt-1"
          >
            {content.hero.title.highlight}
          </span>

        </h1>

        <!-- DESCRIPTION -->
        <p
          class="mt-7 text-[1rem] lg:text-[1.05rem] text-text-soft leading-relaxed max-w-xl"
        >
          {content.hero.description}
        </p>

        <!-- PRICE CARDS -->
        <div
          class="mt-8 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 w-full"
        >

          {#each content.hero.cards as card (card.title)}

            <div
              class="bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.05)] rounded-2xl px-5 py-4 flex items-center gap-4"
            >

              <!-- ICON -->
              <div
                class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0"
              >

                <BadgeCheck size={18} />

              </div>

              <!-- CONTENT -->
              <div>

                <h3
                  class="text-base font-semibold text-primary leading-none"
                >
                  {card.title}
                </h3>

                <!-- PRICE -->
                <div
                  class="mt-2 flex items-end gap-1"
                >

                  <span
                    class="text-primary text-sm font-semibold"
                  >
                    S/
                  </span>

                  <span
                    class="text-primary text-[1.7rem] leading-none tracking-[-0.05em] font-semibold"
                  >
                    {card.subtitle.replace('S/', '').trim()}
                  </span>

                </div>

                <!-- DESCRIPTION -->
                <p
                  class="text-xs text-text-soft mt-2"
                >
                  {card.description}
                </p>

              </div>

            </div>

          {/each}

        </div>

        <!-- BUTTONS -->
        <div
          class="mt-9 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 w-full"
        >

          <!-- PRIMARY -->
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-primary hover:bg-primary-light text-white rounded-2xl px-7 py-4 flex items-center gap-3 shadow-[0_10px_40px_rgba(31,61,43,0.18)] hover:-translate-y-[2px] transition-all duration-500"
          >

            <Truck
              size={18}
              class="group-hover:translate-x-1 transition-transform duration-300"
            />

            <div>

              <p
                class="text-sm font-semibold"
              >
                {content.hero.buttons.primary}
              </p>

              <span
                class="text-xs text-white/70"
              >
                Respuesta inmediata
              </span>

            </div>

          </a>

          <!-- SECONDARY -->
          <a
            href="#como-funciona"
            class="group relative overflow-hidden bg-white text-primary rounded-2xl px-7 py-4 flex items-center gap-3 shadow-md border border-gray-200 transition-all duration-500 hover:-translate-y-[2px]"
          >

            <!-- ANIMATED BACKGROUND -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-accent/30 via-accent/50 to-accent/70 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"
            ></div>

            <!-- CONTENT -->
            <div
              class="relative z-10 flex items-center gap-3"
            >

              <ArrowRight
                size={18}
                class="group-hover:translate-x-1 group-hover:text-accent transition-all duration-300"
              />

              <span
                class="text-sm font-semibold group-hover:text-primary"
              >
                {content.hero.buttons.secondary}
              </span>

            </div>

          </a>

        </div>

      </div>

      <!-- FEATURES -->
      <div
        class="relative mt-8"
      >

        <div
          class="bg-white rounded-xl border border-accent/70 shadow-[0_15px_40px_rgba(0,0,0,0.05)] px-6 lg:px-10 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >

          <!-- ITEM -->
          <div
            class="flex items-start gap-4"
          >

            <div
              class="text-accent mt-1 shrink-0"
            >

              <House size={22} />

            </div>

            <div>

              <h3
                class="font-semibold text-primary text-sm"
              >
                Recojo y entrega
              </h3>

              <p
                class="text-sm text-text-soft mt-1"
              >
                Solo S/10 ambos tramos
              </p>

            </div>

          </div>

          <!-- ITEM -->
          <div
            class="flex items-start gap-4"
          >

            <div
              class="text-accent mt-1 shrink-0"
            >

              <ShieldCheck size={22} />

            </div>

            <div>

              <h3
                class="font-semibold text-primary text-sm"
              >
                Higiene y desinfección
              </h3>

              <p
                class="text-sm text-text-soft mt-1"
              >
                Lavado profundo y seguro
              </p>

            </div>

          </div>

          <!-- ITEM -->
          <div
            class="flex items-start gap-4"
          >

            <div
              class="text-accent mt-1 shrink-0"
            >

              <Clock3 size={22} />

            </div>

            <div>

              <h3
                class="font-semibold text-primary text-sm"
              >
                Servicio rápido
              </h3>

              <p
                class="text-sm text-text-soft mt-1"
              >
                48–72h
              </p>

            </div>

          </div>

          <!-- ITEM -->
          <div
            class="flex items-start gap-4"
          >

            <div
              class="text-accent mt-1 shrink-0"
            >

              <Star size={22} />

            </div>

            <div>

              <h3
                class="font-semibold text-primary text-sm"
              >
                Calidad Premium
              </h3>

              <p
                class="text-sm text-text-soft mt-1"
              >
                Limpio, seco y esponjoso
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>