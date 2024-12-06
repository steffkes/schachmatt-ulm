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
          <img src="/schachmatt-ulm.svg" />
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

  <NuxtPage />

  <PartnerGrid />

  <div
    class="mt-6"
    style="
      min-height: 75vh;
      background-image: url(/images/P10003192583.jpg);
      background-size: cover;
      background-position: 75% 50%;
      background-attachment: fixed;
    "
  ></div>

  <footer class="footer">
    <div class="container is-max-desktop">
      <div class="columns">
        <div class="column">
          <div class="content">
            <p>
              <strong>Schachmatt Ulm</strong> wird organisiert von Stefan
              Matheis, dem Initiator des Schanzenlauf Oberstdorf.
            </p>
            <p>
              Copyright/Urheberrecht aller Bilder:
              <a href="https://www.kappelmeier-fotografie.de"
                >Kappelmeier Fotografie</a
              >
            </p>
          </div>
        </div>
        <div class="column">
          <div class="columns">
            <div class="column is-4">
              <img src="/images/stefan.jpg" alt="Bild Stefan Matheis" />
            </div>

            <div class="column">
              <p>Fragen? Anregungen? Presse. Sponsoring.</p>

              <p class="mt-4">
                <strong>Stefan Matheis</strong><br />
                <a href="mailto:stefan.matheis@schachmatt-ulm.de"
                  >✉️ stefan.matheis@schachmatt-ulm.de</a
                ><br />
                <a href="tel:004916097048114">📞 +49 160 970 48 114</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
@import url("bulma");
</style>

<script setup>
const { event, formattedDate } = await useEvent();

const activeModal = ref(false);

useSeoMeta({
  description:
    "Feuerwehr-Treppenlauf im K.O.-System (" +
    formattedDate +
    ") @ " +
    event.location.name,
  ogTitle: event.name + " (" + formattedDate + ")",
  ogDescription: "Treppenlauf im K.O.-System @ " + event.location.name,
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
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(event),
    },
    {
      src: "https://plausible.io/js/script.js",
      "data-domain": "schachmatt-ulm.de",
      defer: true,
    },
  ],
});
</script>
