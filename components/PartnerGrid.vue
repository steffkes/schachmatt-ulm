<template>
  <section class="section">
    <div class="container is-max-desktop">
      <div class="columns is-multiline is-vcentered as-grid">
        <div class="column is-4 has-text-centered">
          <a href="https://www.maritim.de/de/hotels/deutschland/hotel-ulm">
            <img src="/partner/maritim.svg"
          /></a>
        </div>
        <div class="column is-4 has-text-centered">
          <a href="https://www.kappelmeier-fotografie.de/">
            <img src="/partner/kappelmeier.png" class="reduced" />
          </a>
        </div>
        <div class="column is-4 has-text-centered">
          <a href="https://www.denzel-fireequipment.de">
            <img src="/partner/denzel.png" />
          </a>
        </div>
        <div class="column is-4 has-text-centered">
          <a href="https://www.proaurum.de/unternehmen/standorte/ulm/">
            <img src="/partner/pro-aurum.svg" class="reduced" />
          </a>
        </div>
        <div class="column is-4 has-text-centered">
          <a href="https://dietenbronner.de/">
            <img src="/partner/dietenbronner.svg" />
          </a>
        </div>
        <div class="column is-4 has-text-centered">
          <a href="https://www.fruchthof.de">
            <img src="/partner/fruchthof-nagel.png" />
          </a>
        </div>
        <div class="column is-4 has-text-centered">
          <a href="https://www.uniklinik-ulm.de/">
            <img src="/partner/uniklinik-ulm.svg" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.as-grid img {
  filter: grayscale(1);
  mix-blend-mode: multiply;
}
.as-grid img.invert {
  filter: invert(1);
}
.as-grid img.reduced {
  opacity: 0.7;
}
</style>
