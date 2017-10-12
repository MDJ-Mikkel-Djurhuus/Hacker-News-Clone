class App extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <div id="header">
            <slot id="headerSlot" name="header"></slot>
        </div>
        <div id="main">
            <slot id="mainSlot" name="main"></slot>
        </div>
        <div id="footer">
            <slot id="footerSlot" name="footer"></slot>
        </div>`;
    }
}
export default App;