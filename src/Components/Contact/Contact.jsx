import React,{useState} from 'react';
import sideimg from '../../Components/Images/sideimg.jpg';
import './Contactcss.css';
// import sideimg2 from '../src/images/sideimg2.jpg'
const Contact = ()=>{
    const [data,setData] = useState({
        name:'',phoneno:'',email:'',password:'',msg:'',
    });
    const inputEvent = (event) =>{
      const {name,value} = event.target;
      setData((olddata)=>{
        return ({...olddata,[name]:value});
      }
     );
    }
    function showAlert(msg, classname) {
      const divele = document.createElement('div');
      divele.className = `alert ${classname}`;
      divele.appendChild(document.createTextNode(msg));
      // Get parent
      const containerpar = document.getElementById('parent')
      const nextele = document.getElementById('before')
      containerpar.insertBefore(divele, nextele);
      setTimeout(function () {
        document.querySelector('.alert').remove();
      }, 3000);
    }
    const formSubmit = (e)=>{
      showAlert(` Contact Form Submitted Successfully!! Welcome ${data.name} `, 'alert-success');
        e.preventDefault();
    }
    return (<>
    <div className="my-5">
    <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-sm-8 col-9 mx-auto" id="parent"> 
            <form id="before" onSubmit={formSubmit}>
            <div className="form-group mt-3">
    <label for="exampleInputPassword1">Name</label>
    <input name="name" value={data.name} onChange={inputEvent}
    required type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Name"/>
  </div>
  <div className="form-group mt-3">
    <label for="exampleInputPassword1">Contact No.</label>
    <input name="phoneno" value={data.phoneno} onChange={inputEvent}
    required type="number" className="form-control" id="exampleInputPassword1" placeholder="999-999-"/>
  </div>
  <div className="form-group mt-3">
    <label for="exampleInputEmail1">Email address</label>
    <input name="email" value={data.email} onChange={inputEvent}
    required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mt-3">
    <label for="exampleInputPassword1">Password</label>
    <input name="password" value={data.password}  onChange={inputEvent}
    required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group mt-3">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea name="msg" value={data.msg} onChange={inputEvent} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
 
  <button type="submit" className="btn btn-outline-success text-center mt-3 mb-5">Submit</button>
</form>
            </div>
                    <div className="col-md-3 col-sm-4 m-auto mb-3">
                    <img src={sideimg} className="img-fluid animated sideimage" alt="contact img"/>
                    </div>

        </div>
    </div>

    </>);

}
export default Contact;