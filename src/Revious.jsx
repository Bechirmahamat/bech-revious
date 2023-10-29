import React from "react";

const Revious = ({ data, next, prev, length, ids, surprise }) => {
    return (
        <div className="container">
            <div className="singleItem mx-auto text-center">
                <div className="image mx-auto">
                    <div>
                        <img src={data.image} alt={data.name} />
                    </div>
                    <i className="fa fa-quote-right"></i>
                </div>
                <h4 className="name">{data.name}</h4>
                <h4 className="job text-primary">{data.job}</h4>
                <p className="text">{data.text}</p>
                <div className="btns">
                    <button
                        type="button"
                        onClick={(e) => {
                            if (ids == 0) {
                                e.target.disabled = true;
                            } else {
                                e.target.disabled = false;
                                prev();
                            }
                        }}
                    >
                        <i className="fa fa-arrow-left"></i>
                    </button>
                    <button
                        type="button"
                        onClick={(e) => {
                            if (ids == length - 1) {
                                e.target.disabled = true;
                                e.target.classL;
                            } else {
                                e.target.disabled = false;
                                next();
                            }
                        }}
                    >
                        <i className="fa fa-arrow-right"></i>
                    </button>
                </div>

                <button
                    className="btn surpriseMe btn-outline-primary mb-2"
                    type="button"
                    onClick={() => {
                        surprise();
                    }}
                >
                    Surprise Me
                </button>
            </div>
        </div>
    );
};

export default Revious;
