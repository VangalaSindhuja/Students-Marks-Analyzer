 const name=["sindhu","gana","ganasri"];
        const marks=[15,80,99];
    const table=document.getElementById("demo");
    let max=marks[0];
        let maxind=0;
         let min=marks[0];
       let minind=0;
       let result="";
    for(let i=0;i<name.length;i++){
        let row=document.createElement("tr");
        let cell=document.createElement("td");
        cell.innerText=name[i];
        let cells=document.createElement("td");
        cells.innerText=marks[i];
        row.appendChild(cell);
        row.appendChild(cells);
        table.appendChild(row);
    if(marks[i]>21){
        result="pass";
    }
    else{
             result="fail";
    }
    let cell3=document.createElement("td");
    cell3.innerText=result;
    row.appendChild(cell3);
    if(marks[i]>max){
            max=marks[i];
            maxind=i;
        }
        if(marks[i]<min){
         min=marks[i];
         minind=i;
        }
    }
    document.getElementById("gana").innerHTML = 
            "Highest: " + name[maxind] + " → " + max;

        document.getElementById("gs").innerHTML = 
            "Lowest: " + name[minind] + " → " + min;