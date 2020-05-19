<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="services"
      :search="searchQuery"
      hide-default-footer
      :page.sync="currentPage"
      :items-per-page="perPage"
      :loading="loadingList"
      class="elevation-1"
      item-key="id"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Services({{services.length}})</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="searchQuery"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <template>
            <v-btn class="mx-2" fab outlined small color="primary" @click="addService()">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </template>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editService(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteService(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <div class="text-center mt-10">
      <v-pagination
        v-model="currentPage"
        :length="pageLength"
        circle
      ></v-pagination>
    </div>
    <ServiceForm
      :newService="newService"
      :selectedService="selectedService"
      :showModal="showModal"
      @onClose="close"
      :key="+ new Date()"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ServiceForm from './ServiceForm'
export default {
  name: 'App',
  components: { ServiceForm },
  data () {
    return {
      searchQuery: '',
      currentPage: 1,
      perPage: 10,
      loadingList: true,
      showModal: false,
      editedIndex: -1,
      selectedService: {},
      newService: true,
      headers: [
        {
          text: 'Office Code',
          align: 'start',
          sortable: false,
          value: 'office_code',
        },
        { text: 'Description', value: 'description' },
        { text: 'Billing Code', value: 'billing_code' },
        { text: 'Base Charge', value: 'base_charge' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  },
  created () {
    this.initializeData()
  },
  computed: {
    ...mapGetters(['services']),
    pageLength () {
      return Math.ceil(this.services.length/this.perPage);
    }
  },
  methods: {
    initializeData () {
      this.$store.dispatch('loadServices');
      this.loadingList = false
    },
    editService (service) {
      this.selectedService = Object.assign({}, service)
      this.newService = false
      this.showModal = true
    },
    deleteService (service) {
      if (confirm('Are you sure you want to delete the service?')) {
        this.$store.dispatch('deleteService', service);
      }
    },
    close () {
      this.showModal = false
    },
    addService () {
      this.newService = true
      this.showModal = true
      this.selectedService = {}
    },
    getFiltered (list) {
      console.log(list.length)
    }
  }
};
</script>

<style lang="scss">
  .v-pagination__navigation, .v-pagination__item {
    outline: none;
  }
</style>
