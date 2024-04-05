import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import {HiOutlineArrowLeft} from "react-icons/hi";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
                <div className="single-blog-card">
                    <Link to ="/blogs" className="d-flex align-items-center gap-10 "> 
                    <HiOutlineArrowLeft className="fs-4"/> Go back to Blogs</Link>
                    <h3 className="title">
                        A beautiful Sunday Morning
                    </h3>
                    <img src="images/blog-3.webp" className="img-fluid w-100 my-4" alt="blog"/>
                    <p>You are only as good as your last collection, which is an enormous pressure.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
