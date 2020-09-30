<template>
  <q-page class="flex column flex-center">
    <div v-for="(item, index) in data" :key="index">
      <p>{{ item.nombre }}: <span>{{ item.color }}</span></p>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "PageIndex",
  created () {
    this.getColores();
  },
  computed: {
    ...mapState("colores", ["hola", "data"])
  },
  methods: {
    ...mapActions("colores", ["getColores"])
  },
};
</script>
