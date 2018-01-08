Vue.component("signup-view", {
    template: `
    <form>
        <v-text-field
            v-model="name"
            label="User Name"
            :counter="30"
            v-validate="'required|max:30'"
            data-vv-name="name"
            required
        ></v-text-field>
        <v-text-field
            name="password"
            label="Enter your password"
            v-model="password"
            v-validate="'required|max:16'"
            :counter="16"
            type="password"
        ></v-text-field>
        <v-text-field
            name="password2"
            label="Enter your password again"
            v-model="password2"
            v-validate="'required|max:16'"
            :counter="16"
            type="password"
        ></v-text-field>
        <v-select
            v-bind:items="types"
            v-model="type"
            label="Type"
            autocomplete
        ></v-select>

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