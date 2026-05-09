
<script>
  import {
    MessageCircleMore,
    ChevronRight,
    Check,
    X
  } from 'lucide-svelte';

  import { content } from '$lib/data/content';

  let showLegal = $state(false);

  const whatsappLink = `https://wa.me/${content.site.whatsapp}?text=${content.site.whatsappMessage}`;
</script>

<footer
  id="contacto"
  class="relative pt-14 pb-8 bg-primary overflow-hidden"
>

  <!-- GLOWS -->
  <div
    class="absolute top-0 left-[10%] w-[260px] h-[260px] rounded-full bg-accent/10 blur-[120px] pointer-events-none"
  ></div>

  <div
    class="absolute bottom-[-80px] right-[8%] w-[320px] h-[320px] rounded-full bg-accent/10 blur-[140px] pointer-events-none"
  ></div>

  <div
    class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
  >

    <!-- MAIN -->
    <div
      class="grid lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr] gap-12 pb-10 border-b border-white/10"
    >

      <!-- BRAND -->
      <div>

        <!-- LOGO -->
        <div
          class="flex items-center gap-4"
        >

          <img
            src="/favicon.png"
            alt={content.site.name}
            class="w-16 h-16 object-contain"
          />

          <div>

            <h2
              class="text-white text-xl font-semibold leading-none"
            >
              Edredones
            </h2>

            <span
              class="uppercase tracking-[0.35em] italic text-accent text-xs font-medium"
            >
              Express
            </span>

          </div>

        </div>

        <!-- DESCRIPTION -->
        <p
          class="mt-6 text-white/65 leading-relaxed max-w-[320px]"
        >
          {content.footer.description}
        </p>

      </div>

      <!-- QUICK LINKS -->
      <div>

        <h3
          class="text-white font-semibold text-sm uppercase tracking-[0.18em]"
        >
          {content.footer.quickLinks.title}
        </h3>

        <div
          class="mt-5 flex flex-col gap-3"
        >

          {#each content.footer.quickLinks.links as link (link.label)}

            <a
              href={link.href}
              class="group flex items-center gap-2 text-white/65 hover:text-white transition-colors duration-300"
            >

              <ChevronRight
                size={16}
                class="transition-transform duration-300 group-hover:translate-x-1"
              />

              <span class="text-sm">
                {link.label}
              </span>

            </a>

          {/each}

        </div>

      </div>

      <!-- HELP -->
      <div>

        <h3
          class="text-white font-semibold text-sm uppercase tracking-[0.18em]"
        >
          {content.footer.help.title}
        </h3>

        <div
          class="mt-5 flex flex-col gap-3"
        >

          {#each content.footer.help.links as link (link.label)}

            {#if link.action === 'legal'}

              <button
                type="button"
                onclick={() => showLegal = true}
                class="group flex items-center gap-2 text-left text-white/65 hover:text-white transition-colors duration-300"
              >

                <ChevronRight
                  size={16}
                  class="transition-transform duration-300 group-hover:translate-x-1"
                />

                <span class="text-sm">
                  {link.label}
                </span>

              </button>

            {:else}

              <a
                // eslint-disable-next-line svelte/no-navigation-without-resolve
                href={link.href}
                class="group flex items-center gap-2 text-white/65 hover:text-white transition-colors duration-300"
              >

                <ChevronRight
                  size={16}
                  class="transition-transform duration-300 group-hover:translate-x-1"
                />

                <span class="text-sm">
                  {link.label}
                </span>

              </a>

            {/if}

          {/each}

        </div>

      </div>

      <!-- CONTACT -->
      <div>

        <h3
          class="text-white font-semibold text-sm uppercase tracking-[0.18em]"
        >
          {content.footer.contact.title}
        </h3>

        <!-- PHONE -->
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          class="group mt-5 inline-flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-5 py-4 hover:bg-white/10 transition-all duration-300"
        >

          <div
            class="w-11 h-11 rounded-2xl bg-accent/15 flex items-center justify-center"
          >

            <MessageCircleMore
              size={22}
              class="text-accent"
            />

          </div>

          <div>

            <span
              class="block text-white text-lg font-semibold"
            >
              {content.footer.contact.phone}
            </span>

            <span
              class="block mt-1 text-white/55 text-xs"
            >
              {content.footer.contact.schedule}
            </span>

          </div>

        </a>

      </div>

    </div>

   <!-- COPYRIGHT -->
<div
  class="pt-7 flex flex-col items-center gap-3 text-center"
>

  <p
    class="text-white/45 text-sm"
  >
    {content.footer.copyright}
  </p>

  <!-- CREDIT -->
  <a
    href="https://cctechsolutions.com"
    target="_blank"
    rel="noopener noreferrer"
    class="group inline-flex items-center gap-2 text-white/35 hover:text-white/55 transition-all duration-300"
  >

    <span
      class="text-xs tracking-[0.08em]"
    >
      Hecho con
    </span>

    <!-- HEART -->
    <div
      class="relative flex items-center justify-center"
    >

      <!-- GLOW -->
      <div
        class="absolute w-5 h-5 rounded-full bg-accent/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-4 h-4 text-accent animate-pulse relative z-10"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>

    </div>

    <span
      class="text-xs tracking-[0.08em]"
    >
      por CC Tech Solutions
    </span>

  </a>

</div>

  </div>

  <!-- LEGAL MODAL -->
  {#if showLegal}

    <div
      class="fixed inset-0 z-[999] flex items-center justify-center p-5"
    >

      <!-- BACKDROP -->
      <button
        type="button"
        class="absolute inset-0 bg-black/40 backdrop-blur-md"
        onclick={() => showLegal = false}
      ></button>

      <!-- MODAL -->
      <div
        class="relative z-10 w-full max-w-2xl rounded-[2rem] border border-black/[0.05] bg-white/90 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.20)] overflow-hidden"
      >

        <!-- HEADER -->
        <div
          class="flex items-center justify-between px-7 py-6 border-b border-black/[0.05]"
        >

          <div>

            <span
              class="uppercase tracking-[0.22em] text-accent text-[11px] font-semibold"
            >
              Términos del servicio
            </span>

            <h3
              class="mt-2 text-[2rem] leading-none tracking-[-0.04em] text-primary"
            >
              {content.legal.title}
            </h3>

          </div>

          <!-- CLOSE -->
          <button
            type="button"
            onclick={() => showLegal = false}
            class="w-11 h-11 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center"
          >

            <X
              size={20}
              class="text-primary"
            />

          </button>

        </div>

        <!-- CONTENT -->
        <div
          class="px-7 py-7 flex flex-col gap-5"
        >

          {#each content.legal.items as item (item)}

            <div
              class="flex items-start gap-4"
            >

              <!-- ICON -->
              <div
                class="mt-0.5 w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center shrink-0"
              >

                <Check
                  size={15}
                  strokeWidth={3}
                  class="text-accent"
                />

              </div>

              <!-- TEXT -->
              <p
                class="text-primary/75 leading-relaxed"
              >
                {item}
              </p>

            </div>

          {/each}

        </div>

      </div>

    </div>

  {/if}

</footer>