using MoviesLibrary;
using System.Collections.Generic;
using System.Linq;

namespace MovieDemo.Services
{
    public interface IDataRepository
    {
        
        IQueryable<MovieData> GetAllMovies();
        MovieData GetMovieById(int id);
        bool CreateMovie(MovieData newMovie);
        bool UpdateMovie(MovieData movie);
        bool DoesTitleAlreadyExist(string title);
    }
}