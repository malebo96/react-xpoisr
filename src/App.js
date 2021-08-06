import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckBox from '@material-ui/icons/CheckBox';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {Redirect} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import StarIcon from '@material-ui/icons/Star';
import HomeIcon from '@material-ui/icons/Home';
import FolderIcon from '@material-ui/icons/Folder';
import React, { useState } from "react";




import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  useLocation
} from 'react-router-dom';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const  firebaseConfig = {
  apiKey: "AIzaSyACmeR7RKz1k4nBj4UjZaEf6HP1jcxFlZ0",
  authDomain: "applist-637f3.firebaseapp.com",
  projectId: "applist-637f3",
  storageBucket: "applist-637f3.appspot.com",
  messagingSenderId: "316997411849",
  appId: "1:316997411849:web:eae2259f329f43df5e84d8",
  measurementId: "G-MWNEF6GESB"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const useStyles = makeStyles({
  root: {
    
    backgroundColor: 'black'
  }
});
function GridStyled() {
  let history = useHistory();

  const classes = useStyles();
  return <Grid className={classes.root} />;
}

export default function App() {
  return (
    <Router>
      <div  >
        
        <Switch>
          <Route exact path="/todolist" component= {() =>  <ToDoList authorized={true} />}>
          
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const[mail,setMail]=useState('')
const[password,setPassword]=useState('')
  const classes = useStyles();
  return <div> 
  

  <div 
  
  >
      
      <Grid container spacing={0}>
     
        <Grid item xs={1} /> 
        <Grid item xs={5} style={{ marginTop: '50px', marginBottom: '50px' }}>
        <img src ="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDM3fHx0ZWNobm9sb2d5fGVufDB8fHx8MTYyNjYwNzgyNA&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" style={{height: 550, width: 650}}></img>
        </Grid>
        <Grid
          item
          xs={5}
          className={classes.root}
          style={{
           paddingLeft:'50px',
            backgroundColor: 'black',
            marginTop: '50px',
            marginBottom: '50px',
          color: "white"
          }}
        >
                   <h2>join Over 52 Milion</h2>
           <h3> Designer from around the world</h3>
          
         <h4>sign into your account</h4>
          
          <TextField style={{backgroundColor:"white",}} onChange={event => setMail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" />
          <br />
          <br />
          <TextField style={{backgroundColor:"white"}} onChange={event => setPassword(event.target.value)}  id="outlined-basic" label="Password" type="password" variant="outlined" />
          <br />
          <br />
               <p style={{color:"purple"}}>I agree with terms and conditions</p>
          <br />
         
      <Button  style={{backgroundColor:'purple', textAlign:"center", alignItems:"center", width: 220, height: 60}}
       variant="contained"
        onClick={() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(mail,password)
            .then(userCredential => {
              // Signed in
              var user = userCredential.user;
              console.log(user);
              // ...
            })
            .catch(error => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(error.message);
              // ..
            });
        }}
      >
      <Link to="/register" style={{ textDecoration:'none'}}  ><p style={{color:"white"}}>Sign Up</p></Link>
      
      </Button>
      <br/>
          <br/>
Have an account? <Link to="/todolist" style={{color:"#FF00FF"}} >Sign In</Link>
         
        </Grid>
      </Grid>
    </div>
</div>
  
}

function Register() {
  const[mail,setMail]=useState('')
const[password,setPassword]=useState('')
  const classes = useStyles();
  return <div> 
  

  <div  >
      
      <img src="https://www.rawpixel.com/search/backgroundColor"/>
      <Grid container spacing={0}>
        <Grid item xs={1} />
        <Grid item xs={5} style={{ marginTop: '50px', marginBottom: '50px' }}>
        <img src ="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDM3fHx0ZWNobm9sb2d5fGVufDB8fHx8MTYyNjYwNzgyNA&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" style={{height: 400, width: 650}}></img>
        </Grid>
        <Grid
          item
          xs={5}
          className={classes.root}
          style={{
            paddingLeft:'50px',
            backgroundColor: 'black',
            marginTop: '50px',
            marginBottom: '55px',
            color:'white'
          }}
        >
          <h2>Todo List</h2>
          <h3>Sign in to your account</h3>
          <TextField style={{backgroundColor:"white"}} onChange={event => setMail(event.target.value)} 
            id="outlined-basic"
            label="Your email"
            variant="outlined"
          />
         <br/>
         <br/>
          <TextField style={{backgroundColor:"white"}} onChange={event => setPassword(event.target.value)} id="outlined-basic" label="Password" type="password"  variant="outlined" />
          <br />
          <br/>
         
          <Button style={{backgroundColor:"purple", textAlign:"center", alignItems:"center", width: 220, height: 60}}
       variant="contained"
        onClick={() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(mail,password)
            .then(userCredential => {
              // Signed in
              var user = userCredential.user;
              console.log(user);
              // ...
            })
            .catch(error => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(error.message);
              // ..
            });
        }}
      >
      <Link to="/todolist" style={{ textDecoration:'none'}}  ><p style={{color:"white"}}>sign in</p></Link>
      
      </Button>
          <br />
          
          
        
        </Grid>
      </Grid>
    </div>
</div>
  
}

function ToDoList({authorized }) {
  if (! authorized){
    return <Redirect to ="/Home"/>
  }
  const [Datalist,setData]=useState([{name:'ditebogo',surname:'One'}])
  const[newUserName, setNewUserName]= useState()

 const onCreate = () =>{

  const db = firebase.firestore()
  db.collection('users').add({name : newUserName})
 }
  return  <div  >
      
        
        <Grid item xs ={12} container spacing={0} >
          
          <Grid item xs={3} style={{backgroundColor:'purple' ,marginLeft:'50px', height:'600px' ,marginTop: '20px', marginBottom: '40px', paddingLeft: 50}} >

          <br/><br/><br/><br/><br/><br/><br/>
          <p style={{paddingLeft:20, color:"white"}}>

            <p><SearchIcon style={{color:"white"}}/>search</p>
         <p>< Brightness5Icon  style={{color:"white"}}/> My day</p>
         <p><StarIcon  style={{color:"white"}}/> Important</p>
         <p><FolderIcon  style={{color:"white"}}/> Planned</p>
         <p><HomeIcon  style={{color:"white"}}/> Task</p>
         </p>
         <br/>
      <br/><br/><br/>
      <br/><br/><br/>
     
         <Button style={{backgroundColor:'black', textAlign:"center", alignItems:"center", width: 220, height: 60}}
       variant="contained"
      >
      <Link to="/home" style={{ textDecoration:'none'}}  ><p style={{color:"white"}}>Logout</p></Link>
      
      </Button>
      
    
          </Grid>
          <Grid item xs={8} style={{ height:'618px' ,marginTop: '20px', marginBottom: '420px',backgroundColor:"black", color: "white", paddingLeft: 100, overflow:'scroll'}} >

           <div className="todo-app" >

           <h1 style={{paddingLeft:200}}>Add today plans here</h1>
           <br/>
           <br/>
    
<input style={{height: 50, width: 500, paddingLeft: 30}} value={newUserName} onChange={(e)=> setNewUserName(e.target.value)}/>
<button style={{height: 55, width: 100}} onClick={onCreate}>create</button>


<button
style={{height: 55, width: 100, marginBottom: 10}}
onClick={()=>{ 
  let val=[]
  console.log("getting")
  console.log(Datalist)
  firebase.firestore().collection('users').get().then(response=>{
  console.log(response)
  response.forEach(data=>{
       
  
    
    val.push({...{id:data.id},...data.data()})
     console.log(data.id);
   
     //setData(...Datalist,val)

     

   })
setData(val)
   //console.log("list = ",val)
   console.log("list = ",Datalist)

})
}}>Read</button>
<br/><br/>
  <div style={{border: "2px solid purple", width: "730px", lineHeight: "20px"}} >
  <ul>
  {Datalist.map(person => {
    return (
      <li key={person.id} onClick={(data)=>{
        console.log("click",person)

      }}>
        {person.name} &nbsp; {person.surname} 
      </li>
    )
  })}
</ul>
     </div>

         
           </div>
          
         
            
              </Grid>
      
          </Grid>
        </div>
    ;
}





