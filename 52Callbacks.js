// let a = prompt("What is your name");

function loadscript(src, callback)
{
    var script = document.createElement('script')
    script.src = src;;
    script.onload = () => {
        console.log("loaded script with src: ", src);
        callback();
    }
    script.onerror = function ()
    {
        console.log("error occured")
    }
    // document.body.appendChild(script);
}

function hello(src){
    console.log("hello ", src);
}

function goodmorning(src){
    console.log("GM ", src);
}

loadscript("https://dkfjdkjfkkdlfjdljlj", hello);