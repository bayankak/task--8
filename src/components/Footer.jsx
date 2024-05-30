import React from 'react';
const Footer = () => { return (
<footer>
  <div className="container">
    <div className="footer-row">
        <div className="footer-col logofooter" style={{display:'flex',flexDirection:'column',justifyContent:'center' ,alignItems:'center', marginRight:'80px'}}>
           <div style={{display:'flex', alignItems:'center', marginBottom:'5px',justifyContent:'flex-start', width:'100%' ,textAlign:'center'}}><img src="./img/logofooter.png" alt="logo" style={{width:'100px',marginBottom:'15px'}} /><b style={{fontWeight:'100'}} >.agency</b></div>
           <div> 
              <h5>Head Office</h5>
              <p>Syria-Latakia-GRH2HJX35.5199518</p>
           </div>
        </div>
        <div className="footer-col">
            <h5>Sales</h5>
            <p>contact@focal-x.com</p>
            <p>+963 953 666 056</p>
            <h5>Public Relations</h5>
            <p>pr@focal-x.com</p>
            <p>+963 953 666 052</p>
        </div>
        <div className="footer-col">
            <h5>Customer Support</h5>
            <p>info@focal-x.com</p>
            <p>+963 953 666 054</p>
            <p><strong>Human Resources</strong></p>
            <p>hr@focal-x.com</p>
        </div>
        <div className="footer-col">
            <h5>Useful Links</h5>
            <p>Clients & Partners</p>
            <p>Check Certificate ID</p>
            <p>Check for employee</p>
            <p>Our Brand ID guidelines</p>
        </div>
        <div className="footer-col social-media">
            <h5>Keep In Touch</h5>
            <div class="social-icons">
                <a href="https://www.facebook.com/focal.x.agency/" target='_blank'><img src="./img/facebook2.png" alt="Facebook"/></a>
                <a href="https://www.behance.net/focal-x-agency" target='_blank'><img src="./img/behance2.png" alt="Behance"/></a>
                <a href="https://www.linkedin.com/company/focal-x-agency" target='_blank'><img src="./img/linkdin2.png" alt="LinkedIn"/></a>
                <a href="http://focal-x.com/assets/img/icons/instgram.png" target='_blank'><img src="./img/instgram2.png" alt="Instagram"/></a>
                <a href="https://twitter.com/focal_x_agency" target='_blank'><img src="./img/twitter2.png" alt="Twitter"/></a>
            </div>
        </div>
    </div>
  </div>
  <div className='footer2' style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
    <p className='p' style={{textAlign:'start'}}>© 2021 - 2023 focal X L.L.C All Right Reserved</p>
    <span style={{textAlign:'center', width:'60%', borderTop:'1px solid white'}}></span>
  </div>
</footer>)}


export default Footer;


