import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Custominput from "../components/Custominput";

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Signup</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <Custominput type="text" name="name" placeholder="Name" />
                  <Custominput type="email" name="email" placeholder="Email" />
                  <Custominput
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                    />
                  <Custominput
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  <div>
                    <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Sign Up</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
