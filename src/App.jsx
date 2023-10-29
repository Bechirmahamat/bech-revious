import { useEffect, useState } from "react";
import reviews from "./Data";
import Revious from "./Revious";
import Title from "./Title";
function App() {
    const [count, setcount] = useState(0);
    const length = reviews.length;
    const { name, job, info, text, image } = reviews[count];
    function next() {
        setcount((old) => (old + 1) % length);
    }
    function previous() {
        setcount((old) => (old - 1 + length) % length);
    }
    function surprise() {
        setcount(() => Math.floor(Math.random() * length));
    }

    return (
        <>
            <Title />
            <div className="container">
                <div className="singleItem mx-auto text-center">
                    <div className="image mx-auto">
                        <div>
                            <img src={image} alt={name} />
                        </div>
                        <i className="fa fa-quote-right"></i>
                    </div>
                    <h4 className="name">{name}</h4>
                    <h4 className="job text-primary">{job}</h4>
                    <p className="text">{text}</p>
                    <div className="btns">
                        <button type="button" onClick={previous}>
                            <i className="fa fa-arrow-left"></i>
                        </button>
                        <button type="button" onClick={next}>
                            <i className="fa fa-arrow-right"></i>
                        </button>
                    </div>

                    <button
                        className="btn surpriseMe btn-outline-primary mb-2"
                        type="button"
                        onClick={surprise}
                    >
                        Surprise Me
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
