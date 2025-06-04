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
                  <img src="https://th.bing.com/th/id/OIP.akxWriHVa_jvHL3x6oRevQAAAA?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain" className='w-100 shadow' alt="" />
                </div>
              </div>

            </div>
            {/* body section */}
            
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
     </div>
    </>
  )
}

export default App
