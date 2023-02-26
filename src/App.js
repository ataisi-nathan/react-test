import React, {Component} from "react";
import { getMovies } from "./service/fakeMovieService";

class Table extends Component {

    state = {
        movies: getMovies()
    }

    handleDelete(movie) {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies})
    }

    render() {

        const { length: count} = this.state.movies

        if ( count === 0)
            return <p>There is no Movie avaliable</p>

        return (
            <>
            <p>There are { count } movies available</p>
            <table >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => (
                    <tr>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={() => this.handleDelete(movie)}>Delete</button></td>
                    </tr>))}
                </tbody>
            </table>
            
            </>
        )
    }
}

export default Table;