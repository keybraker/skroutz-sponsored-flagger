import { State } from "../types/State";
import { toggleVisibility } from "./sponsoredUtil";

export function toggleSponsoredContentVisibility(state: State) {
  toggleVisibilityBySelector("li.flagged-product", state);
  toggleVisibilityBySelector("div.flagged-shelf", state);
  toggleVisibilityBySelector("div.selected-product-cards", state);
  toggleVisibilityBySelector("div.flagged-bought-together", state);
}

function toggleVisibilityBySelector(selector: string, state: State) {
  const elements = document.querySelectorAll(selector);
  elements?.forEach((element) => toggleVisibility(element, state));
}
