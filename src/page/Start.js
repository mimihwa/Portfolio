import React, {useState, useEffect, useRef} from "react";
import { Link } from 'react-router-dom';
import './style/Start.scss';

export default function Test(){
      
    /* const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight; */
    
    const canvas = useRef();
    console.log(canvas);


    const screenWidth = canvas.width = window.innerWidth
    const screenHeight = canvas.height = window.innerHeight;
    const [width, setWidth] = useState(screenWidth);
    const [height, setHeight] = useState(screenHeight);

    const handleResize = () => {
        const newWidth = window.innerWidth
        const newHeigh = window.innerHeight;

        setWidth(newWidth);
        setHeight(newHeigh);
    };

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        return(()=>{
            window.removeEventListener('resize', handleResize);
        })
    })
    

    

    if(window.innerWidth>1200){
        canvas.width = window.innerWidth * 0.7;
        canvas.height = window.innerHeight * 0.7;
    }else if(window.innerWidth<1200){
        canvas.width = window.innerWidth * 0.9;
        canvas.height = window.innerHeight * 0.9;
    }else if(window.innerWidth<1000){
        canvas.width = window.innerWidth * 1.1;
        canvas.height = window.innerHeight * 1.1;
    }else if(window.innerWidth<800){
        canvas.width = window.innerWidth * 1.4;
        canvas.height = window.innerHeight * 1.4;
    }
    else if(window.innerWidth<600){
        canvas.width = window.innerWidth * 1.8;
        canvas.height = window.innerHeight * 1.8;
    }else{
        canvas.width = window.innerWidth * 2.1;
        canvas.height = window.innerHeight * 2.1;
    }
    
    const gl = canvas.getContext('webgl');
    console.log(canvas.value);

    var mouse = {x: 0, y: 0};
    var numMetaballs = 30;
    var metaballs = [];

    for (var i = 0; i < numMetaballs; i++) {
        var radius = Math.random() * 60 + 10;
        metaballs.push({
            x: Math.random() * (width - 2 * radius) + radius,
            y: Math.random() * (height - 2 * radius) + radius,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3,
            r: radius * 0.75
        });
    }

    var vertexShaderSrc = `
        attribute vec2 position;

        void main() {
        // position specifies only x and y.
        // We set z to be 0.0, and w to be 1.0
        gl_Position = vec4(position, 0.0, 1.0);
        }
    `;

    var fragmentShaderSrc = `
        precision highp float;

        const float WIDTH = ` + (width >> 0) + `.1;
        const float HEIGHT = ` + (height >> 0) + `.1;

        uniform vec3 metaballs[` + numMetaballs + `];

        void main(){
            float x = gl_FragCoord.x;
            float y = gl_FragCoord.y;

            float sum = 0.0;
            for (int i = 0; i < ` + numMetaballs + `; i++) {
            vec3 metaball = metaballs[i];
            float dx = metaball.x - x;
            float dy = metaball.y - y;
            float radius = metaball.z;

            sum += (radius * radius) / (dx * dx + dy * dy);
        }

        if (sum >= 0.99) {
            gl_FragColor = vec4(mix(vec3(x / WIDTH, y / HEIGHT, 0.2), vec3(0.7, 0.05, 0.01), max(0.55, 0.2 - (sum - 0.0) * 100.0)), 0.4);
            return;
        }

            gl_FragColor = vec4(0.98, 0.975, 0.975, 1.0); //background
        }

    `;

    var vertexShader = compileShader(vertexShaderSrc, gl.VERTEX_SHADER);
    var fragmentShader = compileShader(fragmentShaderSrc, gl.FRAGMENT_SHADER);

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    var vertexData = new Float32Array([
    -1.0,  1.0, // top left
    -1.0, -1.0, // bottom left
    1.0,  1.0, // top right
    1.0, -1.0, // bottom right
    ]);
    var vertexDataBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

    var positionHandle = getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionHandle);
    gl.vertexAttribPointer(positionHandle,
                        2, // position is a vec2
                        gl.FLOAT, // each component is a float
                        gl.FALSE, // don't normalize values
                        2 * 4, // two 4 byte float components per vertex
                        0 // offset into each span of vertex data
                        );

    var metaballsHandle = getUniformLocation(program, 'metaballs');

    loop();
    function loop() {
        for (var i = 0; i < numMetaballs; i++) {
            var metaball = metaballs[i];
            metaball.x += metaball.vx;
            metaball.y += metaball.vy;

            if (metaball.x < metaball.r || metaball.x > width - metaball.r) metaball.vx *= -1;
            if (metaball.y < metaball.r || metaball.y > height - metaball.r) metaball.vy *= -1;
        }

    var dataToSendToGPU = new Float32Array(3 * numMetaballs);

    for (var i = 0; i < numMetaballs; i++) {
        var baseIndex = 3 * i;
        var mb = metaballs[i];
        dataToSendToGPU[baseIndex + 0] = mb.x;
        dataToSendToGPU[baseIndex + 1] = mb.y;
        dataToSendToGPU[baseIndex + 2] = mb.r;
    }

    gl.uniform3fv(metaballsHandle, dataToSendToGPU);
    
    //Draw
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimationFrame(loop);
    }

    function compileShader(shaderSource, shaderType) {
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
    }

    return shader;
    }

    function getUniformLocation(program, name) {
    var uniformLocation = gl.getUniformLocation(program, name);
    if (uniformLocation === -1) {
        throw 'Can not find uniform ' + name + '.';
    }
    return uniformLocation;
    }

    function getAttribLocation(program, name) {
    var attributeLocation = gl.getAttribLocation(program, name);
    if (attributeLocation === -1) {
        throw 'Can not find attribute ' + name + '.';
    }
    return attributeLocation;
    }

    canvas.onmousemove = function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    }

    return(
        <>
            <canvas ref={(ref) => (this.canvas = ref)} >
                <div className='title'>
                    <h1>Welcome to the<span>MIHWA WORLD</span></h1>
                    <Link to='/About'><button>ENTER</button></Link>
                </div >
            </canvas >
        </>
    )
}