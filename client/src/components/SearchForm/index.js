import React from "react";

function Form() {
    return(
        <form className="form-inline">
            <div className="form-group mb-2">
                <label for="bookSearch" className="sr-only">Book Search</label>
                <input type="text" readonly className="form-control-plaintext" id="bookSearch" value="Book-Search">
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label for="inputTitle" className="sr-only">Title</label>
                <input type="text" className="form-control" id="inputTitle" placeholder="BookTitle">
            </div>
            <button type="submit" className="btn btn-primary mb-2">Search</button>
        </form>

    );
}
   

export default Form;