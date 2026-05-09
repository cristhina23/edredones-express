<script>
  import {
    BadgeCheck,
    Leaf,
    ThumbsUp,
    Heart
  } from 'lucide-svelte';

  import { content } from '$lib/data/content';

  const icons = [
    BadgeCheck,
    Leaf,
    ThumbsUp,
    Heart
  ];
</script>

<section
  id="nosotros"
  class="relative py-10 lg:py-12 bg-background overflow-hidden"
>

  <!-- SOFT GLOW -->
  <div
    class="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-accent/10 blur-[120px] pointer-events-none"
  ></div>

  <div
    class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
  >

    <!-- MAIN CARD -->
    <div
      class="grid lg:grid-cols-[1fr_340px] items-center gap-8 bg-white/75 backdrop-blur-xl border border-black/[0.04] rounded-[2rem] p-6 lg:px-10 lg:py-7 shadow-xs"
    >

      <!-- LEFT -->
      <div>

        <!-- BADGE -->
        <div class="text-center text-left">

          <span
            class="uppercase tracking-[0.24em] text-accent text-md text-center font-semibold"
          >
            {content.whyUs.badge}
          </span>

        </div>

        <!-- FEATURES -->
        <div
          class="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >

          {#each content.whyUs.items as item, index (item.title)}

            <div
              class="flex flex-col items-center text-center"
            >

              <!-- ICON -->
              <div
                class="relative flex items-center justify-center"
              >

                <!-- SOFT GLOW -->
                <div
                  class="absolute w-10 h-10 rounded-full bg-accent/10 blur-2xl"
                ></div>

                <svelte:component
                  this={icons[index]}
                  size={28}
                  strokeWidth={1.8}
                  class="relative z-10 text-primary"
                />

              </div>

              <!-- TEXT -->
              <div class="mt-4">

                <h3
                  class="text-primary text-lg font-medium  leading-snug"
                >
                  {item.title}
                </h3>

                <p
                  class="mt-2 text-sm leading-relaxed text-primary/65"
                >
                  {item.description}
                </p>

              </div>

            </div>

          {/each}

        </div>

      </div>

      <!-- IMAGE -->
      <div
        class="relative"
      >

        <!-- GLOW -->
        <div
          class="absolute inset-0 bg-accent/10 blur-[70px] rounded-full scale-75"
        ></div>

        <!-- IMAGE -->
        <div
          class="relative overflow-hidden rounded-[1.6rem]"
        >

          <img
            src={content.whyUs.image}
            alt="Edredones premium"
            class="w-full h-[180px] object-cover"
          />

        </div>

      </div>

    </div>

  </div>

</section>