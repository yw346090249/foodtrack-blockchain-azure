Vue.component("farm-profile-view", {
    template: `
    <div>    
    <v-list two-line subheader>
    <v-list-tile-content>
      <v-list-tile-title>Farm</v-list-tile-title>
    </v-list-tile-content>
    </v-list>
    </div>     
    `,
    store: store,

    data () {
      return {

      }
    },
    methods: {

    },   
    computed: {
        operators:function (){
            if(!this.$store.state.account) {
                router.push({ name: 'signin' })
                return null;
            }
            if(!this.$store.state.farm) {
                return [];
            }
            return this.$store.state.farm.profiles;
        } 
    },
    mounted () {
        this.$store.commit("list_farm_operator")
    }
});