<template>
  <section class="section">
    <div class="container is-max-desktop">
      <p>
        Nachfolgende einige Infos für alle Teilnehmer, was am Wochenende des
        Wettkampfs so in Ulm geboten ist.
      </p>
    </div>
  </section>

  <div
    class="mt-6"
    style="
      min-height: 50vh;
      background-image: url(/images/narrensprung.jpg);
      background-size: cover;
      background-position: 50% 50%;
      background-attachment: fixed;
    "
  ></div>

  <section class="section">
    <div class="container is-max-desktop">
      <h2 class="title mt-6">
        16. Ringtreffen des Alemannischen Narrenrings
        <p class="subtitle">Freitag, 07. — Sonntag, 09. Februar 2025</p>
      </h2>

      <div class="content">
        <blockquote>
          <p>
            Wir erwarten beim 16. Ringtreffen alle 88 Mitgliedszünfte, mit ihren
            insgesamt ca. 27.500 Mitgliedern, die aus dem Raum
            Oberschwaben-Donau, Allgäu und Bodensee kommen, in unserer schönen
            Münsterstadt.
          </p>
          <p>
            An den 3 Tagen wird ein vielfältiges, buntes und abwechslungsreiches
            Programm, gestaltet von Jung und Alt, stattfinden. Für Kurzweil ist
            gesorgt. Seien Sie gespannt, was während der drei Tage in Ulm alles
            geboten wird: ob
          </p>
          <ul>
            <li>am Freitagabend bei der Hexenrauhnacht oder</li>
            <li>
              am Samstag beim Guggamusiktreffen „UlmBeben“, beim Kinderumzug mit
              Kinderfasnet, dem Brauchtumsabend oder
            </li>
            <li>
              zum sonntäglichen Narrengottesdienst im Ulmer Münster + ULMZUG.
            </li>
          </ul>
          <p>
            Ganz bestimmt wird der ULMZUG am Sonntag, der große Narrensprung in
            Ulm, mit insgesamt rund 12.000 Maskenträger der Höhepunkt sein.
          </p>
        </blockquote>
        <p>
          Alles weitere zum
          <a href="https://narrenzunft-ulm.de/2024/09/05/ringtreffen-2025/"
            >Ringtreffen 2025 bei der Narrenzunft Ulm</a
          >.
        </p>
      </div>

      <div class="columns is-multiline">
        <div class="column is-3"><img src="/images/narrensprung-01.jpg" /></div>
        <div class="column is-3"><img src="/images/narrensprung-02.jpg" /></div>
        <div class="column is-3"><img src="/images/narrensprung-03.jpg" /></div>
        <div class="column is-3"><img src="/images/narrensprung-04.jpg" /></div>
        <div class="column is-3"><img src="/images/narrensprung-05.jpg" /></div>
        <div class="column is-3"><img src="/images/narrensprung-06.jpg" /></div>
        <div class="column is-3"><img src="/images/narrensprung-07.jpg" /></div>
        <div class="column is-3"><img src="/images/narrensprung-08.jpg" /></div>
      </div>

      <p>
        Bild-Quelle:
        <a
          href="https://tourismus.ulm.de/de/entdecken/veranstaltungen/veranstaltungshighlights/narrensprung"
          >Tourist-Information Ulm/Neu-Ulm
        </a>
      </p>
    </div>
  </section>

  <div
    class="mt-6"
    style="
      min-height: 50vh;
      background-image: url(/images/P10003192527.jpg);
      background-size: cover;
      background-position: 10% 50%;
      background-attachment: fixed;
    "
  ></div>

  <section class="section">
    <div class="container is-max-desktop">
      <h2 class="title mt-6">
        Übernachtungsangebot des Maritim Hotel Ulm
        <p class="subtitle">Freitag, 07. — Sonntag, 09. Februar 2025</p>
      </h2>

      <div class="content">
        <blockquote>
          <table>
            <thead>
              <tr>
                <th>Kategorie</th>
                <th>Superior</th>
                <th>Comfort</th>
                <th>Classic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Zimmerpreis pro Tag</th>

                <td>EZ: 139.90 €<br />DZ: 175.80 €</td>

                <td>EZ: 119.90 €<br />DZ: 155.80 €</td>

                <td>EZ: 109.90 €<br />DZ: 145.80 €</td>
              </tr>
            </tbody>
          </table>

          <p>
            Das Zimmerkontingent ist
            <strong>bis zum 17. Januar 2025</strong> von den Teilnehmern selbst
            unter dem Stichwort - <strong>Schachmatt</strong> - abzurufen.
            Anschließend gehen die nicht abgerufenen Zimmereinheiten in den
            freien Verkauf zurück. Die Hotelzimmer können nur per Email unter
            dem vereinbarten Stichwort abgerufen werden:
            <a href="mailto:reservierung.ulm@maritim.de"
              >reservierung.ulm@maritim.de</a
            >
          </p>

          <p>In unseren Zimmerpreisen sind folgende Leistungen enthalten:</p>
          <ul>
            <li>Übernachtung in einem Zimmer der gebuchten Kategorie</li>
            <li>Teilnahme am Maritim Business-Frühstück</li>
            <li>freie Benutzung des Schwimmbades</li>
          </ul>
        </blockquote>

        <p>
          Das Angebot gilt für Übernachtungen von Freitag, 07. auf Samstag, 08.
          und/oder Samstag, 08. auf Sonntag, 09. Februar 2025.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { registration } = await useEvent();

useSeoMeta({
  title: "Infos für Teilnehmer",
});
</script>
