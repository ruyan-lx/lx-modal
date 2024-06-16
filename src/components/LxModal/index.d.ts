import { Component } from "vue";

declare const openModal: (component:string | Component,props: object | null) => Promise<any>;
export default openModal;