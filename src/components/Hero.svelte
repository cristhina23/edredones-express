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
  class="relative overflow-hidden bg-[#f7f4ef] w-[100vw] max-h-[130vh]"
>

  <!-- BACKGROUND IMAGE -->
  <div class="absolute top-0 right-0 h-full w-[60vw] z-0 pointer-events-none">
    <img
      src={content.hero.image}
      alt="Lavado de edredones"
      class="w-full h-full object-cover object-right"
    />
    <!-- Blend with background -->
    <div class="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#f7f4ef] via-[#f7f4ef]/60 to-transparent"></div>
  </div>

  <!-- CONTENT -->
  <div
    class="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 pt-28 lg:pt-32 "
  >

    <!-- HERO -->
    <div
      class="min-h-[720px] lg:min-h-[760px] flex flex-col"
    >

      <!-- LEFT -->
      <div
        class="max-w-7xl  px-6"
      >

        <!-- BADGE -->
        <span
          class="uppercase tracking-[0.28em] text-accent text-[11px] font-semibold"
        >
          {content.hero.badge}
        </span>

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

        <!-- MINI INFO -->
        <div
          class="mt-8 flex flex-wrap gap-4"
        >

          {#each content.hero.cards as card (card.title)}

            <div
              class="bg-white border border-gray-200 shadow-md rounded-2xl px-4 py-2 flex items-center gap-4"
            >

              <div
                class="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0"
              >
                <BadgeCheck size={18} />
              </div>

              <div>
                <h3
                  class="text-base font-semibold text-primary leading-none"
                >
                  {card.title}
                </h3>

                <p
                  class="text-xs text-text-soft mt-1"
                >
                  {card.subtitle}
                </p>
              </div>

            </div>

          {/each}

        </div>

        <!-- BUTTONS -->
        <div
          class="mt-9 flex flex-wrap gap-4"
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
          class="bg-white rounded-xl border border-accent/70 shadow-md px-6 lg:px-10 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6"
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
                A domicilio por S/10
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
                Profunda
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
                24–48h
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
                Calidad tipo hotel
              </h3>

              <p
                class="text-sm text-text-soft mt-1"
              >
                Premium
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>