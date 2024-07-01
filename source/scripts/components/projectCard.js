/**
 * Custom element for work experiences
 */

// template to customize HTML
const projectTemplate = document.createElement("template");
projectTemplate.innerHTML = `
    <style>
        div {
            border: 2px solid black;
        }

        h3 {
            color: green;
        }

        #tags {
            color: red;
        }

        div > div:not(.active) {
            display: none;
        }
    </style>

    <div>
        <h3>
            <slot></slot>
        </h3>
        <ul id="tags">
            <slot name="tags"></slot>
        </ul>
        <div id="image" class="active">
            <slot name="image"></slot>
        </div>
        <div id="description">
            <slot name="description"></slot>
        </div>
    </div>
`;

/**
 * Custom class for experience, allowing for interactivity and format
 */
class ProjectCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(projectTemplate.content.cloneNode(true));
    }
}

// define custom element in the HTML
customElements.define("project-card", ProjectCard);