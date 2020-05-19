<template>
  <v-card
    class="mx-auto"
    outlined
  >
    <div class="d-flex px-3 py-3">
      <h3>Modifiers</h3>
      <v-spacer></v-spacer>
      <v-dialog v-model="showModifierDialog" persistent max-width="450px">
        <template v-slot:activator="{ on }">
          <v-btn class="mx-2" fab outlined small color="primary" v-on="on" @click="showModifierDialog = true">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">Add Modifier</v-card-title>
          <v-card-text>
            <v-alert type="error" v-if="showError">
              Code and Position are required to add modifier.
            </v-alert>
            <v-select
              :items="modifierList"
              label="Code"
              dense
              v-model="modifier"
            ></v-select>
            <div>
              Position of Modifier
            </div>
            <template v-for="(value, key) in positions">
              <v-btn
                class="ma-2"
                small
                :outlined="key !== position"
                :color="value"
                :key="key"
                @click="position = key"
              >
                {{key}}
              </v-btn>
            </template>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" outlined @click="closeDialog()">Cancel</v-btn>
            <v-btn color="primary darken-1" outlined @click="addModifier()">Add</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <template v-for=" (modifierData, index) in selectedModifiers">
      <v-chip
        class="ma-2"
        :color="positions[modifierData.position]"
        text-color="white"
        close
        @click:close="removeModifier(index)"
        :key="'modifierData' + index"
      >
        <v-avatar
          left
          class="grey darken-4"
        >
          {{ modifierData.position }}
        </v-avatar>
        {{ modifierData.value }}
      </v-chip>
    </template>

  </v-card>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: ['value'],
  data () {
    return {
      selectedModifiers: [],
      showModifierDialog: false,
      position: '',
      modifier: '',
      showError: false
    }
  },
  computed: {
    ...mapState(['modifierList', 'positions'])
  },
  mounted () {
    // Prefill modifiers while editing service
    this.selectedModifiers = Object.assign([], this.value)
  },
  methods: {
    addModifier () {
      if (!this.position || this.modifier) {
        this.showError = true;
        return;
      }
      this.selectedModifiers.push({ position: this.position, value: this.modifier });
      this.$emit('input', this.selectedModifiers);
      this.closeDialog();
    },
    removeModifier (index) {
      this.selectedModifiers.splice(index, 1);
      this.$emit('input', this.selectedModifiers);
    },
    closeDialog () {
      // Reset values and hide modal
      this.position = '';
      this.modifier = '';
      this.showError = false;
      this.showModifierDialog = false;
    }
  }
}
</script>
