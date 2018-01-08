Vue.component("farm-operator-add", {
    template: `
    <form>
        <v-text-field
            v-model="name"
            label="Operator Name"
            :counter="30"
            v-validate="'required|max:30'"
            data-vv-name="name"
            required
        ></v-text-field>

        <v-text-field
          v-model="desc"
          label="Operator Description"
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
        this.$store.commit("add_farm_operator", {name:this.name, desc:this.desc})
        this.clear();
        router.push({ name: 'farm-operator-list' })
      },
      clear () {
        this.name = ''
        this.password = ''
      }
    },

    mounted () {

    }
});