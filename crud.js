//const { table } = require("node:console");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQBrocDElLvzcUzhgj_0R0muUHKVjW_BM",
    authDomain: "awt-lab.firebaseapp.com",
    databaseURL: "https://awt-lab-default-rtdb.firebaseio.com",
    projectId: "awt-lab",
    storageBucket: "awt-lab.appspot.com",
    messagingSenderId: "473715207538",
    appId: "1:473715207538:web:2180d74279b6b9526c41eb",
    measurementId: "G-TE2SCW0Y8Q"
  };
  firebase.initializeApp(firebaseConfig)
  var dbRef=firebase.database().ref().child("students")
  function createStudent(){
      console.log("Create Student");
      let uname=document.getElementById('uname').value;
      let rno=document.getElementById('rno').value;
      let bns=document.getElementById('bns').value;
      dbRef.child(uname).set({
          uname:uname,
          rno:rno,
          bns:bns
      })
      console.log("User Created Successfully");
  }
  function deleteStudent(){
      console.log("Delete Student");
      let username=window.prompt("Enter the name of the student to be deleted");
      dbRef.child(username).remove();
      console.log(username+" removed");
  }
      function displayStudent()
      {
          console.log("Student Details");
          table=document.createElement("TABLE");
          table.border="2";
            dbRef.on('child_added',(snap)=>{
                console.log(snap.key)
                row=table.insertRow(-1)
                cell1=row.insertCell(-1)
                cell2=row.insertCell(-1)
                cell3=row.insertCell(-1)

                cell1.innerHTML=snap.val().uname;
                
                cell2.innerHTML=snap.val().rno;
               
                cell3.innerHTML=snap.val().bns;
            })
            student=document.getElementById("studentList");
            student.appendChild(table)
        }
    function updateStudent(){
        console.log("Update Student");
        let uname=window.prompt("Enter username");
        let rno=window.prompt("Enter rno");
        let bns=window.prompt("Enter branch and section");
        dbRef.child(uname).update({rno:rno,bns:bns});
        console.log("Student Details Updated Successfully");
    }