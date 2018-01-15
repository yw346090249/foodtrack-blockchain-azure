

Vue.component("farm-farming-list", {
    template: `
    <div>  
    <v-btn block color="secondary" @click="router.push({ name: 'farm-farming-add' })">Add Farming Info</v-btn>
    
    <v-list two-line subheader>
    <v-subheader>Farming Info</v-subheader>
    <v-list-tile avatar v-for="opt in farming">
      <v-list-tile-content>
        <v-list-tile-title>{{opt.name}}</v-list-tile-title>
        <v-list-tile-sub-title>{{opt.desc}}</v-list-tile-sub-title>
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
        farming:function (){
            if(!this.$store.state.account) {
                router.push({ name: 'signin' })
                return null;
            }
            if(!this.$store.state.farm) {
                return [];
            }
            return this.$store.state.farm.farming;
        } 
    },
    mounted () {
        this.$store.commit("list_farm_farming")
    }
});