import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";
import router from "./router";
import FightingDesign from "fighting-design";
import "fighting-design/dist/index.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

createApp(App)
  .use(router)
  .use(FightingDesign, ArcoVue)
  .use(ElementPlus)
  .mount("#app");

// rem等比实现
function setFontSize() {
  let designWidth: any = 1920; //设计稿的宽度
  let designHeight = 1080; //设计稿的高度
  var fontSize =
    document.documentElement.clientWidth /
      document.documentElement.clientHeight <
    designWidth / designHeight
      ? (document.documentElement.clientWidth / designWidth) * 12
      : (document.documentElement.clientHeight / designHeight) * 12;
  if (fontSize <= 8.15) {
    fontSize = 8.15;
  }

  document.querySelector("html")!.style.fontSize = fontSize + "px";
}
window.onload = function () {
  setFontSize();
  window.onresize = function () {
    setFontSize();
  };
};
