/**
 * Custom element for work experiences
 */

// template to customize HTML
const experienceTemplate = document.createElement("template");
experienceTemplate.innerHTML = `
    <style>
        div {
            background-color: var(--blue);
            border-radius: 1.5rem;
            display: grid;
            grid-template-columns: 3fr 2fr;
            grid-template-rows: 2.5rem 2.5rem 20rem;
            padding: 1rem;
        }

        h3 {
            font-family: IBMPlexMono;
            color: var(--white);
            margin: 0;
            font-size: 1.5rem;
        }
        
        /* TODO: Broken, using outside styling and not encapsulating */
        p {
            font-family: Roboto:
            color: var(--white);
            margin: 0;
            font-size: 5rem;
        }

        div > div {
            width: 100%;
            height: 100%;
            grid-row-start: 3;
            grid-column: span 2;
            border-radius: 0rem 0rem 1.5rem 1.5rem;
            display: flex;
            justify-self: center;
            justify-content: center;
            align-items: center;
            background-color: var(--white);
        }

        div > div:not(.active) {
            display: none;
        }
    </style>

    <div>
        <h3>
            <slot></slot>
        </h3>
        <p id="date">
            <slot name="date"></slot>
        </p>
        <p id="company">
            <slot name="company"></slot>
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