<script>
  import { CircleX } from 'lucide-svelte';
  import { content } from '$lib/data/content';
</script>

<section
  class="py-20 lg:py-28 bg-background"
>

  <div
    class="max-w-7xl mx-auto px-6 lg:px-10"
  >

    <div
      class="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-[2.5rem] overflow-hidden border border-black/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
    >

      <!-- LEFT -->
      <div
        class="p-8 lg:p-14"
      >

        <!-- BADGE -->
        <span
          class="uppercase tracking-[0.25em] text-accent text-xs font-semibold"
        >
          {content.problems.badge}
        </span>

        <!-- TITLE -->
        <h2
          class="mt-4 text-[2.7rem] lg:text-[3.4rem] leading-[0.95] tracking-[-0.05em] text-primary max-w-[480px]"
        >
          {content.problems.title}
        </h2>

        <!-- PROBLEMS -->
        <div
          class="mt-8 flex flex-col gap-5"
        >

          {#each content.problems.problems as problem (problem)}

            <div
              class="flex items-start gap-4"
            >

              <!-- ICON -->
              <div
                class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5"
              >
                <CircleX size={16} />
              </div>

              <!-- TEXT -->
              <p
                class="text-text-soft text-[1rem] leading-relaxed"
              >
                {problem}
              </p>

            </div>

          {/each}

        </div>

        <!-- CONCLUSION -->
        <p
          class="mt-10 text-primary font-semibold text-[1.05rem]"
        >
          {content.problems.conclusion}
        </p>

      </div>

      <!-- RIGHT IMAGE -->
      <div
        class="relative h-full min-h-[420px] lg:min-h-[560px]"
      >

        <img
          src={content.problems.image}
          alt="Problema lavando edredón"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <!-- SOFT OVERLAY -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/[0.03] to-transparent"
        ></div>

      </div>

    </div>

  </div>

</section>