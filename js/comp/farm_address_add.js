Vue.component("farm-address-add", {
    template: `
    <form>
        <v-text-field
            v-model="name"
            label="Farm Name"
            :counter="100"
            v-validate="'required|max:100'"
            data-vv-name="name"
            required
        ></v-text-field>

        <v-text-field
          v-model="addr"
          label="Farm Address"
          :counter="100"
          v-validate="'required|max:100'"
          data-vv-name="addr"
          required
      ></v-text-field>
        


        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
    </form>
    `,
    store: store,

    data () {
      return {
        name: '',
        addr: ''
      }
    },
    methods: {
      submit () {
        this.$store.commit("add_farm_address", {name:this.name, addr:this.addr})
        this.clear();
        router.push({ name: 'farm-address-list' })
      },
      clear () {
        this.name = ''
        this.password = ''
      }
    },

    mounted () {

    }
});