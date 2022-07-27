
const chart = document.getElementById('chart');

async function getJSON() {
    const resp = await fetch("data.json");
    const respData = await resp.json();

    chartHeight(respData);
}

function chartHeight(datas){

    datas.forEach(data => {
    let chartBtn = document.createElement('button');
        
    // map through data and get into chart
    chartBtn.innerHTML = `<div class="num" id="num">$${data.amount}</div>
    <div class="chart-line" id="${data.day}" style="height:${Math.round(data.amount*2.5)}px;"></div>
    <p>${data.day}</p>`

    chart.appendChild(chartBtn);

    });

     
    
    }
    
    getJSON();



    // chart.addEventListener("mouseover", () =>{
    //     chartNum.classList.add("num");
    //     chartNum.classList.remove("num-disp");
    // })
    





// charts.forEach((chart)=>{
    
// });