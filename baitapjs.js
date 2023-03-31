function myFunction() {
  alert('Sản phảm đã được thêm vào giỏ hàng');
}

// window.onload = function() {
// 	if (localStorage) {
// 	  document.getElementById('formdangky').addEventListener('submit', function() {
// 	      var name = document.getElementById('name').value;
//           var email = document.getElementById('email').value;
//           var password = document.getElementById('password').value;
//           console.log(name);
//           console.log(email);
//           console.log(password);
// 	      localStorage.setItem('name', name);
//           localStorage.setItem('email', email);
//           localStorage.setItem('password', password);
// 	  });
// 	}
// }
function resetValue() {
  localStorage.clear();
}
// function chuyển tab
function handleNavigate(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function addProduct(event) {
  event.preventDefault();
  var inputid = document.getElementById("idproduct");
  var inputname = document.getElementById("nameproduct");
  var inputprice = document.getElementById("priceproduct");
  var inputinfor = document.getElementById("inforproduct");
  var inputdetail = document.getElementById("detailproduct");
  var inputstar = document.getElementById("starproduct");
  var inputimage = document.getElementById("imageproduct");
  var inputmanufac = document.getElementById("manuproduct");
  var inputcategory = document.getElementById("categoryproduct");

  console.log(inputid);
  console.log(inputname);
  console.log(inputprice);
  console.log(inputinfor);
  console.log(inputdetail);
  console.log(inputstar);
  console.log(inputimage);
  console.log(inputmanufac);
  console.log(inputcategory);


  var newproduct = `
   <tr>
   <td>${inputid.value}</td>
   <td>${inputname.value}</td>
   <td>${inputprice.value}đ</td>
   <td>${inputinfor.value}</td>
   <td>${inputdetail.value}</td>
   <td>${inputstar.value}</td>
   <td>${inputimage.value}</td>
   <td> ${inputmanufac.value}</td>
   <td> ${inputcategory.value}</td>
   <td>
     <button class="btn edit" >Edit</button>
   </td>
   <td>
     <button class="btn delete" > Delete </button>
   </td>
 </tr>`;
  resulthtml = document.getElementById("results");
  console.log(resulthtml);
  resulthtml.innerHTML = resulthtml.innerHTML + newproduct;
}