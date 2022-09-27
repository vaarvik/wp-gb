import WPAlignmentMatrixControl from "./components/WPAlignmentMatrixControl";
import WPAnglePickerControl from "./components/WPAnglePickerControl";
import WPAnimate from "./components/WPAnimate";
import WPButton from "./components/WPButton";

const components = [
    {
        title: "Button",
        summary: "A simple button.",
        render: WPButton
    },
    {
        title: "Alignment Matrix Control",
        summary: "Alignment for background images for example.",
        render: WPAlignmentMatrixControl
    },
    {
        title: "Angle Picker Control",
        summary: "When in need of an angle.",
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
        render: WPAnglePickerControl
    },
    {
        title: "Animate",
        summary: "Adds animation to it’s children on its appearance.",
        props: [
            {
                name: "type",
                description: "",
            },
        ],
        render: WPAnimate
    },
];

export default components;