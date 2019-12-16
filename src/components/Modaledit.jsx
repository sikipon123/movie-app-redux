import React from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { editmovie } from "../Actions/Action";

class ConnectedModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newname: this.props.movie.name,
      newimg: this.props.movie.img,
      newreleasedate: this.props.movie.releasedate,
      newrate: this.props.movie.rate
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  //   handleChange = e => {
  //     this.setState({
  //       newname: e.target.value,
  //       newimg: e.target.value,
  //       newreleasedate: e.target.value,
  //       newrate: e.target.value
  //     });
  //   };
  render() {
    console.log("from modalEdit", this.props.movie.id);
    return (
      <div>
        <Button onClick={this.toggle} className="edit-btn">
          Edit
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Edit Movie</ModalHeader>
          <input
            placeholder={this.props.movie.name}
            defaultValue={this.props.movie.name}
            onChange={e => {
              this.setState({
                newname: e.target.value
              });
            }}
          />
          <input
            placeholder={this.props.movie.img}
            defaultValue={this.props.movie.img}
            onChange={e => {
              this.setState({
                newimg: e.target.value
              });
            }}
          />
          <input
            placeholder={this.props.movie.releasedate}
            defaultValue={this.props.movie.releasedate}
            onChange={e => {
              this.setState({
                newreleasedate: e.target.value
              });
            }}
          />
          <input
            placeholder={this.props.movie.rate}
            defaultValue={this.props.movie.rate}
            onChange={e => {
              this.setState({
                newrate: e.target.value
              });
            }}
          />
          <ModalFooter className="btneditx">
            <Button
              onClick={e => {
                e.preventDefault();
                this.toggle();
                this.props.editmovie({
                  id: this.props.movie.id,
                  newname: this.state.newname,
                  newreleasedate: this.state.newreleasedate,
                  newimg: this.state.newimg,
                  newrate: this.state.newrate
                });
              }}
            >
              Save Changes
            </Button>
            <Button className="btn btn-danger" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { editmovie })(ConnectedModal);
