const root = document.getElementById("root");

function AddP(){
    const iny = document.getElementById("in").value;
    const p = document.createElement("p");
    p.innerText = iny;
    root.appendChild(p);
    document.getElementById("in").value = "";
}