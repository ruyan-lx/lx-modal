import { openModal } from "./LxModal";
import HelloWorld from "./HelloWorld/HelloWorld.vue";

// 按需引入
export { openModal };

// const component :any= [HelloWorld];

export default {
    // install(App:any) {
    //     component?.forEach((item:any) => {
    //         App.component(item.name, item);
    //     });
    // },
    install(app:any) {
        app.component('HelloWorld', HelloWorld);
    }
};