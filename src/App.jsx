import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
function App() {
 
  const [admissiondetails, setAdmissiondetails] = useState({
    name:"",
    fname:"",
    mname:"",
    dob:"",
    gender:"",
    address:"",
    religion:"",
    nationality:"",
    phone:"",
    bgroup:"",
    email:"",
    profilepic:""
  })
  console.log(admissiondetails);
  
  const handleCancel = () =>{
    setAdmissiondetails({
      name:"",
    fname:"",
    mname:"",
    dob:"",
    gender:"",
    address:"",
    religion:"",
    nationality:"",
    phone:"",
    bgroup:"",
    email:"",
    profilepic:""
    })
  }

  const handleFile = (e)=>{
    console.log(e);
   
  
    
  }

  return (
    <>
     <div className='container-fluid d-flex justify-content-center align-items-center pt-4 pb-4'>
      <div className="row p-2" >
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
          <div className='p-lg-3 p-2 bg-light ' style={{boxShadow:"0px 0px 40px grey"}}>
            
            {/* header section */}
            <div className='conatiner-fluid'>
              <div className="row">
                <div className="col-2 d-flex justify-content-center align-items-center">
                  <img src="https://static.vecteezy.com/system/resources/previews/000/626/702/original/education-book-logo-template-vector-illustration.jpg" alt="" className='w-100 shadow' />
                </div>
                <div className="col-8 text-center">
                  <h4 id='firstheading' style={{fontWeight:"bold"}}>FUTURE POINT ACADEMY</h4>
                  <h4 id='secondheading'>EDUCATIONAL & IT TRAINING ACADEMY</h4>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                  <label htmlFor="profile" style={{cursor:"pointer"}}>
                    <input type="file" id='profile' onChange={(e)=>handleFile(e)} style={{display:"none"}} />
                  <img src="https://th.bing.com/th/id/OIP.akxWriHVa_jvHL3x6oRevQAAAA?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain" className='w-100 shadow' alt="" />
                  </label>
                </div>
              </div>

            </div>
            {/* body section */}
            <div className='d-flex justify-content-center align-items-center'>
               <h3 id='registrationheading' className='px-4 py-1 rounded mt-3' >REGISTRATION FORM</h3>
            </div>

            {/* input section */}
            <div className="row mt-lg-4 mt-2">
              <div className="col-4"><span className='inputlabels'>Student's Name : </span></div>
              <div className="col-8"> <input type="text" value={admissiondetails.name} onChange={(e)=>setAdmissiondetails({...admissiondetails,name:e.target.value})} className='form-control' /></div>
            </div>

             <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>Father's Name : </span></div>
              <div className="col-8"> <input type="text" value={admissiondetails.fname} onChange={(e)=>setAdmissiondetails({...admissiondetails,fname:e.target.value})} className='form-control' /></div>
            </div>

            <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>Mother's Name : </span></div>
              <div className="col-8"> <input type="text" value={admissiondetails.mname} onChange={(e)=>setAdmissiondetails({...admissiondetails,mname:e.target.value})} className='form-control' /></div>
            </div>

            {/* next part */}

            <div className="row">
              <div className="col-6">
                <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>DOB : </span></div>
              <div className="col-8"> <input type="date" value={admissiondetails.dob} onChange={(e)=>setAdmissiondetails({...admissiondetails,dob:e.target.value})} className='form-control' /></div>
            </div>
              </div>
              <div className="col-6">
                <div className=" mt-lg-3 mt-2 d-flex justify-content-around">
              <div className=""><span className='inputlabels'>Gender: </span></div>
              <div className=""> <input type="radio" value={admissiondetails.gender} onChange={(e)=>setAdmissiondetails({...admissiondetails,gender:e.target.value})}  name='genderr' /> <span className='inputlabels'>Male </span> <input type="radio" value={admissiondetails.gender} onChange={(e)=>setAdmissiondetails({...admissiondetails,gender:e.target.value})}  name='genderr' /> <span className='inputlabels'>Female  </span> </div>
            </div>
              </div>
            </div>

            <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>Permanent Address : </span></div>
              <div className="col-8"> <textarea name="" id="" value={admissiondetails.address} onChange={(e)=>setAdmissiondetails({...admissiondetails,address:e.target.value})} className='form-control'></textarea></div>
            </div>


            {/* next part */}

            <div className="row">
              <div className="col-6">
                <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>Religion : </span></div>
              <div className="col-8"> <input type="text" value={admissiondetails.religion} onChange={(e)=>setAdmissiondetails({...admissiondetails,religion:e.target.value})} className='form-control' /></div>
            </div>
              </div>
              <div className="col-6">
                <div className="row mt-lg-3 mt-2">
              <div className="col-6"><span className='inputlabels'>Nationality : </span></div>
              <div className="col-6"> <input type="text" value={admissiondetails.nationality} onChange={(e)=>setAdmissiondetails({...admissiondetails,nationality:e.target.value})} className='form-control' /> </div>
            </div>
              </div>
            </div>

             <div className="row">
              <div className="col-6">
                <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>Phone : </span></div>
              <div className="col-8"> <input type="text" value={admissiondetails.phone} onChange={(e)=>setAdmissiondetails({...admissiondetails,phone:e.target.value})} className='form-control' /></div>
            </div>
              </div>
              <div className="col-6">
                <div className="row mt-lg-3 mt-2">
              <div className="col-6"><span className='inputlabels'>Blood Group : </span></div>
              <div className="col-6"> <input type="text" value={admissiondetails.bgroup} onChange={(e)=>setAdmissiondetails({...admissiondetails,bgroup:e.target.value})} className='form-control' /> </div>
            </div>
              </div>
            </div>


            <div className="row mt-lg-4 mt-2 mb-4">
              <div className="col-4"><span className='inputlabels'>Email Id : </span></div>
              <div className="col-8"> <input type="text" value={admissiondetails.email} onChange={(e)=>setAdmissiondetails({...admissiondetails,email:e.target.value})} className='form-control' /></div>
            </div>

            <div className='d-flex justify-content-around mt-4 mb-4'>
              <button className='px-3 py-2 btn btn-success'>Submit</button>
              <button className='px-3 py-2 btn btn-danger' onClick={handleCancel}>Cancel</button></div>  
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
     </div>
    </>
  )
}

export default App
