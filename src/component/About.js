import myPict from "./img/myPict.jpg";
import reactLogo from "./img/logo512.png";
import htmlLogo from "./img/htmlLogo.png";
import cssLogo from "./img/css-logo.png";
import javascriptLogo from "./img/javascript.png";
import bootstrapLogo from "./img/bootstrap-logo.png";
import nodeJS from "./img/nodeJS.png";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import "./About.css";

const About = () => {
  return (
    <div>
        <div className="container-fluid about">
          <div className="poth-name">
              <img src={myPict} alt="myPict" className="myPict img-fluid" width="170px"/>
          </div>
          <div className="namePict mt-3">
            <h1 className="text-center namaa">Muhammad Fikrianto Aji</h1>
            <p className="text-center posisi">Web Developer | Front End</p>
          </div>
          <hr/>
          <div className="expe h-100 container">
            
            <br/>
            <div className="row">
              <div className="col-4">
                <h1 className="jml text-center">7</h1>
                <p className="text-center tech">Technologi Programming</p>
              </div>

              <div className="col-8">
                <p className="fw-bold spesifik textColorSpekD" id="spek">I'm a Front End Developer. Speciallized in Website.</p>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="p-3 card htCard pt-4">
                      <img src={htmlLogo} alt="html" width="25px"/>
                      <p id="html">HTML</p>
                      <br/>
                      <p className="viewMore text-decoration-none fw-bold">View More {'>>'}</p>
                    </div>
                  </div>

                  <div className="col-sm-3 mt-sm-0 mt-3">
                    <div className="p-3 card csCard pt-4">
                      <img src={cssLogo} alt="css" width="25px"/>
                      <p id="css">CSS</p>
                      <br/>
                      <p className="viewMore text-decoration-none fw-bold">View More {'>>'}</p>
                    </div>
                  </div>

                  <div className="col-sm-3 mt-sm-0 mt-3">
                    <div className="p-3 card bsCard pt-4">
                      <img src={bootstrapLogo} alt="bootstrap" width="25px"/>
                      <p id="bootstrap">Bootstrap</p>
                      <br/>
                      <p className="viewMore text-decoration-none fw-bold">View More {'>>'}</p>
                    </div>
                  </div>

                  <div className="col-sm-3 mt-sm-0 mt-3">
                    <div className="p-3 card jsCard pt-4">
                      <img src={javascriptLogo} alt="js" width="25px"/>
                      <p id="js">Javascript</p>
                      <br/>
                      <p className="viewMore text-decoration-none fw-bold">View More {'>>'}</p>
                    </div>
                  </div>

                  <div className="col-sm-3 mt-3">
                    <div className="p-3 card rctCard pt-4">
                      <img src={reactLogo} alt="react" width="25px"/>
                      <p id="react">React JS</p>
                      <br/>
                      <p className="viewMore text-decoration-none fw-bold">View More {'>>'}</p>
                    </div>
                  </div>

                  <div className="col-sm-3 mt-3">
                    <div className="p-3 card ndCard pt-4">
                      <img src={nodeJS} alt="nodeJS" width="25px"/>
                      <p id="nodeJS">Node JS</p>
                      <br/>
                      <p className="viewMore text-decoration-none fw-bold">View More {'>>'}</p>
                    </div>
                  </div>

                  

                  

                  

                  
                </div>
                

                

              </div>
            </div>
            <br/><br/><br/><br/><br/>

            <div className="statistik">
              <h1 className="fw-bold text-center textColorDark" id="progress">PROGRESS LEARNING PROGRAMMING</h1>
              <br/>
              <div className="container cont-prgs">
                {/* row start */}
                <div className="row">
                  <div className="col-sm-2 col-6">
                      <CircularProgress className="htmlProg img-fluid" value={80} size='100px' thickness='4px' color="orangered">
                        <CircularProgressLabel className="htmlCircle" id="labelSkill"><br/>HTML</CircularProgressLabel>
                      </CircularProgress>
                  </div>
                  <div className="col-sm-2 col-6">
                      <CircularProgress className="cssProg img-fluid "value={75} size='100px' thickness='4px' color="skyblue">
                        <CircularProgressLabel className="cssCircle" id="labelSkill"><br/>CSS</CircularProgressLabel>
                      </CircularProgress>
                  </div>
                  <div className="col-sm-2 col-6">
                      <CircularProgress className="bsProg img-fluid " value={70} size='100px' thickness='4px' color="purple">
                        <CircularProgressLabel className="bootstrapCircle" id="labelSkill"><br/>Bootstrap</CircularProgressLabel>
                      </CircularProgress>
                  </div>
                  <div className="col-sm-2 col-6">
                      <CircularProgress className="jsProg img-fluid " value={50} size='100px' thickness='4px' color="limegreen">
                        <CircularProgressLabel className="jsCircle" id="labelSkill"><br/>JS</CircularProgressLabel>
                      </CircularProgress>
                  </div>
                  <div className="col-sm-2 col-6">
                      <CircularProgress className="reactProg img-fluid " value={40} size='100px' thickness='4px' color="blue">
                        <CircularProgressLabel className="reactCircle" id="labelSkill"><br/>React JS</CircularProgressLabel>
                      </CircularProgress>
                  </div>
                  <div className="col-sm-2 col-6">
                      <CircularProgress className="nodeProg img-fluid " value={30} size='100px' thickness='4px' color="green">
                        <CircularProgressLabel className="nodeJSCircle" id="labelSkill"><br/>Node JS</CircularProgressLabel>
                      </CircularProgress>
                  </div>

                </div>
                {/* end row */}
              </div>
              {/* end Container */}
              <br/><br/><br/>
            </div>

          </div>
        </div>
    </div>
  );
};

export default About;
