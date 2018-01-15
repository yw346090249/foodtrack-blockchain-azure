

Vue.component("farm-address-list", {
    template: `
    <div>  
    <v-btn block color="secondary" @click="router.push({ name: 'farm-address-add' })">Add Farm Address</v-btn>
    
    <v-list two-line subheader>
    <v-subheader>Farm Address</v-subheader>
    <v-list-tile avatar v-for="opt in address">
      <v-list-tile-content>
        <v-list-tile-title>{{opt.name}}</v-list-tile-title>
        <v-list-tile-sub-title>{{opt.addr}}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
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
        address:function (){
            if(!this.$store.state.account) {
                router.push({ name: 'signin' })
                return null;
            }
            if(!this.$store.state.farm) {
                return [];
            }
            return this.$store.state.farm.address;
        } 
    },
    mounted () {
        this.$store.commit("list_farm_address")
    }
});