<template>
  <section class="section">
    <div class="container is-max-desktop">
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

      <QuoteElement name="Lukas" department="Feuerwehr Ulm">
        <p>Es tut schon weh, aber ist irgendwie geil.</p>
      </QuoteElement>

      <QuoteElement
        name="Anja"
        department="Feuerwehr Essingen, Abteilung Lauterburg"
      >
        <p>
          Man ist erst total motiviert und rennt richtig los und nimmt zwei
          Treppenstufen auf einmal. Und dann, beim zweiten Stockwerk, kommt die
          Wahrheit ans Licht und man merkt: Wir schaffen nur eine Treppe.
        </p>
      </QuoteElement>

      <QuoteElement name="Claudio" department="Bundeswehrfeuerwehr">
        <p>
          Also leider erzähl ich’s tatsächlich Jedem so! Dass wir gegen Steve
          quasi alles reingedonnert haben und uns dann nur noch von Runde zu
          Runde mit den restlichen Energiereserven langgehächelt haben .. ja
        </p>
      </QuoteElement>

      <QuoteElement name="Armin" department="Feuerwehr Rednitzhembach">
        <p>War eine echt coole Geschichte mit einer neuen Unbekannten ;-)</p>
      </QuoteElement>

      <QuoteElement name="Hannes" department="Feuerwehr Ulm">
        <p>Wenn es gar nicht mehr geht, gilt nur Zähne zusammenbeißen.</p>
      </QuoteElement>

      <QuoteElement name="Andy" department="Feuerwehr Schwäbisch Hall">
        <p>
          Leider sind wir schon in der zweiten Runde hauchdünn ausgeschieden,
          dennoch freuen wir uns auf eine Wiederholung im kommenden Jahr. Vielen
          Dank für das wirklich tolle Event!
        </p>
      </QuoteElement>
    </div>
  </section>
</template>

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
