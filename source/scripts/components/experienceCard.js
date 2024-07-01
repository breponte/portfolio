/**
 * Custom element for work experiences
 */

// template to customize HTML
const experienceTemplate = document.createElement("template");
experienceTemplate.innerHTML = `
    <style>
        div {
            border: 2px solid black;
        }

        h3 {
            color: red;
        }

        #company {
            color: blue;
        }

        #date {
            color: green;
        }

        div > div:not(.active) {
            display: none;
        }
    </style>

    <div>
        <h3>
            <slot></slot>
        </h3>
        <p id="company">
            <slot name="company"></slot>
        </p>
        <p id="date">
            <slot name="date"></slot>
        </p>
        <div id="image" class="active">
            <slot name="image"></slot>
        </div>
        <div id="description">
            <slot></slot>
            <slot name="description"></slot>
        </div>
    </div>
`;

/**
 * Custom class for experience, allowing for interactivity and format
 */
class ExperienceCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(experienceTemplate.content.cloneNode(true));
    }
}

// define custom element in the HTML
customElements.define("experience-card", ExperienceCard);