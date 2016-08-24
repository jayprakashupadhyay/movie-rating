using System;
using MoviesLibrary;
using System.Linq;
using MovieDemo.Common;
using MovieDemo.Helper;
using Ninject;

namespace MovieDemo.Services
{
    public class DataRepository : IDataRepository
    {
        public DataRepository(MovieDataSource dataSrc)
        {
            this.dataSrc = dataSrc;
        }
       
        [Inject] private  MovieDataSource dataSrc { get; set; }
        public bool CreateMovie(MovieData newMovie)
        {
            try
            {
                if (dataSrc.Create(newMovie) > 0)
                {
                    CacheHelper.RemoveFromCache(MovieConstants.ALL_MOVIES);
                    return true;
                }
                return false;


            }
            catch(Exception ex)
            {
                return false;
            }
        }

       

        public IQueryable<MovieData> GetAllMovies()
        {

            var allMovies = CacheHelper.GetFromCache<IQueryable<MovieData>>(MovieConstants.ALL_MOVIES);

            if (allMovies == null)
            {

                allMovies = dataSrc.GetAllData().AsQueryable();
                CacheHelper.SaveTocache(MovieConstants.ALL_MOVIES, allMovies, DateTime.Now.AddHours(24));
            }

            return allMovies;
        }

        public MovieData GetMovieById(int id)
        {
            try
            {
                var allMovies = GetAllMovies();
                var movie = allMovies.FirstOrDefault(r => r.MovieId == id);
                if(movie == null)
                {
                    movie = dataSrc.GetDataById(id);
                    if (movie != null)
                        return movie;
                    return null;
                }
                return movie;
            }
            catch(Exception ex)
            {
                return null;
            }

        }

        public bool UpdateMovie(MovieData movie)
        {
            try
            {
                dataSrc.Update(movie);
                CacheHelper.RemoveFromCache(MovieConstants.ALL_MOVIES);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
            
        }

        public bool DoesTitleAlreadyExist(string title)
        {
            return GetAllMovies().Any(r => r.Title == title);
        }
    }
}