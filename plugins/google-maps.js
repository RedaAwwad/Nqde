import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.MAP_API_KEY || 'AIzaSyBYYsHfLvLMjJVwKp3jm2fw9jNo_JKfvik',
        libraries: "places,drawing,visualization"
    }
});
