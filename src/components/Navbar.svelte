<script>
  import { content } from '$lib/data/content';
  import { onMount } from 'svelte';

  import {
    MessageCircleMore,
    Menu,
    X
  } from 'lucide-svelte';

  let isOpen = $state(false);
  let activeSection = $state('inicio');

  const whatsappLink = `https://wa.me/${content.site.whatsapp}?text=${content.site.whatsappMessage}`;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
    isOpen = false;
  }

  onMount(() => {

    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }

        });

      },

      {
        threshold: 0.45,
      }

    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();

  });
</script>

<header class="fixed top-0 left-0 w-full z-50 backdrop-blur-xl shadow-md bg-white/80">

  <nav
    class="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between "
  >

    <!-- LOGO -->
    <a
      href="/"
      class="flex items-center gap-3 z-50"
    >
      <img
        src="/favicon.png"
        alt={content.site.name}
        class="w-14 h-14 object-contain"
      />

      <div>
        <h2
          class="text-primary font-bold text-xl leading-none"
        >
          Edredones
        </h2>

        <span
          class="uppercase tracking-[0.35em] italic text-accent text-xs font-medium"
        >
          Express
        </span>
      </div>
    </a>

    <!-- DESKTOP LINKS -->
    <div
      class="hidden lg:flex items-center gap-10"
    >

      {#each content.navbar.links as link (link.href)}

        <a
          href={link.href}
          class={`relative text-sm transition-all duration-300

          ${
            activeSection === link.href.replace('#', '')
              ? 'text-primary font-semibold'
              : 'text-text-soft hover:text-primary'
          }`}
        >

          {link.label}

          {#if activeSection === link.href.replace('#', '')}

            <span
              class="absolute -bottom-2 left-0 w-full h-[2px] bg-accent rounded-full"
            ></span>

          {/if}

        </a>

      {/each}

    </div>

    <!-- DESKTOP CTA -->
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      class="hidden lg:flex items-center gap-2 bg-primary hover:bg-primary-light transition-all duration-500 text-white px-5 py-3 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-primary/20"
    >
      <MessageCircleMore size={18} />

      <span class="text-sm font-medium">
        {content.navbar.cta.text}
      </span>
    </a>

    <!-- MOBILE BUTTON -->
    <button
      type="button"
      class="lg:hidden text-primary z-50 relative"
      onclick={toggleMenu}
      aria-label="Toggle menu"
    >

      <div
        class="relative w-8 h-8 flex items-center justify-center"
      >

        <div
          class={`absolute transition-all duration-300 ${
            isOpen
              ? 'opacity-0 rotate-90 scale-50'
              : 'opacity-100 rotate-0 scale-100'
          }`}
        >
          <Menu size={26} />
        </div>

        <div
          class={`absolute transition-all duration-300 ${
            isOpen
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-50'
          }`}
        >
          <X size={26} />
        </div>

      </div>

    </button>

  </nav>

  <!-- MOBILE MENU -->
  {#if isOpen}

    <div
      class="fixed inset-0 z-40 lg:hidden"
    >

      <!-- BACKDROP -->
      <div
        class="absolute inset-0 bg-black/10 backdrop-blur-md transition-all duration-500"
        onclick={closeMenu}
      ></div>

      <!-- FLOATING PANEL -->
      <div
        class="absolute top-24 left-4 right-4 bg-white/88 backdrop-blur-2xl rounded-[2rem] border border-white/60 shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden animate-in"
      >

        <!-- LINKS -->
        <div
          class="flex flex-col px-6 py-5 gap-1"
        >

          {#each content.navbar.links as link (link.href)}

            <a
              href={link.href}
              onclick={closeMenu}
              class="group relative flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/15 hover:-translate-y-[1px]"
            >

              <span
                class="text-[1.45rem] font-medium text-primary/95 tracking-[-0.03em] group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
              >
                {link.label}
              </span>

              <div
                class="w-2.5 h-2.5 rounded-full bg-accent opacity-0 translate-x-[-6px] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 mr-2"
              ></div>

            </a>

          {/each}

        </div>

        <!-- CTA -->
        <div
          class="p-5 pt-2"
        >

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            class="bg-primary hover:bg-primary-light text-white rounded-2xl px-5 py-4 flex items-center justify-center gap-3 shadow-xl shadow-primary/15 hover:shadow-primary/25 hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500"
          >

            <MessageCircleMore size={20} />

            <span class="font-medium text-base">
              Escríbenos por WhatsApp
            </span>

          </a>

        </div>

      </div>

    </div>

  {/if}

</header>