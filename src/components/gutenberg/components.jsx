import WPAlignmentMatrixControl from "./components/WPAlignmentMatrixControl";
import WPAnglePickerControl from "./components/WPAnglePickerControl";
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
        render: WPAnglePickerControl
    },
];

export default components;