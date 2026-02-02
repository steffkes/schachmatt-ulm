<template>
  <div class="modal" :class="{ 'is-active': activeModal }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <p class="image">
        <img src="/qr-code.svg" />
      </p>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="activeModal = false"
    ></button>
  </div>

  <section
    class="section"
    style="
      min-height: 50vh;
      background-image: url(/images/P10003192670.jpg);
      background-size: cover;
      background-position: 50% 50%;
    "
  >
    <div class="container is-max-desktop">
      <div class="columns">
        <div class="column is-two-fifths">
          <a href="/"><img src="/schachmatt-ulm.svg" /></a>
        </div>
      </div>
    </div>
  </section>

  <a
    class="is-hidden-desktop"
    @click="activeModal = true"
    style="position: fixed; right: 0px; bottom: 0px"
    ><img src="/qr-code.svg" style="opacity: 0.1; height: 20px; margin: 10px"
  /></a>

  <div class="container is-max-desktop">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': activeNavbar }"
          aria-label="menu"
          aria-expanded="false"
          @click="toggleNavbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': activeNavbar }">
        <div class="navbar-start">
          <a href="/" class="navbar-item"> Startseite </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Wettkampf </a>

            <div class="navbar-dropdown">
              <a href="/wettkampf/konzept" class="navbar-item"> Konzept </a>
              <a href="/wettkampf/zeitplan" class="navbar-item"> Zeitplan </a>
              <a href="/wettkampf/regeln" class="navbar-item"> Regeln </a>
              <a href="/wettkampf/impressionen" class="navbar-item">
                Impressionen
              </a>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Teilnehmer </a>

            <div class="navbar-dropdown">
              <a href="/anmeldung" class="navbar-item"> Anmeldung </a>
              <a href="/teilnehmer/unterkunft" class="navbar-item">
                Unterkunft
              </a>
              <a href="/teilnehmer/ausflugsziele" class="navbar-item">
                Ausflugsziele
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <slot />

  <footer class="footer pb-6">
    <PartnerGrid />
  </footer>

  <div
    class="fixed"
    style="
      min-height: 75vh;
      background-image: url(/images/P10003192583.jpg);
      background-size: cover;
      background-position: 75% 50%;
    "
  ></div>

  <CompetitionsFooter mail="stefan.matheis@schachmatt-ulm.de">
    Copyright/Urheberrecht aller Bilder:
    <a href="https://www.kappelmeier-fotografie.de" class="has-text-grey-light"
      >Kappelmeier Fotografie</a
    >
  </CompetitionsFooter>
</template>

<style>
@import url("bulma");

.fixed {
  background-attachment: fixed;
}

@supports (-webkit-touch-callout: inherit) {
  .fixed {
    background-attachment: scroll;
  }
}
</style>

<script setup>
const { event, formattedDate } = await useEvent();

const activeModal = ref(false);

const activeNavbar = ref(false);
const toggleNavbar = () => (activeNavbar.value = !activeNavbar.value);

useSeoMeta({
  ogImage: "/og.jpg",
});

useHead({
  titleTemplate: (pageTitle) =>
    [pageTitle, event.name].filter(Boolean).join(" | "),
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "apple-mobile-web-app-title", content: event.name },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(event),
    },
    {
      src: "/pl/script.js",
      "data-api": "/pl/event",
      "data-domain": "schachmatt-ulm.de",
      defer: true,
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
});
</script>
