

Vue.component("farm-operator-list", {
    template: `
    <div>
    <v-btn block color="secondary" @click="router.push({ name: 'farm-operator-add' })">Add Operator</v-btn>
    
    <v-list two-line subheader>
    <v-subheader>Operators</v-subheader>
    <v-list-tile avatar v-for="opt in operators">
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
        operators:function (){
            if(!this.$store.state.account) {
                router.push({ name: 'signin' })
                return null;
            }
            if(!this.$store.state.farm) {
                return [];
            }
            return this.$store.state.farm.operators;
        } 
    },
    mounted () {
        this.$store.commit("list_farm_operator")
    }
});