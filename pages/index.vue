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
          class="progress my-3 is-success"
          :value="161 - registration.registered"
          max="161"
        >
          161 Teams verfügbar
        </progress>
        <p>
          Bei uns kannst du dich nicht einfach anmelden - du wirst eingeladen.
          Jedes registrierte Team darf Jemanden vorschlagen der auch in Ulm an
          den Start gehen möchte.
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

      <p class="mt-6">
        Zum letzten Mal? Ja, richtig! Bei Schachmatt Ulm geht es nicht nur darum
        einmal nach oben zu laufen.
        <strong>Das schnellere Team kommt jeweils eine Runde weiter</strong> -
        das geht so lang, bis sich am Ende nur noch zwei Teams im Finale
        gegenüber stehen.
      </p>

      <p class="mt-3">
        Alle 161 Teams starten ganz bequem in eine Qualifikationsrunde. Die
        schnellsten 128 Teams laufen anschließend in der ersten Runde in 64
        zufälligen Paarungen gegeneinander. Das schnellere Team kommt eine Runde
        weiter .. und läuft dort gegen ein anderes Team das in seiner Paarung
        gewonnen hat.
      </p>

      <p class="mt-3">
        Das Spiel geht so lange, bis sich am Ende nur noch zwei Teams im Finale
        gegenüber stehen. Die letzte Runde entscheidet über Sieger und
        Zweitplatzierten.
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
      <p class="has-text-grey-light">
        Das ist euer Ausblick nach dem Zieleinlauf.
      </p>

      <p class="mt-6">
        Typischerweise erfährt man, nachdem man mit letzter Kraft durch's Ziel
        gefallen ist, seine Zeit. <em>Oh nein, jetzt sagt er gleich:</em> Aber
        nicht bei uns ツ <em>Verdammt.</em>
      </p>

      <p class="mt-3">
        Wir sagen euch, welches Team in der Paarung das Schnellere war. Aber
        nicht mit welcher Zeit - die Zeiten erfahrt ihr erst am Ende des
        gesamten Wettkampfes, nach der Siegerehrung.
      </p>
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

      <p class="mt-6">
        Gestartet wird in der Restaurant-Ebene. Am Start stehen sich die zwei
        Teams einer Paarung gegenüber, nachdem sie die Startlinie überquert
        haben geht es in zwei separat verlaufene Treppenhäuser die jeweils bis
        ins 16. Stockwerk führen.
      </p>

      <p class="mt-2">
        Dort oben im Panorama-Restaurant des Maritim Hotel Ulm befindet sich das
        Ziel für beide Teams. Nach getaner Arbeit dürft ihr mit dem Aufzug
        wieder hinunterfahren und euch auf die nächste Runde freuen ;)
      </p>
    </div>
  </section>
</template>

<script setup>
const { registration } = await useEvent();
</script>
