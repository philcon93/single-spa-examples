import singleSpaHtml from "single-spa-html"; // single-spa helper
import template from "./template.html"; // html template is separated out so that we can get better syntax highlighting
import "./styles.css?modules=false"; // styles are global so these are based on IDs

const htmlLifecycles = singleSpaHtml({
  template
});

export const { bootstrap, unmount, mount } = htmlLifecycles; // export other lifecycles as-is
