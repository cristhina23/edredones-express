<script>
  import {
    CheckCircle2,
    Star
  } from 'lucide-svelte';

  import { content } from '$lib/data/content';
</script>

<section
  id="cobertura"
  class="relative py-10 lg:py-12 bg-background overflow-hidden"
>

  <!-- SOFT GLOWS -->
  <div
    class="absolute top-0 left-[12%] w-[240px] h-[240px] rounded-full bg-accent/10 blur-[120px] pointer-events-none"
  ></div>

  <div
    class="absolute bottom-0 right-[8%] w-[260px] h-[260px] rounded-full bg-primary/8 blur-[130px] pointer-events-none"
  ></div>

  <div
    class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
  >

    <!-- WRAPPER -->
    <div
      class="grid lg:grid-cols-2 gap-5"
    >

      <!-- COVERAGE CARD -->
      <div
        class="grid md:grid-cols-[0.9fr_1fr] overflow-hidden rounded-[2rem] border border-black/[0.04] bg-white/75 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
      >

        <!-- LEFT -->
        <div
          class="relative overflow-hidden bg-primary px-7 py-8"
        >

          <!-- LIGHT -->
          <div
            class="absolute top-0 right-0 w-[180px] h-[180px] bg-accent/20 blur-[90px]"
          ></div>

          <div class="relative z-10">

            <span
              class="uppercase tracking-[0.22em] text-accent text-[11px] font-semibold"
            >
              {content.coverage.badge}
            </span>

            <h2
              class="mt-3 text-[2rem] leading-[1] tracking-[-0.04em] text-white max-w-[220px]"
            >
              {content.coverage.title}
            </h2>

            <!-- ZONES -->
            <div
              class="mt-7 flex flex-col gap-4"
            >

              {#each content.coverage.zones as zone (zone)}

                <div
                  class="flex items-center gap-3"
                >

                  <div
                    class="w-5 h-5 rounded-full border border-accent/60 flex items-center justify-center"
                  >

                    <CheckCircle2
                      size={12}
                      strokeWidth={2.4}
                      class="text-accent"
                    />

                  </div>

                  <span
                    class="text-white/90 text-[1rem]"
                  >
                    {zone}
                  </span>

                </div>

              {/each}

            </div>

          </div>

        </div>

        <!-- MAP -->
        <div
          class="relative min-h-[240px] md:min-h-full"
        >

          <img
            src={content.coverage.mapImage}
            alt="Mapa de cobertura"
            class="absolute inset-0 w-full h-[120%] object-cover object-[35%_center]"
          />

        </div>

      </div>

      <!-- TESTIMONIAL CARD -->
      <div
        class="relative overflow-hidden rounded-[2rem] border border-black/[0.04] bg-white/75 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.04)] px-7 py-7 flex items-center"
      >

        <!-- GLOW -->
        <div
          class="absolute bottom-0 right-0 w-[180px] h-[180px] bg-accent/10 blur-[100px]"
        ></div>

        <div
          class="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6"
        >

          <!-- IMAGE -->
          <div
            class="shrink-0"
          >

            <img
              src={content.coverage.testimonial.image}
              alt="Cliente feliz"
              class="w-32 h-32 rounded-full object-cover border border-black/[0.04]"
            />

          </div>

          <!-- CONTENT -->
          <div
            class="text-center sm:text-left"
          >

            <span
              class="uppercase tracking-[0.22em] text-accent text-[11px] font-semibold"
            >
              {content.coverage.testimonial.badge}
            </span>

            <p
              class="mt-4 text-primary/80 leading-relaxed"
            >
              “{content.coverage.testimonial.quote}”
            </p>

            <!-- STARS -->
            <div
              class="mt-5 flex items-center justify-center sm:justify-start gap-1"
            >

              {#each [1, 2, 3, 4, 5] as star (star)}

                <Star
                  size={18}
                  fill="currentColor"
                  strokeWidth={1.5}
                  class="text-accent"
                />

              {/each}

            </div>

            <p
              class="mt-3 text-sm text-primary/50"
            >
              — {content.coverage.testimonial.author}
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>