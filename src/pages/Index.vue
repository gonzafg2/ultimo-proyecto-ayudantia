<template>
  <q-page class="flex column flex-center">
    <div class="q-col-gutter-md row items-start">
      <div v-for="(item, i) in data" :key="i" class="col-6">
        <div 
          style="width: 100%"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
           <h1>{{item.nombre}} </h1> 
           <h2>{{item.color}}</h2>
          </div>
        </div>
      </div>
    </div>
  </q-page>
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
