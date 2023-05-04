import React from "react";

function getYear() {
    return new Date().getFullYear();
}

function Footer() {
  return (
    <div>
        <hr/>
      <h5><span>
   © {getYear()} ISDA - Data &amp; Digital Solutions
</span>
</h5>
    </div>
  );
}

export default Footer;