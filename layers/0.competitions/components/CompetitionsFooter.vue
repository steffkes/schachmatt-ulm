<template>
  <footer class="footer">
    <div class="container is-max-desktop">
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="column is-2 is-6-mobile">
              <img src="/images/stefan.jpg" alt="Bild Stefan Matheis" />
            </div>
            <div class="column">
              <p>Fragen? Anregungen? Presse. Sponsoring.</p>
              <p class="mt-4">
                <strong>Stefan Matheis</strong><br />
                <a :href="'mailto:' + mail">✉️ {{ mail }}</a
                ><br />
                <a href="tel:004916097048114">📞 +49 160 970 48 114</a>
              </p>

              <p
                v-if="$slots.default"
                class="mt-5 is-size-6 has-text-grey-light"
              >
                <slot />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column competitions">
          <div class="columns is-mobile">
            <div class="column has-text-centered">
              <a href="//munich-sunrise.gelungen.es">
                <img
                  src="../assets/competitions/munich-sunrise.svg"
                  alt="Logo Munich Sunrise"
                />
                <p class="has-text-centered">
                  <span>Munich</span>
                  <span>Sunrise</span>
                  <span class="tag mt-2 is-info">Early Bird</span>
                </p>
              </a>
            </div>
            <div class="column has-text-centered">
              <a href="//muensterturmlauf-ulm.gelungen.es">
                <img
                  src="../assets/competitions/muensterturmlauf-ulm.svg"
                  alt="Logo Münsterturmlauf Ulm"
                />
                <p class="has-text-centered">
                  <span>Münsterturmlauf</span>
                  <span>Ulm</span>
                  <span class="tag mt-2 is-success">Fr, 22.05.26</span>
                </p>
              </a>
            </div>
            <div class="column has-text-centered">
              <a href="//www.fire-trail-nesselwang.de">
                <img
                  src="../assets/competitions/fire-trail-nesselwang.svg"
                  alt="Logo Fire Trail Nesselwang"
                />
                <p class="has-text-centered">
                  <span>Fire Trail</span>
                  <span>Nesselwang</span>
                  <span class="tag mt-2">Oktober '26</span>
                </p>
              </a>
            </div>
          </div>
        </div>
        <div class="column competitions">
          <div class="columns is-mobile">
            <div class="column has-text-centered">
              <a href="//www.schachmatt-ulm.de">
                <img
                  src="../assets/competitions/schachmatt-ulm.svg"
                  alt="Logo Schachmatt Ulm"
                />
                <p class="has-text-centered">
                  <span>Schachmatt</span>
                  <span>Ulm</span>
                  <span class="tag mt-2">Februar '27</span>
                </p>
              </a>
            </div>
            <div class="column has-text-centered">
              <a href="//www.schanzenlauf-oberstdorf.de">
                <img
                  src="../assets/competitions/schanzenlauf-oberstdorf.svg"
                  alt="Logo Schanzenlauf Oberstdorf"
                />
                <p class="has-text-centered">
                  <span>Schanzenlauf</span>
                  <span>Oberstdorf</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps(["mail"]);
</script>

<style scoped>
.competitions span {
  display: block;
  padding-top: 3px;
}
.competitions img {
  filter: grayscale(1);
}
</style>
