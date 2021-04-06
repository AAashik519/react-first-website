import React from 'react';

const Contacr = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center "> Contract Us </h1>
            </div>

            <div className="container">
                <div className="row">
                <div className="col-lg-2 col-12"></div>
                    <div className="col-lg-8 col-10 mx-auto">
                        <form action="">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email Address" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Massage</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-2 col-12"></div>

                </div>

            </div>
        </>
    );
};

export default Contacr;