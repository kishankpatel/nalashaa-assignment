<template>
  <v-app>
    <Header />
    <v-content>
      <services />
    </v-content>
  </v-app>
</template>

<script>
import Services from './components/Services'
import Header from './layouts/Header'
export default {
  name: 'App',
  components: {
    Services,
    Header
  }
};
</script>
