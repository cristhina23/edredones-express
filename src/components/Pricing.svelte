<script>
  import {
    BadgeCheck,
    MessageCircleMore
  } from 'lucide-svelte';

  import { content } from '$lib/data/content';
</script>

<section
  id="precios"
  class="relative py-12 lg:py-16 bg-background overflow-hidden"
>

  <!-- SOFT GLOWS -->
  <div
    class="absolute top-0 left-[15%] w-[220px] h-[220px] rounded-full bg-accent/10 blur-[120px] pointer-events-none"
  ></div>

  <div
    class="absolute bottom-0 right-[10%] w-[240px] h-[240px] rounded-full bg-primary/8 blur-[120px] pointer-events-none"
  ></div>

  <div
    class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
  >

    <!-- CONTAINER -->
    <div
      class="relative bg-white/70 backdrop-blur-xl border border-black/[0.04] rounded-[2.3rem] px-5 py-6 lg:px-10 lg:py-8 shadow-[0_15px_50px_rgba(0,0,0,0.04)]"
    >

      <!-- HEADER -->
      <div class="text-center">

        <span
          class="uppercase tracking-[0.24em] text-accent text-[11px] font-semibold"
        >
          {content.pricing.badge}
        </span>

        <h2
          class="mt-2 text-[2rem] lg:text-[3rem] leading-[1] tracking-[-0.05em] text-primary"
        >
          {content.pricing.title}
        </h2>

      </div>

      <!-- CONTENT -->
      <div
        class="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-5 items-stretch"
      >

        <!-- LEFT -->
        <div
          class="bg-white rounded-[2rem] border border-black/[0.04] px-5 py-5 lg:px-7 lg:py-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center gap-5"
        >

          <!-- IMAGE -->
          <div class="relative shrink-0">

            <img
              src={content.pricing.main.image}
              alt="Edredones"
              class="w-[180px] lg:w-[250px] object-contain"
            />

            <!-- BADGE -->
            <div
              class="absolute top-1/2 right-0 -translate-y-1/2 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-[0_10px_25px_rgba(201,162,95,0.35)]"
            >
              <BadgeCheck
                size={24}
                class="text-white"
              />
            </div>

          </div>

          <!-- INFO -->
          <div
            class="flex-1 text-center sm:text-left"
          >

            <span
              class="uppercase tracking-[0.15em] text-primary/80 text-sm font-semibold"
            >
              {content.pricing.main.label}
            </span>

            <p
              class="mt-1 text-text-soft text-sm leading-relaxed max-w-[260px]"
            >
              {content.pricing.main.description}
            </p>

            <!-- PRICE -->
            <div
              class="mt-4 flex items-end gap-1 justify-center sm:justify-start"
            >

              <span
                class="text-primary text-[1.7rem] font-semibold"
              >
                S/
              </span>

              <span
                class="text-primary text-[4rem] leading-none tracking-[-0.06em]"
              >
                {content.pricing.main.price}
              </span>

            </div>

            <p
              class="mt-2 text-sm text-text-soft"
            >
              {content.pricing.main.note}
            </p>

          </div>

        </div>

        <!-- RIGHT -->
        <div
          class="relative overflow-visible rounded-[2rem] bg-primary shadow-[0_25px_60px_rgba(25,50,35,0.22)]"
        >

          <!-- LIGHT -->
          <div
            class="absolute top-0 right-0 w-[220px] h-[220px] bg-accent/20 blur-[100px]"
          ></div>

          <!-- EXACT LABEL -->
          <div
            class="absolute -top-[8px] -left-2 z-20"
          >

            <div
              class="relative bg-accent text-white px-5 py-2 text-sm font-semibold  rounded-br-md shadow-[0_10px_25px_rgba(201,162,95,0.30)] z-50"
            >
              ¡Ahorra más!

              <!-- LITTLE TAB -->
              <div
                class="absolute left-0 bottom-[-8px] w-0 h-0 border-l-[8px] border-l-[#b88d45] border-t-[8px] rotate-[180deg] border-t-transparent"
              ></div>
              

            </div>

          </div>

          <div
            class="relative z-10 px-7 py-6"
          >

            <h3
              class="uppercase tracking-[0.14em] text-white/90 text-xs font-semibold text-center"
            >
              Promociones
            </h3>

            <!-- LIST -->
            <div
              class="mt-5 flex flex-col"
            >

              {#each content.pricing.promos as promo (promo.quantity)}

                <div
                  class="flex items-center justify-between py-4 border-b border-white/10 last:border-none"
                >

                  <h4
                    class="text-white text-[1.1rem] font-medium"
                  >
                    {promo.quantity}
                  </h4>

                  <div class="text-right">

                    {#if promo.price}

                      <div
                        class="flex items-end gap-1 justify-end"
                      >

                        <span
                          class="text-accent text-base font-semibold"
                        >
                          S/
                        </span>

                        <span
                          class="text-accent text-[2.2rem] leading-none tracking-[-0.05em]"
                        >
                          {promo.price}
                        </span>

                      </div>

                      <p
                        class="mt-1 text-white/50 text-xs"
                      >
                        {promo.save}
                      </p>

                    {:else}

                      <a
                        href={`https://wa.me/${content.site.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-2 text-white/85 hover:text-white transition-colors"
                      >

                        <MessageCircleMore size={16} />

                        <span class="text-sm">
                          Consulta por WhatsApp
                        </span>

                      </a>

                    {/if}

                  </div>

                </div>

              {/each}

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>