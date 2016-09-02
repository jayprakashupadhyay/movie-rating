using System;
using System.Web.Http;
using System.Web.Http.Cors;
using MoviesLibrary;
using System.Web.Http.OData;
using MovieDemo.Services;
using AutoMapper;
using MovieDemo.ViewModal;

namespace MovieDemo.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class MoviesController : ApiController
    {
        private readonly IDataRepository _repo;

        public MoviesController(IDataRepository dataRepository)
        {
            _repo = dataRepository;
        }

       
        [EnableQuery()]// this is for suport url query working with oData//PageSize = 5
        public IHttpActionResult Get()
        {
            try
            {
                var movies = _repo.GetAllMovies(); 
                return Ok(movies);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }
    

        //GET: api/Movies/5
        public IHttpActionResult Get(int id)
        {
            try
            {
                if (id > 0)
                {
                    var movie = _repo.GetMovieById(id);
                    var result = Mapper.Map<MovieDataViewModal>(movie);
                    if (result != null) return Ok(result);

                    return NotFound();
                }
                return NotFound();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // POST: api/Movies 
        public IHttpActionResult Post([FromBody]MovieDataViewModal newMovie) 
        {
            try
            {

                if (newMovie == null)
                    return BadRequest("Movie can not be null");

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var movie = Mapper.Map<MovieData>(newMovie);

                if (_repo.CreateMovie(movie)) return Ok(newMovie);

                return Conflict();

            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // PUT : api/Movies/5
        public IHttpActionResult Put(int id, [FromBody]MovieDataViewModal movieModified)
        {
            try
            {

                if (movieModified == null)
                    return BadRequest("Movie can not be null");

                if (movieModified.MovieId <= 0 && movieModified.MovieId != id)
                    return Conflict();

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var movieData = _repo.GetMovieById(id);
                if (movieData != null)
                {
                    var movie = Mapper.Map<MovieData>(movieModified);
                    _repo.UpdateMovie(movie); 
                    return Ok();
                }

                return NotFound();

            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }

        public IHttpActionResult DoesTitleExist(string title)
        {
            if (_repo.DoesTitleAlreadyExist(title))
            {
                //Invalid
                return Ok();
            }
            //Valid
            return BadRequest("Title already existing");
        }
    }
}
