import React, { Component } from "react";
import { Card, CardContent, Input, Button } from "@material-ui/core";
import Axios from "axios";

export class UpdateMac extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      mac: "",
      toggle:false
    };
  }

  onClickHandler = () => {
    if (this.state.toggle) {
      this.setState({ toggle: false });
    } else {
      this.setState({ toggle: true });
    }
  };

  onSubmitHandler = () => {
    if (this.state.id.length > 0) {
      Axios.post("http://localhost:8001/newMac", { data: this.state })
        .then(data => {
          console.log("new Mac Address posted");
          this.setState({ id: "", mac: "" });
        })
        .catch(err => console.error(err));
    } else {
      window.alert("fill the details first");
    }
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <Card style={{ background: "lightgreen", width: 580 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={this.onClickHandler}
          >
            Update Mac Address
          </Button>
          {this.state.toggle ? (
            <div>
              <CardContent>
                Laptop Id :{" "}
                <Input
                  type="int"
                  name="id"
                  value={this.state.id}
                  onChange={e => {
                    this.setState({ id: e.target.value });
                  }}
                />
                <br />
              </CardContent>
              <CardContent>
                Mac Address :{" "}
                <Input
                  type="text"
                  name="mac"
                  placeholder="xx:xx:xx:xx:xx:xx"
                  value={this.state.mac}
                  onChange={e => {
                    this.setState({ mac: e.target.value });
                  }}
                />
              </CardContent>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={this.onSubmitHandler}
              >
                Submit
              </Button>{" "}
            </div>
          ) : (
            ""
          )}
        </Card>
      </div>
    );
  }
}

export default UpdateMac;
