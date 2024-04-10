<template>
  <section class="section">
    <div class="container is-max-desktop">
      <div class="columns is-multiline is-vcentered grid">
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
      </div>
    </div>
  </section>
</template>

<style>
.grid img {
  filter: grayscale(1);
  mix-blend-mode: multiply;
}
.grid img.invert {
  filter: invert(1);
}
.grid img.reduced {
  opacity: 0.7;
}
</style>
