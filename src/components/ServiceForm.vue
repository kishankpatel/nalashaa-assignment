<template>
  <v-dialog persistent v-model="showModal" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{formTitle}}</span>
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <v-form @submit.prevent="submitForm()" class="mt-5">
          <v-text-field
            label="Office Code"
            v-model="service.office_code"
            :error-messages="$v.service.office_code.$error ? 'Office Code is required' : ''"
            :error="$v.service.office_code.$error"
          ></v-text-field>

          <v-text-field
            label="Billing Code"
            v-model="service.billing_code"
            :error-messages="$v.service.billing_code.$error ? 'Billing Code is required' : ''"
            :error="$v.service.billing_code.$error"
          ></v-text-field>

          <v-text-field
            label="Description"
            v-model="service.description"
          ></v-text-field>

          <v-radio-group
            v-model="service.uom_type"
            row
            :error-messages="$v.service.uom_type.$error ? 'UOM Type is required' : ''"
            :error="$v.service.uom_type.$error"
          >
            <span>UOM Type</span>
            <v-spacer></v-spacer>
            <v-radio label="Days" value="days"></v-radio>
            <v-radio label="Units" value="units"></v-radio>
          </v-radio-group>

          <v-text-field
            label="Base Charge"
            prefix="$"
            v-model="service.base_charge"
            :error-messages="$v.service.base_charge.$error ? 'Base Charge is required' : ''"
            :error="$v.service.base_charge.$error"
          ></v-text-field>

          <v-radio-group
            v-model="service.claim_type"
            row
            :error-messages="$v.service.claim_type.$error ? 'Claim Type is required' : ''"
            :error="$v.service.claim_type.$error"
          >
            <span>Claim Type</span>
            <v-spacer></v-spacer>
            <v-radio label="Profesional" value="profesional"></v-radio>
            <v-radio label="Institutional" value="institutional"></v-radio>
          </v-radio-group>

          <v-radio-group
            v-model="service.service_type"
            row
            :error-messages="$v.service.service_type.$error ? 'Service Type is required' : ''"
            :error="$v.service.service_type.$error"
          >
            <span>Service Type</span>
            <v-spacer></v-spacer>
            <v-radio label="Group" value="group"></v-radio>
            <v-radio label="Individual" value="individual"></v-radio>
          </v-radio-group>
          <AddModifier
            v-model="service.modifiers"
            :key="'addModifier' + service.id"
          />
          <br>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined text @click="closeModal()">Cancel</v-btn>
            <v-btn color="indigo" outlined text type="submit">{{ submitText }}</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { required } from "vuelidate/lib/validators";

import AddModifier from './AddModifier'
export default {
  props: ['selectedService','showModal', 'newService'],
  components: {
    AddModifier
  },
  data () {
    return {
      formTitle: '',
      submitText: '',
      service: {},
      initialData: {
        office_code: '',
        billing_code: '',
        description: '',
        uom_type: '',
        base_charge: '',
        claim_type: '',
        service_type: '',
        modifiers: [],
      }
    }
  },

  mounted () {
    if (this.newService) {
      this.service = Object.assign({}, this.initialData)
      this.formTitle = 'Add Service'
      this.submitText = 'Save'
    } else {
      this.service = Object.assign({}, this.selectedService)
      this.formTitle = 'Edit Service'
      this.submitText = 'Update Service'
    }
  },
  validations: {
    service: {
      office_code: { required },
      billing_code: { required },
      description: { required },
      uom_type: { required },
      base_charge: { required },
      claim_type: { required },
      service_type: { required }
    }
  },
  methods: {
    submitForm () {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let action = this.newService ? 'createService' : 'updateService'
      this.$store.dispatch(action, this.service);
      this.$emit('onClose');
    },
    closeModal () {
      // Reset all errrors and close modals
      this.$v.$reset();
      this.$emit('onClose');
    }
  }
}
</script>
