Vue.component("signin-view", {
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
            name="input-10-1"
            label="Enter your password"
            v-model="password"
            v-validate="'required|max:16'"
            :counter="16"
            type="password"
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
      }
    },
    methods: {
      submit () {
        this.$store.commit("signin", {usr:this.name,pwd:this.password})
        this.clear();
        router.push({ name: 'account' })
      },
      clear () {
        this.name = ''
        this.password = ''
      }
    },

    mounted () {

    }
});