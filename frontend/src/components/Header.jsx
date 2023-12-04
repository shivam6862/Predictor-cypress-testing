import React from "react";
import classes from "@/styles/header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.box} data-test="predictor-header">
        Smoke Drink Predictor
      </div>
      <div className={classes.links}>
        <Link href="/" data-test="nav-home">
          Home
        </Link>
        <Link href="/todolist" data-test="nav-todolist">
          Todolist
        </Link>
      </div>
    </div>
  );
};

export default Header;
