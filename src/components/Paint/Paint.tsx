import { useEffect } from "react";


const Paint = () => {
    useEffect(() => {
        const canvas : any = document.getElementById('paint');
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(50, 100);
        ctx.lineTo(150, 100);
        ctx.stroke();
    });

    return(
        <div className="">
            <canvas id="paint" width={500} height={500}>

            </canvas>
        </div>
    )
}

export default Paint;