
const store = new Vuex.Store({
    state: {
        account:null,
        farm:{}
    },
    mutations: {
        signup: function (state, p) {
            localdbHelper.addAccount(p)
        },

        signin: function (state, p) {
            state.account = localdbHelper.queryAccount(p.usr, p.pwd)
        },

        signout: function (state) {
            state.account = null
            router.push({ name: 'signin' })
        },
        
        add_farm_operator : function(state, p) {
            localdbHelper.addFarmOperator(state.account.usr, p)
            router.push({ name: 'farm-operator-list' })
        },

        list_farm_operator : function(state, p) {
            state.farm.operators = localdbHelper.listFarmOperator(state.account.usr)
        }


    }
})