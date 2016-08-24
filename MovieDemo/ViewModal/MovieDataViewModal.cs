
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using MovieDemo.Services;
using Ninject;

namespace MovieDemo.ViewModal
{
    public class MovieDataViewModal : IValidatableObject
    {
        public MovieDataViewModal()
        {
            
        }
        public MovieDataViewModal(IDataRepository dataSrc)
        {
            this.dataSrc = dataSrc;
        }

        [Inject] IDataRepository dataSrc { get; set; }
        
        public int MovieId { get; set; }
        [Required]
        [Remote("DoesTitleExist", "Movies")]
        public string Title { get; set; }
        [Required]
        public string Genre { get; set; }
        [Required]
        public string Classification { get; set; }
        [Range(0, 5)]
        public int Rating { get; set; }
        public int ReleaseDate { get; set; }
        public string[] Cast { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            var result = new List<ValidationResult>();

            if (Title == Genre)
            {
                result.Add(new ValidationResult("Title can not be the same as your Genre", new string[] { "Title" }));
            }
            if(dataSrc.DoesTitleAlreadyExist(Title))
            {
                result.Add(new ValidationResult("Title already existing", new string[] { "Title" }));
            }
            return result;
        }
    }
}