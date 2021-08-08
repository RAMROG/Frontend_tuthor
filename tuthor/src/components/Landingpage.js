import react, {Fragment} from 'react';
import NavBarLanding from './NavBarLanding';
import img_student from '../img/student.png';
import img_math from '../img/math.png';


const Landingpage = ()=> {
    return (
        <Fragment>
            <NavBarLanding></NavBarLanding>
            <div className = "row body-landing">
                <div className="col-6 ">
                    <div className = "landin-text">
                        <h5 className="landin-header-text">Unete a nuestra plataforma</h5>
                        <h3 className = "landing-body-text my-3">Adquiere y comparte conocimiento en nuestra red de tutorias</h3>
                        <h6 className="landin-footer-text my-3">Una oportunidad para todos</h6>
                    </div>
                </div>

                <div className="col-6">
                    <img className="img-math" src={img_math} alt="img-math"/>
                    <img className="img-student" src={img_student} alt="img_student"/>
                </div>
            </div>
        </Fragment>
    );
}

export default Landingpage;
