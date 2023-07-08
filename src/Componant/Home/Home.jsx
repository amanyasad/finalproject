import React from 'react';
import homeimage from '../../images/20230706_131027.jpg';
import image from '../../images/bg-img-banner-2c019c.jpg';
import img from '../../images/man-318621c4.jpg'
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    let navigate=useNavigate();
    let goToScan=()=>{
        navigate('./Scan')
    }
    return (
    <>
        <div>  
            <img src={homeimage} className={`${styles.test}`}/>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 '>
                    <div className='item'>
                        <h1>Don’t waste your time!</h1>
                        <p className='fs-4 mt-3 mb-3'>
                            This site enables you to scan signs that appears in your
                            skin and predict the disease that afflicted you.
                        </p>
                        <button className={`${styles.buttonTwo} py-3 px-5 fs-5 my-3`} onClick={goToScan}>
                            Let's Go To Scan Page
                        </button>
                    </div>
                </div>
                <div className='col-md-4 mt-5'>
                    <div className='item'>
                        <img src={image} className='w-100'></img>
                    </div>
                </div>
            </div>

            <div className='row my-5 w-100'>
                <div className='col-md-4'>
                    <img className=' w-100' src={img}/>
                </div>
                <div className='col-md-8'>
                    <div className='mx-5'>
                        <h2>Skin Diseases Detection can save your life</h2>
                        <p className='my-3'>One of the most dangerous diseases that Skin Diseases Detection can help identify is skin cancer.</p>
                        <h5 className='my-3'>Skin cancer is the most common cancer in the United States and worldwide.</h5>
                        <p>● More than 2 people die of skin cancer every hour all over the world.</p>
                        <p>● Melanoma is a skin cancer that can spread earlier and more quickly than other skin cancers.</p>
                        <p>● Melanoma is the second most common of all cancers in men and women ages 15-29.</p>
                        <p>● 1 in 50 people will develop skin cancer in their lifetime.</p>
                        <p>● When detected early, the 5-year survival rate for melanoma is 99 percent.</p>
                    </div>
                </div>
            </div>
            <div className='row my-5  '>
                <h1 className='my-5'>Why is this site worth using?</h1>
                <div className='col-md-3'>
                    <div className='item mt-2'>
                        <div className={`${styles.style} pt-3 mb-3`}>
                                <i className="fa-regular fa-lightbulb"></i>
                        </div>
                        <h3>Smart</h3>
                        <p>
                            is created on the basis of artificial intelligence as a result of joint work of IT specialists
                            and doctors. Our app has the Same accuracy as a dermatologist
                        </p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='item mt-2'>
                        <div className={`${styles.style} pt-3 mb-3`}>
                            <i className="fa-regular fa-clock"></i>
                        </div>    
                        <h3>Simple</h3>
                        <p>
                            You bring out the phone, upload a picture of the skin, and within a minute you'll know 
                            if there's any cause for concern.
                        </p>
                    </div>
                </div>
                <div className='col-md-3 '>
                    <div className='item mt-2'>
                        <div className={`${styles.style} pt-3 mb-3`}>
                            <i className="fa-solid fa-mobile-screen"></i>
                        </div>    
                        <h3>Accessible</h3>
                        <p>available anytime, anywhere. Keep your health in check at your fingertips even when you are on the go.</p>
                    </div>
                </div>
                <div className='col-md-3 '>
                    <div className='item mt-2'>
                        <div className={`${styles.style} pt-3 mb-3`}>
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                        <h3>saver</h3>
                        <p>You can enter the site and examine the affected area without any charge</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

