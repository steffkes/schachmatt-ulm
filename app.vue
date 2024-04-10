<template>
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

  <section class="section">
    <div class="container is-max-desktop">
      <p>
        Schon wieder ein Feuerwehr-Treppenlauf? Ja doch! Aber natürlich anders
        =) Nachdem ihr euch in der ersten Runde qualifiziert habt, geht es im
        K.O.-System weiter! Bis am Ende das schnellste Team als Sieger
        feststeht.
      </p>

      <div class="notification is-info mt-6 has-text-centered">
        <em>Voraussichtlich</em>
        am <strong>Samstag, den 08.02.2025</strong> im
        <strong>Maritim Hotel Ulm</strong>.
      </div>

      <section class="level mt-6">
        <div class="level-item has-text-centered">
          <div>
            <p class="title">161</p>
            <p class="footing">Teams</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title">16</p>
            <p class="footing">Stockwerke</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title">8</p>
            <p class="footing">Durchgänge</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title">1</p>
            <p class="footing">Sieger</p>
          </div>
        </div>
      </section>
    </div>
  </section>

  <div
    class="mt-6"
    style="
      min-height: 50vh;
      background-image: url(/images/P10003192560.jpg);
      background-size: cover;
      background-position: 75% 50%;
      background-attachment: fixed;
    "
  ></div>

  <section class="section pt-2">
    <div class="container is-max-desktop">
      <p>
        Flo war eindeutig froh, als er zum letzten Mal oben angekommen ist ;)
      </p>
    </div>
  </section>

  <div
    class="mt-6"
    style="
      min-height: 50vh;
      background-image: url(/images/P10003192586.jpg);
      background-size: cover;
      background-position: 45% 50%;
      background-attachment: fixed;
    "
  ></div>

  <section class="section pt-2">
    <div class="container is-max-desktop">
      <p>Das ist euer Ausblick nach dem Zieleinlauf.</p>
    </div>
  </section>

  <div
    class="mt-6"
    style="
      min-height: 50vh;
      background-image: url(/images/P10003192613.jpg);
      background-size: cover;
      background-position: 85% 50%;
      background-attachment: fixed;
    "
  ></div>

  <section class="section pt-2">
    <div class="container is-max-desktop">
      <p>Denn unsere Wettkampf-Location ist das Maritim Hotel Ulm!</p>
    </div>
  </section>

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
    <div class="content has-text-centered">
      <p>
        <strong>Schachmatt Ulm</strong> wird organisiert von Stefan, dem
        Initiator des Schanzenlauf Oberstdorf.
      </p>
      <p>
        Copyright/Urheberrecht aller Bilder:
        <a href="https://www.kappelmeier-fotografie.de"
          >Kappelmeier Fotografie</a
        >
      </p>
    </div>
  </footer>
</template>

<style>
@import url("bulma");
</style>

<script setup>
useSeoMeta({
  title: "Schachmatt Ulm",
  description: "Feuerwehr-Treppenlauf im K.O.-System",
  ogImage: "/og.jpg",
  script: [
    {
      src: "https://plausible.io/js/script.js",
      "data-domain": "schachmatt-ulm.de",
      defer: true,
    },
  ],
});
</script>
