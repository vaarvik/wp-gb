import { Animate, Notice } from "@wordpress/components";

function WPAnimate(){
    return (
        <div className="wp-component-wrapper">
            <Animate type="slide-in">
                { ( { className } ) => (
                    <Notice className={ className } status="success">
                        Slide-in animation. This is where important messages would go.
                    </Notice>
                ) }
            </Animate>
        </div>
    )
}

export default WPAnimate;