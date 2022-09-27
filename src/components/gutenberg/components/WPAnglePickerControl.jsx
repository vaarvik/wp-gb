import { AnglePickerControl } from "@wordpress/components";
import { useState } from "react";


function WPAnglePickerControl(){
    const [number, onNumberChange] = useState( 180 )
    return (
        <div className="wp-component-wrapper bg">
            <AnglePickerControl 
                value={ number }
                onChange={ onNumberChange }
            />
        </div>
    )
}

export default WPAnglePickerControl;