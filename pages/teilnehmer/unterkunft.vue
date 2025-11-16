<script setup>
useSeoMeta({
  title: "Unterkunft / Teilnehmer",
  description: "Wo ihr in Ulm unterkommt",
});
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Wo du in Ulm unterkommst</h1>
      <p class="subtitle">Unser Angebot für dich, direkt im Wettkampf-Hotel</p>
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
        Angebot des Maritim Hotel Ulm
        <p class="subtitle">Freitag, 30. Januar — Montag, 02. Februar 2026</p>
      </h2>

      <div class="content">
        <p>
          <a
            href="https://app.mews.com/distributor/1f251a86-a2ce-4d30-8c3f-b306008da9c9?mewsAvailabilityBlockId=03cc364f-a6da-4d48-9066-b39100de767b&mewsStart=2026-01-30&mewsEnd=2026-02-02"
            >Über diesen Buchungslink</a
          >
          könnt ihr <strong>bis zum 16. Januar 2026</strong> einen vergünstigten
          Aufenthalt im Maritim Hotel Ulm buchen. Das Angebot gilt für eine oder
          mehrere Nächte zwischen Freitag und Montag. (Preis pro Nacht & Zimmer)
        </p>

        <table>
          <thead>
            <tr>
              <th>Kategorie</th>
              <th>EZ</th>
              <th>DZ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Classic</th>

              <td><span class="price">89 €</span></td>
              <td><span class="price">116 €</span></td>
            </tr>
          </tbody>
        </table>

        <p>
          Dafür bekommt ihr jeweils die Übernachtung in einem Classic-Zimmer,
          dazu ein leckeres Maritim-Frühstück so wie Zugang zum SPA-Bereich.
          Perfekt also für ein gemütliches Wochenende in Ulm, mit einem dezenten
          sportlichen Anteil für alle Teilnehmer.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.price {
  font-variant-numeric: tabular-nums;
}
</style>
