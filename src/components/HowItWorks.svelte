<script>
  import {
    MessageCircleMore,
    Truck,
    Sparkles
  } from 'lucide-svelte';

  import { content } from '$lib/data/content';

  const stepsIcons = [
    MessageCircleMore,
    Truck,
    Sparkles
  ];
</script>

<section
  id="como-funciona"
  class="relative pt-6 pb-12 bg-background overflow-hidden"
>

  
  <div
    class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-[160px] rounded-full bg-accent/8 blur-[100px] pointer-events-none"
  ></div>

  <!-- CONTENT -->
  <div
    class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
  >

    <!-- HEADER -->
    <div class="text-center">

      <span
        class="uppercase tracking-[0.25em] text-accent text-xs font-semibold"
      >
        {content.howItWorks.badge}
      </span>

      <h2
        class="mt-4 text-[2.8rem] lg:text-[4rem] leading-[0.95] tracking-[-0.05em] text-primary"
      >
        {content.howItWorks.title}
      </h2>

    </div>

    <!-- STEPS -->
    <div
      class="mt-16 grid lg:grid-cols-3 gap-14 lg:gap-8 relative"
    >

      {#each content.howItWorks.steps as step, index (step.title)}

        <div
          class="relative flex flex-col items-center text-center"
        >

          <!-- CONNECTOR -->
          {#if index < content.howItWorks.steps.length - 1}

            <div
              class="hidden lg:block absolute top-10 left-[64%] w-[72%] border-t border-dashed border-accent/30"
            ></div>

          {/if}

          <!-- ICON -->
          <div
            class="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center overflow-hidden border border-white/10 shadow-[0_15px_40px_rgba(25,50,35,0.18)]"
          >

            <!-- LIGHT REFLECTION -->
            <div
              class="absolute top-2 left-3 w-8 h-8 rounded-full bg-white/10 blur-md"
            ></div>

            <!-- ICON -->
            <svelte:component
              this={stepsIcons[index]}
              size={34}
              strokeWidth={1.45}
              class="relative z-10 text-white"
            />

          </div>

          <!-- TITLE -->
          <div
            class="mt-6 flex items-center gap-3"
          >

            <!-- NUMBER -->
            <div
              class="w-8 h-8 rounded-full bg-accent/15 text-accent flex items-center justify-center text-sm font-semibold shrink-0"
            >
              {index + 1}
            </div>

            <!-- TITLE -->
            <h3
              class="text-[1.35rem] font-semibold text-primary tracking-[-0.03em]"
            >
              {step.title}
            </h3>

          </div>

          <!-- DESCRIPTION -->
          <p
            class="mt-4 text-text-soft leading-relaxed max-w-[290px]"
          >
            {step.description}
          </p>

        </div>

      {/each}

    </div>

  </div>

</section>