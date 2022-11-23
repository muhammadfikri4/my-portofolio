import "./Contact.css";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "./img/MuhStore.png";
import message from "./img/message.svg";

const Contact = () => {
  return (
    <div>
      <div className="container-fluid contact">
        <div className="headerLogo">
          <img src={Logo} alt="Logo" width="200px" />
        </div>
        <div className="cont-form">
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              className="emailInput"
              placeholder="Masukkan Email"
              required
            />
            <FormHelperText className="hlpTxt">
              Cth: xxxxx@gmail.com
            </FormHelperText>

            <FormLabel>Nama</FormLabel>
            <Input
              type="name"
              className="nameInput"
              placeholder="Masukkan Nama"
              required
            />
            <FormHelperText className="hlpTxt">
              Cth: Budi Setiawan
            </FormHelperText>

            <FormLabel>No Telepon</FormLabel>
            <Input
              type="tel"
              className="telInput"
              placeholder="Masukkan No Telepon"
              minLength="12"
              maxLength="13"
              required
            />
            <FormHelperText className="hlpTxt">
              Cth: 08xxxxxxxxxxx
            </FormHelperText>

            <FormLabel>Kritik & Saran</FormLabel>
            <textarea
              className="text-area"
              placeholder="Yang penting berguna!"
            ></textarea>
            <br />
            <button className="submit bg-primary text-light">SUBMIT</button>
          </FormControl>
        </div>
        <div className="komen">
          <Link to="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src={message} alt="msg" width="25px" />
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          </Link>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Comment
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body"><i className="text-center">No Comment Available</i><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
                <div className="modal-footer">
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Contact;
