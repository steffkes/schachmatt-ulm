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

      <div class="notification is-info mt-6 has-text-centered">
        Am <strong>Samstag, den 08.02.2025</strong> im
        <strong>Maritim Hotel Ulm</strong>.
      </div>

      <div class="mt-6">
        <p>
          Willst du auch dabei sein? Es ist noch Platz für
          {{ 161 - registration.registered }} Teams.
        </p>
        <progress
          class="progress my-3 is-warning"
          :value="161 - registration.registered"
          max="161"
        >
          Noch {{ 161 - registration.registered }} Teams verfügbar
        </progress>
        <p>
          Bei uns kannst du dich nicht einfach anmelden - du wirst eingeladen.
          Jedes registrierte Team darf Jemanden vorschlagen der auch in Ulm an
          den Start gehen möchte. In der
          <a href="https://my.raceresult.com/313906/participants"
            >Liste aller Teilnehmer</a
          >
          ist ja vielleicht ein bekannter Name dabei? Oder man traut sich
          einfach und fragt vorsichtig beim Organisator nach ;)
        </p>
      </div>
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
      <p class="has-text-grey-light">
        Flo war eindeutig froh, als er zum letzten Mal oben angekommen ist ;)
      </p>

      <div class="content mt-6">
        <p>
          Alle 161 Teams starten ganz bequem in eine Qualifikationsrunde. Die
          schnellsten 128 Teams laufen anschließend in der ersten Runde in 64
          zufälligen Paarungen gegeneinander. Ein Team besteht aus zwei Läufern,
          die den ganzen Wettkampf zusammen bestreiten. Sie laufen immer zu
          zweit gegen ein anderes Team: entweder gewinnen sie gemeinsam (dann
          kommen sie eine Runde weiter) oder sie verlieren gemeinsam (dann
          scheiden sie aus dem Wettkampf aus).
        </p>

        <p>
          Bei Schachmatt Ulm wird so lange gelaufen, bis sich am Ende nur noch
          zwei Teams im Finale gegenüber stehen. Wer also in Mathe aufgepasst
          hat, der wird schnell feststellen: Mindestens eine Runde, Höchstens
          acht Runden. Also über 2'000 Stufen an einem Tag für die Teilnehmer im
          Finale.
        </p>
      </div>
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
      <p class="has-text-grey-light">
        Das ist euer Ausblick nach dem Zieleinlauf.
      </p>

      <div class="content mt-6">
        <p>
          Wir sagen euch im Ziel, welches Team der Paarung das Schnellere war.
          Aber nicht mit welcher Zeit - wie schnell euer nächster Gegner vorher
          gelaufen ist wisst ihr nicht. Die Zeiten erfahrt ihr erst am Ende des
          gesamten Wettkampfes, nach der Siegerehrung.
        </p>
        <p>
          Der Wettkampf wird gelaufen in kompletter Ausrüstung (Helm, Jacke,
          Hose, Handschuhe & Stiefeln) mit geschultertem Atemschutzgerät. Das
          Atemschutzgerät nicht angeschlossen, daher keine Maske notwendig. Eine
          Flasche reicht aus. Alle Teams in einer Kategorie.
        </p>
      </div>
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
      <p class="has-text-grey-light">
        Denn unsere Wettkampf-Location ist das Maritim Hotel Ulm!
      </p>

      <div class="content mt-6">
        <p>
          Gestartet wird in der Restaurant-Ebene. Am Start stehen sich die zwei
          Teams einer Paarung gegenüber, nachdem sie die Startlinie überquert
          haben geht es in zwei separat verlaufende Treppenhäuser die jeweils
          bis ins 16. Stockwerk führen.
        </p>

        <p>
          Dort oben im Panorama-Restaurant des Maritim Hotel Ulm befindet sich
          das Ziel für beide Teams. Nach getaner Arbeit dürft ihr mit dem Aufzug
          wieder hinunterfahren und euch auf die nächste Runde freuen - sofern
          ihr schneller gewesen seid als das andere Team ;)
        </p>
      </div>
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
