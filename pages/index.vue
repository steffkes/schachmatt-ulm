<template>
  <section class="section">
    <div class="container is-max-desktop">
      <div class="notification is-link has-text-centered mb-6">
        <p>
          Die zweite Ausgabe von Schachmatt Ulm gibt's am
          <strong>Sonntag, den 01. Februar 2026</strong>!
        </p>
      </div>

      <section class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="title">161</p>
            <p class="footing">Teams</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title">18</p>
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

  <ImageSection url="/images/517_DSC02999.jpg" :position="{ x: 65 }">
    Claudio war eindeutig froh, als er oben angekommen ist ;)
  </ImageSection>

  <section class="section">
    <div class="container is-max-desktop">
      <div class="content">
        <ImpressionenComponent />
      </div>
    </div>
  </section>

  <ImageSection url="/images/403_DSC09531.jpg" :position="{ x: 60 }">
    Auch wenn es "nur" 18 Stockwerke sind … gilt Zähne zeigen
  </ImageSection>

  <section class="section">
    <div class="container is-max-desktop">
      <p class="mb-3">Was unsere Teilnehmer über Schachmatt Ulm sagen:</p>

      <article class="message">
        <div class="message-body">
          <blockquote>
            <p>Es tut schon weh, aber ist irgendwie geil.</p>
          </blockquote>
          <p class="mt-2">
            — <strong>Lukas</strong>
            <span class="ml-2 has-text-grey">(Feuerwehr Ulm)</span>
          </p>
        </div>
      </article>

      <article class="message">
        <div class="message-body">
          <blockquote>
            <p>
              Man ist erst total motiviert und rennt richtig los und nimmt zwei
              Treppenstufen auf einmal. Und dann, beim zweiten Stockwerk, kommt
              die Wahrheit ans Licht und man merkt: Wir schaffen nur eine
              Treppe.
            </p>
          </blockquote>
          <p class="mt-2">
            — <strong>Anja</strong>
            <span class="ml-2 has-text-grey"
              >(Feuerwehr Essingen, Abteilung Lauterburg)</span
            >
          </p>
        </div>
      </article>

      <article class="message">
        <div class="message-body">
          <blockquote>
            <p>
              Also leider erzähl ich’s tatsächlich Jedem so! Dass wir gegen
              Steve quasi alles reingedonnert haben und uns dann nur noch von
              Runde zu Runde mit den restlichen Energiereserven langgehächelt
              haben .. ja
            </p>
          </blockquote>
          <p class="mt-2">
            — <strong>Claudio</strong>
            <span class="ml-2 has-text-grey">(Bundeswehrfeuerwehr)</span>
          </p>
        </div>
      </article>

      <article class="message">
        <div class="message-body">
          <blockquote>
            <p>
              War eine echt coole Geschichte mit einer neuen Unbekannten ;-)
            </p>
          </blockquote>
          <p class="mt-2">
            — <strong>Armin</strong>
            <span class="ml-2 has-text-grey">(Feuerwehr Rednitzhembach)</span>
          </p>
        </div>
      </article>

      <article class="message">
        <div class="message-body">
          <blockquote>
            <p>Wenn es gar nicht mehr geht, gilt nur Zähne zusammenbeißen.</p>
          </blockquote>
          <p class="mt-2">
            — <strong>Hannes</strong>
            <span class="ml-2 has-text-grey">(Feuerwehr Ulm)</span>
          </p>
        </div>
      </article>

      <article class="message">
        <div class="message-body">
          <blockquote>
            <p>
              Leider sind wir schon in der zweiten Runde hauchdünn
              ausgeschieden, dennoch freuen wir uns auf eine Wiederholung im
              kommenden Jahr. Vielen Dank für das wirklich tolle Event!
            </p>
          </blockquote>
          <p class="mt-2">
            — <strong>Andy</strong>
            <span class="ml-2 has-text-grey">(Feuerwehr Schwäbisch Hall)</span>
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
blockquote {
  position: relative;
}

blockquote,
blockquote + p {
  padding-left: 60px;
}

blockquote::before {
  content: "\201D";
  position: absolute;
  left: 5px;
  line-height: 100px;
  font-size: 110px;
}
</style>

<script setup>
const { event, formattedDate, registration } = await useEvent();

useSeoMeta({
  description:
    "Feuerwehr-Treppenlauf im K.O.-System (" +
    formattedDate +
    ") @ " +
    event.location.name,
  ogTitle: event.name + " (" + formattedDate + ")",
  ogDescription: "Treppenlauf im K.O.-System @ " + event.location.name,
});
</script>
