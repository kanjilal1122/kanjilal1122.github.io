import React from "react";
import user from "../../asset/images/user-profile.png";

const AvatarLogo = () => {
  const hello = "Hello,";
  const name = "Jack Grish";

  return (
    <div className="d-flex justify-content-between w-50">
      <div className=" d-flex ">
        <img
          src={user}
          alt="jhgfd"
          style={{
            width: "20%",
            margin: " 5 0 0 0",
            borderRadius: "50%",
          }}
        />
        <span>
          <h6 className="m-0">{hello}</h6>
          <h4 className="m-0">{name}</h4>
        </span>
      </div>
    </div>
  );
};

export default AvatarLogo;
