import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";


class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return(
                <li
                key={book.title}
                className="list-group-item"
                onClick={() => this.props.selectBook(book)} >{book.title}</li>
            );
        })
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    //the return value of this function will show up as props inside of BookList
    return {
        books: state.books
    };
}
// Anything returned from this funciton will end up as props on the BooksList container.
function mapDispatchToProps(dispatch){
    // Whenever selectBook is called th result should be passed to all of our
    // reducers. Without it, the action doesnt reach the reducer, and thus
    //isn't linked to the Application state.
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Turn Booklist into a container by connecting it to the redux state.
// Connects our to map-to functions to the BookList containter.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
