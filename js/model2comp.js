function model2createview(model, rountes, menus) {
    let fields = [];
    let dataobj = {};
    const modelName = model.name;
    const isRequired = function (required) {
        return required ? '' : 'required';
    }
    for (let item of model.schema) {

        for (let key in item) {
            let name = key;
            let props = item[key]
            if (props.type === 'string') {
                fields.push(`<v-text-field
                        v-model="dataobj.${name}"
                        label="${name}"
                        data-vv-name="dataobj.${name}"
                        ${isRequired(props.required)}
                    ></v-text-field>`);
            } else if (props.type === 'number') {
                fields.push(`<v-text-field
                        v-model="dataobj.${name}"
                        label="${name}"
                        data-vv-name="dataobj.${name}"
                        ${isRequired(props.required)}
                        type="number"
                    ></v-text-field>`);
            } else if (props.type === 'date') {
                fields.push(`<v-text-field
                        v-model="dataobj.${name}"
                        label="${name}"
                        data-vv-name="dataobj.${name}"
                        ${isRequired(props.required)}
                        type="date"
                    ></v-text-field>`);
            }

            dataobj[name] = null
        }

    }
    const createtemplate = `<form>
        <h3>Create ${modelName}</h3>
        <p><p>
        ${fields.join()}
        <v-btn @click="submit">Create</v-btn>
        <v-btn @click="clear">Clear</v-btn>
    </form>`;
    const createview = {
        template: createtemplate,
        data() {
            return {dataobj:dataobj}
        },
        methods: {
            submit() {
                let that = this;
                axios({
                    method: 'put',
                    url: '/api/' + modelName,
                    responseType: 'json',
                    data: that.dataobj

                }).then(function (response) {
                    that.clear();
                    router.push({ name: `${modelName}-list` })
                }).catch(function (error) {
                    console.log(error)
                });
                // this.$store.commit("add_farm_operator", dataobj)
                // this.clear();
                // router.push({ name: 'farm-operator-list' })
            },
            clear() {
                for (let key in this.dataobj) {
                    this.dataobj[key] = ""
                }
            }
        },
    }
    const listview = {
        template: `
        <div>
        <v-btn block color="secondary" @click="gotoCreateView">Add ${modelName}</v-btn>
        <v-list two-line subheader>
        <v-subheader>${modelName}</v-subheader>
        <v-list-tile avatar v-for="(obj, idx) in objs" @click="gotoEditView(obj._id)">
          <v-list-tile-content >
            <v-list-tile-title>{{obj["${model.list.title}"]}}</v-list-tile-title>
            <v-list-tile-sub-title>{{obj["${model.list.desc}"]}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-list>
        </div>
        `,
        data() {
            return {
                objs: []
            }
        },
        methods: {
            loadAll() {
                let that = this;
                axios({
                    method: 'get',
                    url: '/api/' + modelName,
                    responseType: 'json'
                }).then(function (response) {
                    that.objs = response.data;
                }).catch(function (error) {
                    console.log(error)
                });
            },
            gotoEditView(id) {
                router.push({ name: `${modelName}-edit`, params:{id:id} })
            },


            gotoCreateView() {
                router.push({ name: `${modelName}-create` })
            }
        },
        mounted() {
            this.loadAll();
        }
    }
    // Vue.component(`${modelName}-editview`, {
    const updatetemplate = `<form>
        <h3>Update ${modelName}</h3>
        <p><p>
        ${fields.join()}
        <v-btn @click="submit">Update</v-btn>
        <v-btn @click="clear">Clear</v-btn>
        <v-btn @click="deleteObj">Delete</v-btn>
    </form>`;
    const editview = {
        props:["id"],
        template: updatetemplate,
        data() {
            return {dataobj:dataobj}
        },
        methods: {
            submit() {
                let that = this;
                axios({
                    method: 'post',
                    url: '/api/' + modelName+'/'+that.id,
                    responseType: 'json',
                    data: that.dataobj

                }).then(function (response) {
                    that.clear();
                    router.push({ name: `${modelName}-list` })
                }).catch(function (error) {
                    console.log(error)
                });
                // this.$store.commit("add_farm_operator", dataobj)
                // this.clear();
                // router.push({ name: 'farm-operator-list' })
            },
            deleteObj() {
                let that = this;
                axios({
                    method: 'delete',
                    url: '/api/' + modelName+'/'+that.id,
                    responseType: 'json'

                }).then(function (response) {
                    that.clear();
                    router.push({ name: `${modelName}-list` })
                }).catch(function (error) {
                    console.log(error)
                });
                // this.$store.commit("add_farm_operator", dataobj)
                // this.clear();
                // router.push({ name: 'farm-operator-list' })
            },
            clear() {
                for (let key in this.dataobj) {
                    this.dataobj[key] = ""
                }
            },
            loadObj() {
                let that = this;
                axios({
                    method: 'get',
                    url: '/api/' + modelName+'/'+that.id,
                    responseType: 'json'
                }).then(function (response) {
                    that.dataobj = response.data;
                }).catch(function (error) {
                    console.log(error)
                });
            },
        },
        mounted() {
            this.loadObj()
        }
    };
    routes.push({ name: `${modelName}-create`, path: `/${modelName}-create`, component: createview });
    routes.push({ name: `${modelName}-list`, path: `/${modelName}-list`, component: listview });
    routes.push({ name: `${modelName}-edit`, path: `/${modelName}-edit/:id`, props: true, component: editview });
    
    menus.push({path: `/${modelName}-list`, title: model.title})


}

