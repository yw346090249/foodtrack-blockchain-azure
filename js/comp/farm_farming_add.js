Vue.component("farm-farming-add", {
    template: `
    <form>
        <v-text-field
            v-model="name"
            label="Farming Name"
            :counter="100"
            v-validate="'required|max:100'"
            data-vv-name="name"
            required
        ></v-text-field>

        <v-text-field
          v-model="desc"
          label="Description"
          :counter="100"
          v-validate="'required|max:100'"
          data-vv-name="desc"
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
        desc: ''
      }
    },
    methods: {
      submit () {
        this.$store.commit("add_farm_farming", {name:this.name, desc:this.desc})
        this.clear();
        router.push({ name: 'farm-farming-list' })
      },
      clear () {
        this.name = ''
        this.password = ''
      }
    },

    mounted () {

    }
});