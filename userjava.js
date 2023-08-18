
const userData = {
    username: 'johndoe',
    displayName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    password: '********',
  };
  
  
  function populateForm() {
    document.getElementById('username').value = userData.username;
    document.getElementById('displayName').value = userData.displayName;
    document.getElementById('email').value = userData.email;
    document.getElementById('phone').value = userData.phone;
    document.getElementById('password').value = userData.password;
  }


  function enableEditing() {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].removeAttribute('readonly');
    }
    document.getElementById('editBtn').style.display = 'none';
    document.getElementById('saveBtn').style.display = 'block';
  }
  

  function saveChanges(event) {
    event.preventDefault();
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      userData[inputs[i].id] = inputs[i].value;
      inputs[i].setAttribute('readonly', true);
    }
    document.getElementById('editBtn').style.display = 'block';
    document.getElementById('saveBtn').style.display = 'none';
  }
  

  document.getElementById('editBtn').addEventListener('click', enableEditing);
  
  
  document.getElementById('accountForm').addEventListener('submit', saveChanges);
  
  
  populateForm();
  
