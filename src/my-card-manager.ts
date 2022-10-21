import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "/src/my-card";
import "/src/my-bg";
import "/src/my-intro";
import "/src/my-footer";
import "/src/index.css";
import { PageKeys } from "./types";

@customElement("my-card-manager")
export class MyCardManager extends LitElement {
  async firstUpdated() {
    await new Promise((resolve) => setTimeout(resolve, 1));
    window.addEventListener("click", this.closeOpenCards);
  }

  closeOpenCards = (e: Event) => {
    e.preventDefault();
    this.handleOpen({ detail: "" });
  };

  disconnectedCallback(): void {
    window.removeEventListener("click", this.closeOpenCards);
  }

  @property()
  private _openCardName: PageKeys = "";

  render() {
    return html`
      <my-intro></my-intro>
      <my-bg openCardName=${this._openCardName}></my-bg>
      <my-card
        cardName="cardone"
        openCardName=${this._openCardName}
        @handle-open=${this.handleOpen}
      >
        <div slot="title">Breakfast</div>
        <div slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          <h2>More info</h2>
          <ul>
            <li>
            Semper auctor neque vitae tempus quam. Sed id semper risus in hendrerit. 
            </li>
            <li>
            Suscipit adipiscing bibendum est ultricies integer. Vulputate ut pharetra sit amet aliquam id. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. 
            </li>
            <li>
            Enim praesent elementum facilisis leo vel fringilla est ullamcorper.
            </li>
          </ul>
        </div>
      </my-card>
      <my-card
        cardName="cardtwo"
        openCardName=${this._openCardName}
        @handle-open=${this.handleOpen}
      >
        <div slot="title">Lunch</div>
        <div slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          <h2>More info</h2>
          <ul>
            <li>
            Semper auctor neque vitae tempus quam. Sed id semper risus in hendrerit. 
            </li>
            <li>
            Suscipit adipiscing bibendum est ultricies integer. Vulputate ut pharetra sit amet aliquam id. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. 
            </li>
            <li>
            Enim praesent elementum facilisis leo vel fringilla est ullamcorper.
            </li>
          </ul>
        </div>
      </my-card>
      <my-card
        cardName="cardthree"
        openCardName=${this._openCardName}
        @handle-open=${this.handleOpen}
      >
        <div slot="title">Dinner</div>
        <div slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          <h2>More info</h2>
          <ul>
            <li>
            Semper auctor neque vitae tempus quam. Sed id semper risus in hendrerit. 
            </li>
            <li>
            Suscipit adipiscing bibendum est ultricies integer. Vulputate ut pharetra sit amet aliquam id. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. 
            </li>
            <li>
            Enim praesent elementum facilisis leo vel fringilla est ullamcorper.
            </li>
          </ul>
        </div>
      </my-card>
      <my-card
        cardName="cardfour"
        openCardName=${this._openCardName}
        @handle-open=${this.handleOpen}
      >
        <div slot="title">Dessert</div>
        <div slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          <h2>More info</h2>
          <ul>
            <li>
            Semper auctor neque vitae tempus quam. Sed id semper risus in hendrerit. 
            </li>
            <li>
            Suscipit adipiscing bibendum est ultricies integer. Vulputate ut pharetra sit amet aliquam id. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. 
            </li>
            <li>
            Enim praesent elementum facilisis leo vel fringilla est ullamcorper.
            </li>
          </ul>
        </div>
          <button class="print" @click=${() => window.print()}>
            Print this page
          </button>
        </div>
      </my-card>
      <my-footer></my-footer>
    `;
  }

  handleOpen(event: { detail: PageKeys }) {
    if (this._openCardName === event.detail) {
      return;
    }
    this._openCardName = event.detail;
  }

  static styles = css`
    :host {
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
      width: 100%;
    }

    .contact-me-svg {
      fill: #ddd;
    }

    .print {
      border: 0;
      background: none;
      font-size: 20px;
      margin: 8px 0;
      padding: 0;
      cursor: pointer;
      color: rgba(255, 255, 255, 0.87);
      font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    }
    .print:hover {
      color: #aedcfa;
    }

    @media print {
      .contact-me-svg {
        fill: #111;
      }
      .print {
        display: none;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-card-manager": MyCardManager;
  }
}
