import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="header">
      
     
        <Row className="align-items-center" style={{paddingTop:'130px'}}>
          <Col md={6} >
            <h1>Hey !! Mario still here, But don’t forget that</h1>
            <p>
              At focal X agency, we are working to build something different.
              Here you’ll have a group of creative people who specialize in:
              Branding, Digital Marketing, Web/App Development, UI/UX,
              Content creation, Graphic design, Social media and More...
              So you can take a tour on our website, OR just <a style={{ fontSize: '20px', fontWeight: 'bold', color: 'black', textDecoration: 'none', cursor: 'pointer' }}>Press Start :)</a>
            </p>
          </Col>
          <Col md={6} className="text-center colgame" >
            <div className='game'>
              <a href="#" style={{ fontSize: '30px', fontWeight: 'bold', color: 'black', textDecoration: 'none', cursor: 'pointer', position: 'absolute', left: '20px', top: '170px' }}>START</a>

              <svg width="242" height="148" viewBox="0 0 282 168" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fontWeight: 'bold', position: 'absolute', top: '100px', left: '50px', zIndex:'4' }}>
                <path d="M0.666667 44C0.666667 46.9455 3.05448 49.3333 6 49.3333C8.94552 49.3333 11.3333 46.9455 11.3333 44C11.3333 41.0545 8.94552 38.6667 6 38.6667C3.05448 38.6667 0.666667 41.0545 0.666667 44ZM50.5 1L50.5 0L50.5 1ZM127.5 80.4995L126.841 79.7469L127.5 80.4995ZM85.9998 59.4994L86.9832 59.6806L85.9998 59.4994ZM185.5 48L185.025 48.8802L185.5 48ZM270.667 162.5C270.667 165.446 273.054 167.833 276 167.833C278.946 167.833 281.333 165.446 281.333 162.5C281.333 159.554 278.946 157.167 276 157.167C273.054 157.167 270.667 159.554 270.667 162.5ZM7.28563 38.2637C7.34147 37.7143 6.94132 37.2236 6.39187 37.1677C5.84241 37.1119 5.35172 37.5121 5.29588 38.0615L7.28563 38.2637ZM7.85949 26.4362C7.67413 26.9564 7.94562 27.5285 8.46587 27.7138C8.98612 27.8992 9.55813 27.6277 9.74349 27.1074L7.85949 26.4362ZM15.0625 17.0847C15.3937 16.6428 15.304 16.016 14.862 15.6848C14.4201 15.3536 13.7933 15.4434 13.4621 15.8853L15.0625 17.0847ZM22.1188 7.62352C21.6621 7.934 21.5435 8.55597 21.854 9.01272C22.1645 9.46946 22.7864 9.58804 23.2432 9.27756L22.1188 7.62352ZM33.4906 4.38798C34.0174 4.22223 34.3101 3.66079 34.1444 3.13396C33.9786 2.60714 33.4172 2.31442 32.8903 2.48017L33.4906 4.38798ZM44.5745 0.245131C44.0242 0.292042 43.6161 0.776168 43.663 1.32646C43.7099 1.87675 44.1941 2.28481 44.7444 2.2379L44.5745 0.245131ZM56.0712 2.1374C56.6228 2.1648 57.0921 1.73985 57.1195 1.18824C57.1469 0.636636 56.722 0.16726 56.1704 0.139861L56.0712 2.1374ZM67.4474 1.28572C66.9016 1.201 66.3905 1.57474 66.3058 2.12049C66.2211 2.66624 66.5948 3.17733 67.1406 3.26205L67.4474 1.28572ZM78.012 5.56607C78.5451 5.71057 79.0944 5.39559 79.2388 4.86254C79.3833 4.32949 79.0684 3.78023 78.5353 3.63574L78.012 5.56607ZM89.2862 7.22854C88.7736 7.02304 88.1914 7.27201 87.9859 7.78464C87.7804 8.29726 88.0294 8.87942 88.542 9.08493L89.2862 7.22854ZM98.5746 13.8322C99.0583 14.0987 99.6665 13.9227 99.9331 13.439C100.2 12.9553 100.024 12.3471 99.5399 12.0805L98.5746 13.8322ZM109.119 18.1892C108.674 17.8625 108.048 17.9586 107.721 18.4039C107.394 18.8492 107.491 19.4751 107.936 19.8018L109.119 18.1892ZM116.397 26.9472C116.793 27.3323 117.426 27.3236 117.811 26.9277C118.196 26.5319 118.187 25.8988 117.791 25.5136L116.397 26.9472ZM125.327 34.0455C124.995 33.604 124.369 33.5151 123.927 33.8469C123.486 34.1787 123.397 34.8055 123.728 35.2471L125.327 34.0455ZM129.553 44.6171C129.799 45.1116 130.399 45.3132 130.893 45.0674C131.388 44.8215 131.59 44.2213 131.344 43.7267L129.553 44.6171ZM135.253 54.4798C135.13 53.9413 134.594 53.6042 134.056 53.7268C133.517 53.8494 133.18 54.3853 133.303 54.9239L135.253 54.4798ZM134.008 65.732C133.943 66.2806 134.336 66.7774 134.884 66.8417C135.433 66.906 135.93 66.5135 135.994 65.965L134.008 65.732ZM132.046 76.8683C132.356 76.4114 132.238 75.7895 131.781 75.4793C131.324 75.1691 130.702 75.288 130.392 75.7449L132.046 76.8683ZM122.997 82.5972C122.526 82.8864 122.379 83.5022 122.668 83.9727C122.958 84.4433 123.573 84.5902 124.044 84.301L122.997 82.5972ZM114.393 87.7781C114.941 87.709 115.329 87.2087 115.26 86.6608C115.191 86.1129 114.69 85.7247 114.142 85.7939L114.393 87.7781ZM104.799 84.8544C104.274 84.683 103.709 84.9696 103.538 85.4946C103.366 86.0196 103.653 86.5842 104.178 86.7556L104.799 84.8544ZM95.2282 81.8213C95.6574 82.1688 96.2871 82.1026 96.6346 81.6734C96.9822 81.2442 96.916 80.6145 96.4868 80.267L95.2282 81.8213ZM90.1724 73.1275C89.8814 72.6581 89.265 72.5135 88.7956 72.8045C88.3262 73.0955 88.1815 73.7119 88.4725 74.1813L90.1724 73.1275ZM84.9027 64.5588C84.9723 65.1067 85.4728 65.4944 86.0207 65.4249C86.5686 65.3553 86.9563 64.8547 86.8868 64.3069L84.9027 64.5588ZM88.6387 54.4389C88.8632 53.9343 88.6361 53.3432 88.1314 53.1188C87.6268 52.8944 87.0358 53.1215 86.8113 53.6261L88.6387 54.4389ZM93.5079 43.931C93.1217 44.3258 93.1286 44.9589 93.5233 45.3451C93.9181 45.7314 94.5512 45.7245 94.9375 45.3297L93.5079 43.931ZM103.833 38.594C104.315 38.3252 104.488 37.7162 104.219 37.2338C103.951 36.7513 103.342 36.5781 102.859 36.847L103.833 38.594ZM113.712 32.4645C113.179 32.61 112.865 33.1599 113.011 33.6926C113.156 34.2254 113.706 34.5394 114.239 34.3939L113.712 32.4645ZM125.357 32.5529C125.908 32.5149 126.324 32.0374 126.286 31.4864C126.248 30.9354 125.77 30.5196 125.219 30.5576L125.357 32.5529ZM136.85 30.7101C136.3 30.6609 135.815 31.067 135.765 31.6171C135.716 32.1672 136.122 32.653 136.672 32.7021L136.85 30.7101ZM147.918 34.4537C148.458 34.5715 148.991 34.2297 149.108 33.6901C149.226 33.1506 148.884 32.6176 148.345 32.4998L147.918 34.4537ZM159.497 35.5511C158.972 35.3797 158.408 35.6664 158.236 36.1914C158.065 36.7164 158.352 37.281 158.877 37.4524L159.497 35.5511ZM169.556 41.445C170.065 41.6587 170.652 41.4191 170.865 40.9098C171.079 40.4005 170.839 39.8144 170.33 39.6007L169.556 41.445ZM180.835 44.445C180.341 44.1975 179.74 44.397 179.493 44.8907C179.245 45.3843 179.445 45.9853 179.938 46.2328L180.835 44.445ZM189.745 51.501C190.224 51.7752 190.835 51.6087 191.109 51.1293C191.384 50.6498 191.217 50.0389 190.738 49.7648L189.745 51.501ZM200.057 55.4071C199.592 55.1093 198.974 55.245 198.676 55.7102C198.378 56.1753 198.514 56.7938 198.979 57.0915L200.057 55.4071ZM207.921 63.1359C208.37 63.4566 208.995 63.3521 209.316 62.9024C209.636 62.4527 209.532 61.8283 209.082 61.5076L207.921 63.1359ZM217.788 68.0541C217.355 67.7112 216.727 67.784 216.384 68.2169C216.041 68.6497 216.113 69.2787 216.546 69.6217L217.788 68.0541ZM224.829 76.5378C225.244 76.9026 225.876 76.8622 226.24 76.4475C226.605 76.0329 226.565 75.401 226.15 75.0362L224.829 76.5378ZM234.138 82.4454C233.743 82.0592 233.11 82.0661 232.724 82.4609C232.337 82.8556 232.344 83.4888 232.739 83.875L234.138 82.4454ZM240.24 91.6261C240.613 92.0335 241.245 92.0615 241.653 91.6886C242.06 91.3157 242.088 90.6832 241.715 90.2758L240.24 91.6261ZM248.838 98.5235C248.489 98.095 247.859 98.0301 247.431 98.3786C247.002 98.7271 246.937 99.3569 247.286 99.7854L248.838 98.5235ZM253.82 108.349C254.141 108.799 254.765 108.903 255.215 108.583C255.664 108.262 255.769 107.637 255.448 107.188L253.82 108.349ZM261.482 116.29C261.193 115.819 260.578 115.672 260.107 115.96C259.636 116.249 259.488 116.864 259.777 117.335L261.482 116.29ZM265.034 126.719C265.284 127.211 265.886 127.408 266.379 127.158C266.871 126.908 267.068 126.306 266.818 125.813L265.034 126.719ZM271.315 135.786C271.113 135.272 270.533 135.019 270.019 135.221C269.505 135.423 269.252 136.003 269.454 136.518L271.315 135.786ZM272.801 146.697C272.941 147.231 273.487 147.551 274.022 147.411C274.556 147.271 274.876 146.725 274.736 146.19L272.801 146.697ZM276.719 157C276.665 156.45 276.175 156.049 275.625 156.104C275.076 156.159 274.674 156.648 274.729 157.198L276.719 157ZM7 44C7.00001 42.0671 7.09381 40.151 7.28563 38.2637L5.29588 38.0615C5.09694 40.0189 5.00001 42.0026 5 44L7 44ZM9.74349 27.1074C11.0319 23.4912 12.792 20.1144 15.0625 17.0847L13.4621 15.8853C11.0605 19.0899 9.20921 22.6479 7.85949 26.4362L9.74349 27.1074ZM23.2432 9.27756C26.1976 7.26927 29.6014 5.61152 33.4906 4.38798L32.8903 2.48017C28.8247 3.75925 25.2428 5.49998 22.1188 7.62352L23.2432 9.27756ZM44.7444 2.2379C46.5848 2.08101 48.5027 2.00004 50.5 2L50.5 0C48.4487 3.59416e-05 46.474 0.0831963 44.5745 0.245131L44.7444 2.2379ZM50.5 2C52.3839 1.99997 54.2411 2.0465 56.0712 2.1374L56.1704 0.139861C54.3072 0.0473115 52.4168 -3.3617e-05 50.5 0L50.5 2ZM67.1406 3.26205C70.9025 3.84602 74.5282 4.62171 78.012 5.56607L78.5353 3.63574C74.9802 2.67203 71.2821 1.881 67.4474 1.28572L67.1406 3.26205ZM88.542 9.08493C92.0711 10.4997 95.418 12.0926 98.5746 13.8322L99.5399 12.0805C96.3119 10.3016 92.8912 8.67373 89.2862 7.22854L88.542 9.08493ZM107.936 19.8018C111.009 22.0565 113.833 24.453 116.397 26.9472L117.791 25.5136C115.161 22.9542 112.266 20.498 109.119 18.1892L107.936 19.8018ZM123.728 35.2471C126.044 38.3281 127.99 41.4746 129.553 44.6171L131.344 43.7267C129.724 40.4685 127.712 37.2183 125.327 34.0455L123.728 35.2471ZM133.303 54.9239C134.163 58.7044 134.404 62.3491 134.008 65.732L135.994 65.965C136.421 62.3253 136.157 58.4501 135.253 54.4798L133.303 54.9239ZM130.392 75.7449C129.408 77.1939 128.227 78.5346 126.841 79.7469L128.158 81.252C129.671 79.9284 130.966 78.4598 132.046 76.8683L130.392 75.7449ZM126.841 79.7469C125.568 80.8606 124.284 81.8059 122.997 82.5972L124.044 84.301C125.431 83.4483 126.806 82.4357 128.158 81.252L126.841 79.7469ZM114.142 85.7939C110.922 86.2002 107.765 85.8231 104.799 84.8544L104.178 86.7556C107.399 87.8074 110.853 88.2247 114.393 87.7781L114.142 85.7939ZM96.4868 80.267C93.9638 78.2239 91.8087 75.767 90.1724 73.1275L88.4725 74.1813C90.2277 77.0124 92.5322 79.6382 95.2282 81.8213L96.4868 80.267ZM86.8868 64.3069C86.685 62.7178 86.7103 61.1622 86.9832 59.6806L85.0163 59.3183C84.7021 61.0238 84.6778 62.788 84.9027 64.5588L86.8868 64.3069ZM86.9832 59.6806C87.2942 57.9925 87.8435 56.2268 88.6387 54.4389L86.8113 53.6261C85.957 55.5469 85.3581 57.4633 85.0163 59.3183L86.9832 59.6806ZM94.9375 45.3297C97.3574 42.8564 100.318 40.5522 103.833 38.594L102.859 36.847C99.1791 38.8975 96.064 41.3185 93.5079 43.931L94.9375 45.3297ZM114.239 34.3939C117.62 33.4706 121.325 32.8311 125.357 32.5529L125.219 30.5576C121.06 30.8446 117.226 31.5052 113.712 32.4645L114.239 34.3939ZM136.672 32.7021C140.223 33.0194 143.971 33.5914 147.918 34.4537L148.345 32.4998C144.32 31.6205 140.489 31.0352 136.85 30.7101L136.672 32.7021ZM158.877 37.4524C162.308 38.5725 165.868 39.8974 169.556 41.445L170.33 39.6007C166.594 38.0331 162.983 36.689 159.497 35.5511L158.877 37.4524ZM179.938 46.2328C181.61 47.0714 183.306 47.9534 185.025 48.8802L185.975 47.1198C184.238 46.1838 182.525 45.2927 180.835 44.445L179.938 46.2328ZM185.025 48.8802C186.616 49.7377 188.189 50.6115 189.745 51.501L190.738 49.7648C189.168 48.8671 187.58 47.9851 185.975 47.1198L185.025 48.8802ZM198.979 57.0915C202.038 59.0498 205.02 61.0671 207.921 63.1359L209.082 61.5076C206.154 59.4195 203.145 57.3834 200.057 55.4071L198.979 57.0915ZM216.546 69.6217C219.399 71.8821 222.161 74.1903 224.829 76.5378L226.15 75.0362C223.456 72.6661 220.668 70.3359 217.788 68.0541L216.546 69.6217ZM232.739 83.875C235.349 86.4282 237.85 89.0152 240.24 91.6261L241.715 90.2758C239.3 87.6375 236.773 85.0241 234.138 82.4454L232.739 83.875ZM247.286 99.7854C249.599 102.629 251.778 105.488 253.82 108.349L255.448 107.188C253.381 104.291 251.176 101.399 248.838 98.5235L247.286 99.7854ZM259.777 117.335C261.704 120.481 263.459 123.615 265.034 126.719L266.818 125.813C265.217 122.66 263.436 119.48 261.482 116.29L259.777 117.335ZM269.454 136.518C270.816 139.983 271.935 143.384 272.801 146.697L274.736 146.19C273.848 142.795 272.704 139.318 271.315 135.786L269.454 136.518ZM274.729 157.198C274.909 159.008 275 160.777 275 162.5H277C277 160.707 276.906 158.872 276.719 157L274.729 157.198Z" fill="#282828" />
              </svg>
              <img src="./img/gameBoy-min.png" alt="gameboy" className='img-game' />

            </div>

          </Col>
          </Row>

      <div className="hero-footer">
      
        <div className='footer'>
          <div>
            <ul className="social-links">
              <li><a href="#facebook"><img src="./img/facebook.png" alt="facebook" /></a></li>
              <li><a href="#behance"><img src="./img/behance.png" alt="behance" /></a></li>
              <li><a href="#linkedin"><img src="./img/linkedin.png" alt="linkedin" /></a></li>
              <li><a href="#instagram"><img src="./img/instgram.png" alt="instgram" /></a></li>
              <li><a href="#twitter"><img src="./img/twitter.png" alt="twitter" /></a></li>
            </ul>
          </div>
          <div className="text-right">
            <p className="footer-text">© 2021 - 2022 focal X agency All Rights Reserved</p>
          </div>
        </div>
     
    </div>
      
    </header>
  );
};

export default Header;










