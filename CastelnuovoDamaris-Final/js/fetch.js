/*infomacion*/
const lista = document.querySelector("#tabl")
fetch("/data.json")
.then((res)=>res.json())
.then((data)=>{
    data.forEach((x)=>{
        const li = document.createElement("li")
        li.innerHTML=`
        <table border="1" class="tabla">

        <tr>
            <td>${x.titulo}</td>
            <td>${x.titulo2}</td>
            <td>${x.titulo3}</td>
        </tr>

        <tr>
            <td>${x.Pr}</td>
            <td>${x.Pr2}</td>
            <td>${x.Pr3}</td>
        </tr>

        <tr>
            <td>${x.ps}</td>
            <td>${x.ps2}</td>
            <td>${x.ps3}</td>
        </tr>

        <tr>
        <td>${x.pt}</td>
        <td>${x.pt2}</td>
        <td>${x.pt3}</td>
    </tr>    

    <tr>
    <td>${x.pc}</td>
    <td>${x.pc2}</td>
    <td>${x.pc3}</td>
</tr>

    <tr>
    <td>${x.pq}</td>
    <td>${x.pq2}</td>
    <td>${x.pq3}</td>
    </tr>

    <tr>
    <td>${x.px}</td>
    <td>${x.px2}</td>
    <td>${x.px3}</td>
    </tr>

    </table>
        `
        lista.append(li);
    });
});