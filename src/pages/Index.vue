<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card col-3" v-for="(item, i) in data" :key="i" :style="{'background-color': item.color}">
      <q-card-section style="color: white; text-align: center">
        <p>{{ item.nombre }}</p>
        <p>{{ item.color }}</p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "PageIndex",
  created() {
    this.getColores();
  },
  computed: {
    ...mapState("colores", ["hola", "data"])
  },
  methods: {
    ...mapActions("colores", ["getColores"])
  }
};
</script>
