import { App } from "vue";
import ArButton from "./ArButton/ArButton.vue";
import ArCard from "./ArCard/ArCard.vue";
import ArCardContent from "./ArCard/ArCardContent.vue";
import ArCardImage from "./ArCard/ArCardImage.vue";
import ArCardLinks from "./ArCard/ArCardLinks.vue";
import ArCardList from "./ArCard/ArCardList.vue";
import ArCardListItem from "./ArCard/ArCardListItem.vue";
import ArCardTitle from "./ArCard/ArCardTitle.vue";

export {
  ArButton,
  ArCard,
  ArCardContent,
  ArCardImage,
  ArCardLinks,
  ArCardList,
  ArCardListItem,
  ArCardTitle,
};

// export the entire library as a plugin, so it can be installed via app.use() // comment this out if you don't want to install the entire library

export default {
  install: (app: App) => {
    app.component("ArButton", ArButton);
    app.component("ArCard", ArCard);
    app.component("ArCardContent", ArCardContent);
    app.component("ArCardImage", ArCardImage);
    app.component("ArCardLinks", ArCardLinks);
    app.component("ArCardList", ArCardList);
    app.component("ArCardListItem", ArCardListItem);
    app.component("ArCardTitle", ArCardTitle);
  },
};
