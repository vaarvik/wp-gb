import WPAlignmentMatrixControl from "./components/WPAlignmentMatrixControl";
import WPAnglePickerControl from "./components/WPAnglePickerControl";
import WPAnimate from "./components/WPAnimate";
import WPButton from "./components/WPButton";

const components = [
    {
        title: "Button",
        summary: "A simple button.",
        githubLink: "",
        tags: [],
        props: [],
        slug: "button",
        category: "components",
        render: WPButton
    },
    {
        title: "Alignment Matrix Control",
        summary: "Alignment for background images for example.",
        githubLink: "",
        tags: [],
        props: [],
        slug: "alignmentmatrixcontrol",
        category: "components",
        render: WPAlignmentMatrixControl,
    },
    {
        title: "Angle Picker Control",
        summary: "When in need of an angle.",
        githubLink: "",
        tags: [],
        props: [
            {
                name: "value",
                description: "",
            },
            {
                name: "onChange",
                description: "",
            },
        ],
        slug: "anglepickercontrol",
        category: "components",
        render: WPAnglePickerControl
    },
    {
        title: "Animate",
        summary: "Adds animation to it’s children on its appearance.",
        githubLink: "",
        tags: [],
        props: [
            {
                name: "type",
                description: "",
            },
        ],
        slug: "animate",
        category: "components",
        render: WPAnimate
    },
];

export default components;
