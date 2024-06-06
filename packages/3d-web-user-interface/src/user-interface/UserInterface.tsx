import {forwardRef} from "react";
import {flushSync} from "react-dom";
import {createRoot, Root} from "react-dom/client";
import {UserInterfaceComponent} from "./UserInterfaceComponent";

const UserInterfaceReference = forwardRef(UserInterfaceComponent);
export class UserInterface {
  private root: Root;

  private wrapper = document.createElement("div");
  constructor(
    private holderElement: HTMLElement,
    private clientname: string
  ) {
    this.holderElement.appendChild(this.wrapper);
    this.root = createRoot(this.wrapper);
  }

  init() {
    flushSync(() =>
      this.root.render(
        <UserInterfaceReference
            ref={this.appRef}
        />,
      ),
    );
  }
}
