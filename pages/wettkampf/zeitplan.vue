<script setup>
useSeoMeta({
  title: "Zeitplan / Wettkampf",
  description: "Was, wann & wo stattfindet",
});
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Der zeitliche Ablauf</h1>

      <div class="content">
        <h3>Samstag</h3>

        <ul>
          <li>
            <span class="tag is-light">14:00-16:00</span> Besichtigung Magirus
          </li>
          <li>
            <span class="tag is-light"><strike>17:00-19:00</strike></span>
            <strike>Ausgabe der Startnummern</strike> (findet nur Sonntag statt)
          </li>
          <li>
            <span class="tag is-light">18:00-20:00</span> Pasta-Party @
            <a href="https://maps.app.goo.gl/dUEmMZXnTgDr52c8A"
              >Tanivera Pizza e Pasta</a
            >
          </li>
        </ul>

        <h3>Sonntag</h3>

        <article class="message is-info">
          <div class="message-body">
            <p>
              <strong
                >Eingang & Aufenthaltsraum befinden sich dieses Jahr im Congress
                Centrum Ulm</strong
              >! Dieses ist direkt angegliedert an das Maritim Hotel Ulm - hat
              aber einen separaten Zugang.
            </p>
          </div>
        </article>

        <ul>
          <li>
            <span class="tag is-light">09:30-10:30</span> Ausgabe der
            Startunterlagen (im Eingangsbereich des Congress Centrum Ulm)
          </li>
          <li>
            <span class="tag is-light">11:00</span> Start Runde Q: alle Teams
            (Qualifikation) Ein Team alle 30 Sekunden.
            <!-- 90 * .5 = 45m -->
          </li>
          <li>
            <span class="tag is-light">12:00</span> Start Runde 1: 64 Teams.
            Eine Paarung alle 30 Sekunden.
          </li>
          <li>
            <span class="tag is-light">12:30</span> Start Runde 2: 32 Teams.
            Eine Paarung jede Minute.
          </li>
          <li>
            <span class="tag is-light">13:00</span> Start Runde 3: 16 Teams
            (Achtelfinale). Eine Paarung jede Minute.
          </li>
          <li>
            <span class="tag is-light">13:30</span> Start Runde 4: 8 Teams
            (Viertelfinale). Eine Paarung jede Minute.
          </li>
          <li>
            <span class="tag is-light">14:00</span> Start Runde 5: 4 Teams
            (Halbfinale). Eine Paarung alle zwei Minute.
          </li>
          <li>
            <span class="tag is-light">14:30</span> Start Runde 6: 2 Teams
            (Finale, klein & grob). Eine Paarung alle zwei Minute.
          </li>
          <li><span class="tag is-light">14:45</span> Siegerehrung</li>
        </ul>
      </div>
    </div>
  </section>
</template>
