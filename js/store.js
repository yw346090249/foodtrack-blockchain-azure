
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
        },

        add_farm_address : function(state, p) {
            localdbHelper.addFarmAddress(state.account.usr, p)
            router.push({ name: 'farm-address-list' })
        },

        list_farm_address : function(state, p) {
            state.farm.address = localdbHelper.listFarmAddress(state.account.usr)
        },

        add_farm_farming : function(state, p) {
            localdbHelper.addFarmFarming(state.account.usr, p)
            router.push({ name: 'farm-farming-list' })
        },

        list_farm_farming : function(state, p) {
            state.farm.farming = localdbHelper.listFarmFarming(state.account.usr)
        },

    }
})