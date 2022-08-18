 content = [
    {
        id:`burgers`,
        title:`Burgers`,
        name1:`Hamburger`,
        price1:`2.00`,
        name2:`Cheese burger`,
        price2:`2.20`,
        name3:`Chicken Burger`,
        price3:`2.20`
        
    },
    {
        id:`chips`,
        title:`Chips`,
        name1:`Small size`,
        price1:`0.50`,
        name2:`Medium size`,
        price2:`0.70`,
        name3:`Big size`,
        price3:`0.80`
        
    },
    {
        id:`drinks`,
        title:`Drinks`,
        name1:`Coca-Cola`,
        price1:`1.00`,
        name2:`Pepsi`,
        price2:`1.00`,
        name3:`Sprite`,
        price3:`1.00`
        
    },
    {
        id:`extras`,
        title:`Extras`,
        name1:`Ketchup`,
        price1:`0.10`,
        name2:`Mayonese`,
        price2:`0.10`,
        name3:`Both`,
        price3:`0.15`
        
    },
    ]
    
    //List of meals chosen by you
    const map = new Map ([]);
    let i=0;
    let count1=0;
    let count2=0;
    let count3=0;
    let sum1=0;
    let sum2=0;
    let sum3=0;
    let sum=0;
    let count=0;
    
    //Displaying the main part
    window.onload = () => {
        let main = document.getElementById("main");
        let part2 = document.getElementById("part2");
        let part3 = document.querySelector("#part3");
        let result = document.getElementById("result");
        let all = document.getElementById("all");
        let total = document.getElementById("total");
        let part4 = document.getElementById("part4");
        part4.style.display = "none";
        
        for (;i<content.length;i++) {
            main.innerHTML += 
            `<div class='menu' id=`+content[i].id+` onclick='\show(`+i+`)\'>
            `+content[i].title+`
            </div>`;
           }
           
           main.innerHTML += 
           `
           <div class="menu" id="payments" onclick='pay()'>Payments
        </div>
           `;
    }
    
    //Opening each section
    const show = (i) => {
        
        main.style.display = "none";
        part2.style.display = "block";
       
        part2.innerHTML = 
        `<br />
        <h3 id='top'>`+content[i].title+` section</h3>
        <h6>Select by clicking</h6>
        <br />
        <br />
        <button onclick='back()'>To Menu</button>
        <br />
        <br />
        <br />
        <div id='part3'></div>
        <div id='result'>Total</div>
        `;
        
        part3.innerHTML = 
        `<div class='meal' onclick='plus1(`+i+`)'>`+content[i].name1+`<br />`+content[i].price1+` €</div>
        <div class='meal' onclick='plus2(`+i+`)'>`+content[i].name2+`<br />`+content[i].price2+` €</div>
        <div class='meal' onclick='plus3(`+i+`)'>`+content[i].name3+`<br />`+content[i].price3+` €</div>
        `;
        
        
        
    }
    
    //Back to menu function
    const back = () => {
        main.style.display = "grid";
        part2.style.display = "none";
        window.location.href = "#description";
        part4.style.display = "none";
    }
    
    //Append item to the list
    const plus1 = (i) => {
       
       let order1 = `<div id='\order1`+i+`\'>
       <table border='1'>
       <tr>
       <td>`+content[i].name1+`</td>
       <td>`+content[i].price1+` €<button onclick='minus1(`+i+`)'>X</button></td>
       </tr>
       </table></div>`;
       count1++;
        
        all.innerHTML += order1;
        
    
        let tot1 = content[i].price1*1;
        //Append to array
        
        map.set(tot1);
        sum1 += tot1;
        count = count1+count2+count3;
        sum = sum1+sum2+sum3;
    
        //Display new number of items and sum
        result.innerHTML = 
        `<table>
        <tr>
        <td>Total Items: `+count+`</td>
        <td>Total: `+sum.toFixed(2)+` €</td>
        </tr>
        </table>`;
        
    }
    
    //Append item to the list
    const plus2 = (i) => {
       
       let order2 = `<div id='\order2`+i+`\'>
       <table border='1'>
       <tr>
       <td>`+content[i].name2+`</td>
       <td>`+content[i].price2+` €<button onclick='minus2(`+i+`)'>X</button></td>
       </tr>
       </table></div>`;
       count1++;
        
        all.innerHTML += order2;
        
    
        let tot2 = content[i].price2*1;
        //Append to array
        
        map.set(tot2);
        sum2 += tot2;
        count = count1+count2+count3;
        sum = sum1+sum2+sum3;
    
        //Display new number of items and sum
        result.innerHTML = 
        `<table>
        <tr>
        <td>Total Items: `+count+`</td>
        <td>Total: `+sum.toFixed(2)+` €</td>
        </tr>
        </table>`;
        
    }
    
    //Append item to the list
    const plus3 = (i) => {
       
       let order3 = `<div id='\order3`+i+`\'>
       <table border='1'>
       <tr>
       <td>`+content[i].name3+`</td>
       <td>`+content[i].price3+` €<button onclick='minus3(`+i+`)'>X</button></td>
       </tr>
       </table></div>`;
       count3++;
        
        all.innerHTML += order3;
        
    
        let tot3 = content[i].price3*1;
        //Append to array
        
        map.set(tot3);
        sum3 += tot3;
        count = count1+count2+count3;
        sum = sum1+sum2+sum3;
    
        //Display new number of items and sum
        result.innerHTML = 
        `<table>
        <tr>
        <td>Total Items: `+count+`</td>
        <td>Total: `+sum.toFixed(2)+` €</td>
        </tr>
        </table>`;
        
    }
    //Removing
    const minus1 = (i) => {
         document.getElementById("order1"+i).remove();
        
        let tot1 = content[i].price1;
        
        
        //Remove from array
        
        map.delete(tot1);
        sum1=sum1-content[i].price1;
        count1=count1-1;
        sum = sum1+sum2+sum3;
        count = count1+count2+count3;
        //Display new number of items and sum
        result.innerHTML = "<table><tr><td>Total Items: "+count+"</td><td>Total: "+sum.toFixed(2)+" €</td></tr></table>";
        
        total.innerHTML = `Total: `+sum.toFixed(2)+` €`;
        
    }
    //Removing
    const minus2 = (i) => {
         document.getElementById("order2"+i).remove();
        
        let tot2 = content[i].price2;
        
        
        //Remove from array
        
        map.delete(tot2);
        sum2=sum2-content[i].price2;
        count2=count2-1;
        sum = sum1+sum2+sum3;
        count = count1+count2+count3;
        //Display new number of items and sum
        result.innerHTML = "<table><tr><td>Total Items: "+count+"</td><td>Total: "+sum.toFixed(2)+" €</td></tr></table>";
        
        total.innerHTML = `Total: `+sum.toFixed(2)+` €`;
        
    }
    //Removing
    const minus3 = (i) => {
         document.getElementById("order3"+i).remove();
        
        let tot3 = content[i].price3;
        
        
        //Remove from array
        
        map.delete(tot3);
        sum3=sum3-content[i].price3;
        count3=count3-1;
        sum = sum1+sum2+sum3;
        count = count1+count2+count3;
        //Display new number of items and sum
        result.innerHTML = "<table><tr><td>Total Items: "+count+"</td><td>Total: "+sum.toFixed(2)+"€</td></tr></table>";
        
        total.innerHTML = `Total: `+sum.toFixed(2)+` €`;
        
    }
    const pay = () => {
        
        main.style.display = "none";
        part4.style.display = "block";
        sum = sum1+sum2+sum3;
        total.innerHTML = `Total: `+sum.toFixed(2)+` €`;
        
    }
    /*Created by me, Gabriele Gatti, hope you like it*/