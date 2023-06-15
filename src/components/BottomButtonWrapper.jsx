import React from "react"
import "../css/BottomButtonWrapper.css"

function BottomButtonWrapper({fillFieldsWithExample, resetFields}) {
    return (
        <div className="bottom-button-wrapper">
            <button className="print-btn">Print (not implemented)</button>
            <button
                data-testid="load-data-btn"
                className="example-btn"
                onClick={fillFieldsWithExample}
            >
                Load example
            </button>
            <button className="reset-btn" onClick={resetFields}>
                Reset
            </button>
        </div>
    )
}

export default BottomButtonWrapper
