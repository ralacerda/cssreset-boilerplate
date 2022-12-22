import { defineStore } from "pinia";

const options = {
  basic: false,
  resetLinkDecoration: false,
  resetLinkDecorationWithoutClass: false,
};

const userOptions = useLocalStorage("options", options);

export const useOptionsStore = defineStore("options", {
  state: () => {
    return userOptions;
  },
});
