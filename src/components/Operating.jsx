import React from "react";

const Data = () => {
    let arr = ["Android", "Black-berry", "iphone", "Windows"]
    return (
        <div>
            <h1>Mobile Operating System</h1>
            <div>
                <li>{arr[0]}</li>
                <li>{arr[1]}</li>
                <li>{arr[2]}</li>
                <li>{arr[3]}</li>
            </div>
        </div>
    )
}

export default Data