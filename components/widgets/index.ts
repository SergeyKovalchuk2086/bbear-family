import { defineAsyncComponent } from "vue";

const Header = defineAsyncComponent(() => import("./Header/index.vue"));

export { Header };
