function buat_login() {
  var a = document.getElementById("x");
  a.parentElement.removeChild(a);

  var p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "Silahkan Mendaftar";

  var elem = document.getElementsByTagName("div")[0];
  elem.appendChild(p);

  var form = document.createElement("form");
  elem.appendChild(form);

  var label = document.createElement("label");
  label.innerHTML = "Nama User";
  form.appendChild(label);
  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.placeholder = "Nama User...";
  input_username.className = "form_login";
  form.appendChild(input_username);

  var label2 = document.createElement("label");
  label2.innerHTML = "Nomor Handphone";
  form.appendChild(label2);
  var input_nomer = document.createElement("input");
  input_nomer.type = "number";
  input_nomer.name = "nomer";
  input_nomer.placeholder = "Nomor Handphone...";
  input_nomer.className = "form_login";
  form.appendChild(input_nomer);

  var label3 = document.createElement("label");
  label3.innerHTML = "Username";
  form.appendChild(label3);
  var input_email = document.createElement("input");
  input_email.type = "email";
  input_email.name = "emailuserName";
  input_email.placeholder = "Username atau email...";
  input_email.className = "form_login";
  form.appendChild(input_email);

  var label4 = document.createElement("label");
  label4.innerHTML = "Password";
  form.appendChild(label4);
  var input_password = document.createElement("input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.placeholder = "Password...";
  input_password.className = "form_login";
  form.appendChild(input_password);

  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.value = "DAFTAR SEKARANG";
  tombol.className = "tombol_login";
  form.appendChild(tombol);
}
