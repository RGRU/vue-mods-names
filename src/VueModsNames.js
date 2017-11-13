let VueModsNames = {
    install(Vue) {

        Vue.mixin({
            computed: {
                classArr() {
                    if (Array.isArray(this.mods)) {

                        return !!this.mods && this.mods.map(i => this.name + i);

                    }

                    return `this.name_${this.mods}`;
                }
            }
        })
    }
};

export default VueModsNames;
