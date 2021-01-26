            function checkName () {
                var nameBox = document.getElementById("name");
                var name = nameBox.value;
                if (name.length < 5){
                    nameBox.style.borderColor = "rgb(255,0,0)";
                } else {
                    nameBox.style.borderColor = "rgb(128,128,128)";
                }
            }
            
            function checkEmail () {
                var emailBox = document.getElementById("email");
                var email = emailBox.value;
                if (email.length < 8) {
                    emailBox.style.borderColor = "rgb(255,0,0)";
                } else {
                    emailBox.style.borderColor = "rgb(128,128,128)";
                }
            }
            
            function checkNumber () {
                var phone = document.getElementById("phonenumber");
                if(phone.value.length==10){
                    var phoneVal = phone.value;
                if(/^[0-9]+$/.test(phoneVal)){
                    phone.style.borderColor = "green";
                    }
                } 
                else{
                    if(phone.value.length=0){
                        phone.style.borderColor = "black";
                } 
                else{
                    phone.style.borderColor="red";
                    }
                }
            }

            function goCountry() {
                var canadaCountry = document.getElementById("Canada");
                var usCountry =  document.getElementById("US");
                var postDiv = document.getElementById("postDiv");
                var zipDiv = document.getElementById("zipDiv");
                var otherCountry = document.getElementById("countryother");
                
 
                if (canadaCountry.checked) {
                    postDiv.style.display = "block";
                    zipDiv.style.display = "none";
                } 
                if (usCountry.checked) {
                    zipDiv.style.display = "block";
                    postDiv.style.display = "none";
                } 
                if (otherCountry.checked) {
                    zipDiv.style.display = "none";
                    postDiv.style.display = "none";
                }
            }
            
            
            function selectAll() {
                var isChecked = document.getElementById("all").checked;
                var checkboxes = document.getElementsByName("interests");
            
                if (isChecked == true){
                    for (var i = 0; i < checkboxes.length; i++){
                    checkboxes[i].checked = true;
                }
                
                } else{
                for (var i = 0; i < checkboxes.length; i++){
                    checkboxes[i].checked = false;
                }
                }
            }
            