import React from "react";

export default function About() {
  return (
    <>
      <div className="container">
        <h2 className="my-3">ABOUT US</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Arnab react project 
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>2023.</strong> 
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
