<script>
  import {
    ShieldCheck,
    Feather,
    Gift,
    Truck,
    MessageCircleMore
  } from 'lucide-svelte';

  import { content } from '$lib/data/content';
</script>

<section
  id="precios"
  class="relative py-14 lg:py-18 bg-background overflow-hidden"
>

  <!-- GLOWS -->
  <div
    class="absolute top-0 left-[12%] w-[220px] h-[220px] rounded-full bg-accent/30 blur-[120px] pointer-events-none"
  ></div>

  <div
    class="absolute bottom-0 right-[10%] w-[220px] h-[220px] rounded-full bg-primary/8 blur-[120px] pointer-events-none"
  ></div>

  <div
    class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
  >

    <!-- CONTAINER -->
    <div
      class="relative rounded-[2.5rem] border border-black/[0.04] bg-white/75 backdrop-blur-xl px-5 py-8 lg:px-8 lg:py-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
    >

      <!-- HEADER -->
      <div class="text-center">

        <span
          class="uppercase tracking-[0.24em] text-accent text-[11px] font-semibold"
        >
          {content.pricing.badge}
        </span>

        <h2
          class="mt-3 text-[2.1rem] lg:text-[3.5rem] leading-[0.95] tracking-[-0.05em] text-primary"
        >
          {content.pricing.title}
        </h2>

      </div>

      <!-- CARDS -->
      <div
        class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch"
      >

        <!-- REGULARES -->
        <div
          class="relative rounded-2xl border border-accent/45 bg-white px-6 py-7 shadow-lg   flex flex-col justify-between"
        >

          <!-- IMAGE -->
          <img
            src="/pricing.png"
            alt="Edredones"
            class="absolute bottom-4 right-4 w-24 opacity-[0.95]"
          />

          <!-- CONTENT -->
          <div
            class="text-center"
          >

            <!-- ICON -->
            <div
              class="mx-auto w-16 h-16 rounded-full bg-accent/8 flex items-center justify-center"
            >

              <ShieldCheck
                size={28}
                class="text-accent"
              />

            </div>

            <!-- TITLE -->
            <h3
              class="mt-2 uppercase tracking-[0.12em] text-primary text-[0.95rem] font-semibold"
            >
              Edredones regulares
            </h3>

            <!-- LINE -->
            <div
              class="mx-auto mt-4 w-10 h-[2px] rounded-full bg-accent/40"
            ></div>

            <!-- TEXT -->
            <p
              class="mt-4 text-text-soft leading-[1.8] text-[0.98rem]"
            >
              Lavado premium con secado completo para evitar humedad y malos olores.
            </p>

            <!-- PRICE -->
            <div
              class="mt-7 flex items-end justify-center gap-1"
            >

              <span
                class="text-primary text-[1.2rem]"
              >
                S/
              </span>

              <span
                class="text-primary text-[3.5rem] leading-none tracking-[-0.06em]"
              >
                35
              </span>

            </div>

          </div>

          <!-- NOTE -->
          <div
            class=" pt-2 border-t border-black/[0.06] flex items-center justify-center gap-3 text-text-soft"
          >

            <Truck
              size={16}
              class="text-accent shrink-0"
            />

            <p
              class="text-[0.95rem]"
            >
              + S/10 delivery
            </p>

          </div>

        </div>

        <!-- PLUMAS -->
        <div
          class="relative rounded-[2rem] border border-accent/45 bg-white px-6 py-6 shadow-lg flex flex-col justify-between"
        >

          <!-- CONTENT -->
          <div
            class="text-center"
          >

            <!-- ICON -->
            <div
              class="mx-auto w-16 h-16 rounded-full bg-accent/8 flex items-center justify-center"
            >

              <Feather
                size={28}
                class="text-accent"
              />

            </div>

            <!-- TITLE -->
            <h3
              class="mt-2 uppercase tracking-[0.12em] text-primary text-[0.95rem] font-semibold"
            >
              Edredones plumas
            </h3>

            <!-- LINE -->
            <div
              class="mx-auto mt-4 w-10 h-[2px] rounded-full bg-accent/40"
            ></div>

            <!-- TEXT -->
            <p
              class="mt-4 text-text-soft leading-[1.8] text-[0.98rem]"
            >
              Cuidado especial para conservar volumen y suavidad.
            </p>

            <!-- PRICE -->
            <div
              class="mt-7 flex items-end justify-center gap-1"
            >

              <span
                class="text-primary text-[1.2rem]"
              >
                S/
              </span>

              <span
                class="text-primary text-[3.5rem] leading-none tracking-[-0.06em]"
              >
                45
              </span>

            </div>

          </div>

          <!-- NOTE -->
          <div
            class="mt-2 pt-5 border-t border-black/[0.06] flex items-center justify-center gap-3 text-text-soft"
          >

            <Truck
              size={16}
              class="text-accent shrink-0"
            />

            <p
              class="text-[0.95rem]"
            >
              + S/10 delivery
            </p>

          </div>

        </div>

        <!-- PROMOS -->
        <div
          class="relative overflow-visible rounded-[2rem] bg-primary shadow-[0_20px_50px_rgba(25,50,35,0.15)]"
        >

          <!-- GLOW -->
          <div
            class="absolute top-0 right-0 w-[160px] h-[160px] bg-accent/20 blur-[90px]"
          ></div>

          <!-- LABEL -->
          <div
            class="absolute -top-[10px] -left-2 z-20"
          >

            <div
              class="relative bg-accent text-white px-5 py-2.5 text-sm font-semibold rounded-br-lg shadow-[0_10px_25px_rgba(201,162,95,0.30)]"
            >

              Promociones

              <!-- TAB -->
              <div
                class="absolute left-0 bottom-[-8px] w-0 h-0 border-l-[8px] border-l-[#b88d45] border-t-[8px] rotate-[180deg] border-t-transparent"
              ></div>

            </div>

          </div>

          <!-- CONTENT -->
          <div
            class="relative z-10 px-6 py-7 flex flex-col h-full"
          >

            <!-- TITLE -->
            <div
              class="flex items-center justify-center gap-3 text-center my-8"
            >

              <Gift
                size={17}
                class="text-accent"
              />

              <h3
                class="uppercase tracking-[0.14em] text-white text-[0.78rem] font-semibold"
              >
                Consulta promociones especiales
              </h3>

            </div>

            <!-- ITEMS -->
            <div
              class="mt-2 flex flex-col"
            >

              
              {#each content.pricing.promos as promo (promo)}

                <div
                  class="flex items-center justify-between gap-4 py-5 border-b border-white/10 last:border-none"
                >

                  <!-- LEFT -->
                  <div
                    class="flex items-center gap-4"
                  >

                    <div
                      class="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center shrink-0"
                    >

                      {#if promo.includes('3')}

                        <Gift
                          size={20}
                          class="text-accent"
                        />

                      {:else}

                        <Truck
                          size={20}
                          class="text-accent"
                        />

                      {/if}

                    </div>

                    <h4
                      class="text-white text-[1rem] leading-snug font-medium"
                    >
                      {promo}
                    </h4>

                  </div>

                  <!-- BUTTON -->
                  <a
                    href={`https://wa.me/${content.site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 text-accent hover:text-white transition-colors shrink-0"
                  >

                    <MessageCircleMore size={16} />

                    <span
                      class="text-[0.95rem]"
                    >
                      Consultar
                    </span>

                  </a>

                </div>

              {/each}

            </div>

          </div>

        </div>

      </div>

      <!-- LEGAL -->
      <div
        class="mt-5 rounded-[1.3rem] border border-black/[0.04] bg-background/70 px-5 py-4"
      >

        <p
          class="text-sm text-text-soft leading-relaxed text-center"
        >
          {content.pricing.legal}
        </p>

      </div>

    </div>

  </div>

</section>