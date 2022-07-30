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
    chartBtn.innerHTML = `<div class="num-disp" id="${data.day}">$${data.amount}</div>
    <div class="chart-line ${data.day}" style="height:${Math.round(data.amount*2.5)}px;"></div>
    <p>${data.day}</p>`

    chart.appendChild(chartBtn);

    });
    
    // getting each chart variable
    const charts = document.querySelectorAll(".chart-line");
    const monChart = document.getElementById("mon");
    const tueChart = document.getElementById("tue");
    const wedChart = document.getElementById("wed");
    const thuChart = document.getElementById("thu");
    const friChart = document.getElementById("fri");
    const satChart = document.getElementById("sat");
    const sunChart = document.getElementById("sun");


    charts.forEach(ct =>{
        // when the cursor hovers over the element
        ct.addEventListener("mouseover", () =>{
            if(ct.classList.contains('mon')){
                monChart.classList.add("num");
                monChart.classList.remove("num-disp");
            }else if(ct.classList.contains('tue')){
                tueChart.classList.add("num");
                tueChart.classList.remove("num-disp");    
            }else if(ct.classList.contains('wed')){
                wedChart.classList.add("num");
                wedChart.classList.remove("num-disp");    
            }else if(ct.classList.contains('thu')){
                thuChart.classList.add("num");
                thuChart.classList.remove("num-disp");    
            }else if(ct.classList.contains('fri')){
                friChart.classList.add("num");
                friChart.classList.remove("num-disp");    
            }else if(ct.classList.contains('sat')){
                satChart.classList.add("num");
                satChart.classList.remove("num-disp");    
            }else if(ct.classList.contains('sun')){
                sunChart.classList.add("num");
                sunChart.classList.remove("num-disp");    
            }
        })    
       
    // When the cursor leaves the element
        ct.addEventListener("mouseout", () =>{
            mouseOut();
        })
        
    })  
   
 
    function mouseOut(){
        monChart.classList.add('num-disp')
        tueChart.classList.add('num-disp')
        wedChart.classList.add('num-disp')
        thuChart.classList.add('num-disp')
        friChart.classList.add('num-disp')
        satChart.classList.add('num-disp')
        sunChart.classList.add('num-disp')
    }

    }
    
    getJSON();



    

