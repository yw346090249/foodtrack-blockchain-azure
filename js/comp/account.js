Vue.component("account-view", {
    template: `


    <div>
        <v-alert v-if="!usr" color="info" icon="info"  v-model="alert">
        Please sign in your account or sign up!
        </v-alert>

        <v-alert v-if="usr" color="info" icon="info"  v-model="alert">
        Welcome {{usr}}! Please use the left menu for the function to your action.
        </v-alert>
    </div>

    `,
    store: store,

    data () {
      return {
        alert : true
      }
    },
    methods: {

    },

    computed: {
        usr:function (){
            return this.$store.state.account && this.$store.state.account.usr;
        } 
    }
});