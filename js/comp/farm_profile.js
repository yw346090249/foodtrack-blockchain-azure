Vue.component("farm-profile-view", {
    template: `
    <form>
        <v-text-field
            v-model="farmname"
            label="Farm Name"
            :counter="30"
            v-validate="'required|max:30'"
            data-vv-name="farmname"
            required
        ></v-text-field>
        <v-text-field
            v-model="farmname"
            label="Farm Name"
            :counter="30"
            v-validate="'required|max:30'"
            data-vv-name="farmname"
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
        password: '',
        password2: '',
        types:['Farm','Packing','Logistics','Retailer','Admin'],
        type:'Farm'
      }
    },
    methods: {
      submit () {
        this.$store.commit("signup", {usr:this.name,pwd:this.password,type:this.type})
        this.clear();
        router.push({ name: 'signin' })
      },
      clear () {
        this.name = ''
        this.password = ''
        this.password2 = ''
        this.type = 'Farm'
      }
    },

    mounted () {

    }
});