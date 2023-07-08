import React,{  useState }  from 'react'
import style from './Scan.module.css';
import imagee from'../../images/IMG-20230623-WA0035.jpg';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Scan() {
  let navigate=useNavigate();
  const [image,setImage]=useState(null);
  const [file,setFile] = useState();
  const[msg,setMsg]=useState(null);

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0])
}
  let submitFormData=async(e)=>{
    const fd = new FormData();
    fd.append('image',image);
    let{data}= await axios.post('https://eng.caterieng.com/api/classify',fd,{
      headers:{
        'Custom-Header':'value',
      }
    })
    setMsg(data);
    console.log(data);
  }
  return (
    <>
      <div className={`${style.style} pt-3`}>

        <div className='container'>
          <h3 className={`${style.test} p-5 `}>Welcome to Skin detection website !</h3>
        </div>

        <div className={`${style.brdr}  pt-5 bg-white`}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 text-center'>
                <div>
                  <img src={imagee} className={`${style.imgg} rounded-circle `}/>
                </div>
                <div className={`bg-white pt-4`}>
                  <div>
                    <div className='input-data '>
                      <input  id="file"  onChange={handleChange} type='file' accept='image/*'
                              className={`${style.btn} mt-4`} name='image'/>
                    </div>
                    <button onClick={submitFormData} className={` ${style.buttonTwo}  my-4 fs-6`} 
                            name='scan' type='submit'>
                      Scan
                    </button>
                  </div>
                </div>  
              </div>

              <div className='col-md-6'>
                  <div className={`${style.immg}`}>
                    <img src={file} className={`rounded-circle mb-2`}   width="200" alt=""/> 
                  </div>
                {msg?
                  <div className='text-center mt-4'>
                    <div className={`${style.testt}`}>
                      <div className={`${style.button} my-4 text-center w-100 fw-bold fs-3`}>Disease:</div>
                      <h2 className={`${style.bg} mb-3 py-2 px-2`}>{msg.disease}<br/>
                        <span className='text-danger'>
                          by percentage {msg.score}
                        </span>
                      </h2>
                      {msg.msg?<h3>{msg.msg}!</h3>:""}
                      <button className={ `${style.buttonTwo} fs-5 mb-5 mt-3`  }
                              onClick={()=>navigate(`/details/${msg.id}`)}>
                                    Learn more about this disease
                      </button>
                    </div>  
                  </div>
                  :<h2 className={`${style.teest}  opacity-50 text-center ms-4  `}>
                  The scan result appears here.<br/>
                  All you have to do is<br/>select an image, press the scan button,<br/>
                  and wait for the result<br/> in a minute.</h2>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

