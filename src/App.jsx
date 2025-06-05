import './App.css'
import './bootstrap.min.css'
function App() {
  

  return (
    <>
     <div className='container-fluid d-flex justify-content-center align-items-center'>
      <div className="row p-2" style={{height:"100vh"}}>
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className='p-lg-3 p-2 bg-warning'>
            
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
                    <input type="file" id='profile' style={{display:"none"}} />
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
              <div className="col-8"> <input type="text" className='form-control' /></div>
            </div>

             <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>Student's Name : </span></div>
              <div className="col-8"> <input type="text" className='form-control' /></div>
            </div>

            <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>Student's Name : </span></div>
              <div className="col-8"> <input type="text" className='form-control' /></div>
            </div>

            {/* next part */}

            <div className="row">
              <div className="col-6">
                <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>Student's Name : </span></div>
              <div className="col-8"> <input type="date" className='form-control' /></div>
            </div>
              </div>
              <div className="col-6">
                <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>Student's Name : </span></div>
              <div className="col-8"> <input type="radio"  name='gender' /> <span className='inputlabels'>Student's Name : </span> <input type="radio"  name='gender' /> <span className='inputlabels'>Student's Name : </span> </div>
            </div>
              </div>
            </div>

            <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>Student's Name : </span></div>
              <div className="col-8"> <textarea name="" id="" className='form-control'></textarea></div>
            </div>


            {/* next part */}

            <div className="row">
              <div className="col-6">
                <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>Student's Name : </span></div>
              <div className="col-8"> <input type="text" className='form-control' /></div>
            </div>
              </div>
              <div className="col-6">
                <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>Student's Name : </span></div>
              <div className="col-8"> <input type="text" className='form-control' /> </div>
            </div>
              </div>
            </div>

             <div className="row">
              <div className="col-6">
                <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>Student's Name : </span></div>
              <div className="col-8"> <input type="text" className='form-control' /></div>
            </div>
              </div>
              <div className="col-6">
                <div className="row mt-lg-3 mt-2">
              <div className="col-4"><span className='inputlabels'>Student's Name : </span></div>
              <div className="col-8"> <input type="text" className='form-control' /> </div>
            </div>
              </div>
            </div>


            <div className="row mt-lg-4 mt-2">
              <div className="col-4"><span className='inputlabels'>Student's Name : </span></div>
              <div className="col-8"> <input type="text" className='form-control' /></div>
            </div>

           
            
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
     </div>
    </>
  )
}

export default App
