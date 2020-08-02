import Link from "next/link";
import Router from "next/router";
import { Button } from "antd";
import store from "../store/store";
import { connect } from "react-redux";

const Index = ({ count }) => {
  return (
    <div className="box">
      <div className="hero">
        <h1 className="title">Welcome to Next.js!{count}</h1>
      </div>
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default connect(function mapStateToProps(state) {
  return {
    count: state.count.count
  };
})(Index);
