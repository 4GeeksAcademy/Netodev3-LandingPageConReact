import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Card = () => {
  return (
      <div className="card h-100" style={{width: "24%"}}>
        <img src="#" className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
          <p className="card-text text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nostrum pariatur labore beatae assumenda quasi optio veritatis qui sunt in adipisci itaque quos
          </p>
        </div>
        <div
          className="card-footer d-flex justify-content-center"
          style={{ backgroundColor: "#e5e0e0" }}
        >
          <button type="button" className="btn btn-primary">
            Find Out More!
          </button>
        </div>
      </div>
  );
};

export default Card;
