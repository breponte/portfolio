/**
 * Custom element for work experiences
 */

// template to customize HTML
const projectTemplate = document.createElement("template");
projectTemplate.innerHTML = `
    <style>
        div {
            background-color: var(--blue);
            border-radius: 1.5rem;
            display: grid;
            grid-template-columns: 20rem 20rem;
            grid-template-rows: 10rem 20rem;
            padding: 1rem;
        }

        h3 {
            font-family: IBMPlexMono;
            color: var(--white);
            margin: 0;
            font-size: 1.5rem;
        }

        /* TODO: Styling not working */
        ul {
            list-style-type: square;
            background-color: var(--white);
        }

        ul li {
            background-color: red;
        }

        div > div {
            width: 100%;
            height: 100%;
            grid-column: span 2;
            border-radius: 0rem 0rem 1.5rem 1.5rem;
            display: flex;
            justify-self: center;
            justify-content: center;
            align-items: center;
            background-color: var(--purple);
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