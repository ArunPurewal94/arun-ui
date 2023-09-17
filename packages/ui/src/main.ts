import { App } from "vue";
import ArButton from "./ArButton/ArButton.vue";
import ArCard from "./ArCard/ArCard.vue";

export { ArButton, ArCard };

// export the entire library as a plugin, so it can be installed via app.use() // comment this out if you don't want to install the entire library

export default {
  install: (app: App) => {
    app.component("ArButton", ArButton);
    app.component("ArCard", ArCard);
  },
};
