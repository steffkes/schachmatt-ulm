<script setup>
useSeoMeta({
  title: "Ausflugsziele / Teilnehmer",
  description: "Was es außenrum für dich/euch noch so gibt",
});
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Was du/die Familie unternehmen kannst</h1>
      <p class="subtitle">
        Ein paar Ideen, was es in/um Ulm noch so alles gibt
      </p>
    </div>
  </section>

  <ImageSection
    url="/images/ausflugsziele/ulmer-wochenmarkt.webp"
    :position="{ x: 35 }"
  >
    <p class="title is-4">
      <a href="https://www.ulmer-wochenmarkt.de/">Ulmer Wochenmarkt</a>
    </p>
    <p class="subtitle is-6">Ulm, Münsterplatz</p>

    <p>
      Frisch, bunt und lebendig – der Ulmer Wochenmarkt ist ein echtes Erlebnis
      für die Sinne! Hier findest du regionale Leckereien, frisches Obst und
      Gemüse, Käse, Backwaren und viele kleine Spezialitäten. Ideal, um
      zwischendurch ein paar Snacks zu holen oder gemütlich über den Markt zu
      schlendern.
    </p>
  </ImageSection>

  <ImageSection
    url="/images/ausflugsziele/ulmer-muenster.jpg"
    :position="{ x: 45 }"
  >
    <p class="title is-4">
      <a
        href="https://www.ulm.de/tourismus/stadtgeschichte/markenzeichen/ulmer-muenster"
        >Ulmer Münster</a
      >
    </p>
    <p class="subtitle is-6">Ulm, Münsterplatz</p>

    <p>
      Ein absolutes Muss! Das Ulmer Münster ist nicht nur die höchste Kirche der
      Welt, sondern auch ein Ort mit beeindruckender Aussicht – nach 768 Stufen
      wird man mit einem Blick über Ulm und die Donau belohnt. Perfekt für einen
      kleinen Familienausflug oder eine ruhige Stunde mit Kaffee und Aussicht.
    </p>

    <p class="mt-4">
      <a href="https://www.ulm.de/tourismus/sehensw%C3%BCrdigkeiten"
        >Weitere Sehenswürdigkeiten in Ulm</a
      >
    </p>
  </ImageSection>

  <ImageSection url="/images/ausflugsziele/blautopf.jpg" :position="{ x: 45 }">
    <p class="title is-4">
      <a href="https://blautopf.de/startseite/blautopf-geoeffnet">Blautopf</a>
    </p>
    <p class="subtitle is-6">Blaubeuren</p>

    <p>
      Ein türkisblaues Naturwunder! Der Blautopf ist nicht nur wunderschön,
      sondern auch ein toller Ort für kleine Spaziergänge oder ein
      Familienpicknick. In der Altstadt von Blaubeuren gibt’s außerdem süße
      Fachwerkhäuser und leckeren Kuchen – ein perfekter Halbtagesausflug.
    </p>
  </ImageSection>

  <ImageSection url="/images/ausflugsziele/donaubad.jpg" :position="{ x: 40 }">
    <p class="title is-4">
      <a href="https://www.donaubad.de/">Donaubad</a>
    </p>
    <p class="subtitle is-6">Neu-Ulm</p>

    <p>
      Ob Action oder Entspannung – im Donaubad kommt wirklich jeder auf seine
      Kosten! Das große Freizeitbad bietet Rutschen, Wellenbecken, einen
      Strömungskanal und ein separates Kinderparadies für die Kleinsten. Wer es
      ruhiger mag, kann im Saunabereich oder im warmen Außenbecken einfach mal
      abschalten.
    </p>
  </ImageSection>

  <ImageSection
    url="/images/ausflugsziele/eislaufanlage.jpg"
    :position="{ x: 45 }"
  >
    <p class="title is-4">
      <a href="https://www.donaubad.de/eissportanlage/">Eislaufanlage</a>
    </p>
    <p class="subtitle is-6">Neu-Ulm</p>

    <p>
      Wenn’s draußen knackig kalt ist, wird’s hier erst richtig cool! Die
      Eislaufanlage im Donaubad ist der perfekte Ort für eine Runde Spaß auf dem
      Eis – egal ob mit der Familie, den Kids oder einfach, um selbst ein paar
      elegante (oder wackelige 😄) Runden zu drehen.
    </p>
  </ImageSection>
</template>
