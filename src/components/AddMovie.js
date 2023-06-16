import { useState } from "react"

function AddMovie() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [runningTime, setRunningTime] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [poster, setPoster] = useState('');
  const [slug, setSlug] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(null);

  const handleSubmit = () => {
    if (title && year && runningTime && description && genre && poster && slug) {
      setIsSubmitted(true);
      console.log('Submitted successfully', {
        title,
        year,
        runningTime,
        description,
        genre,
        poster,
        slug
      });
    } else {
      setIsSubmitted(false);
      console.log('Please fill in the complete movie information');
    }
  }
  return (
    <div className='addmovie'>
        <div className="newmovie">
            <div className="newmovie-header">New movie</div>
            <input type="text" placeholder="Title" className="newmovie-title" value={title} onChange={e => setTitle(e.target.value)}/>
            <div className="second-line">
               <input type="text" placeholder="Year" className="year" value={year} onChange={e => setYear(e.target.value)}/>
               <input type="text" placeholder="Running time" className="running-time" value={runningTime} onChange={e => setRunningTime(e.target.value)}/>
            </div>
            <textarea  placeholder="Description" className="textarea" value={description} onChange={e => setDescription(e.target.value)}></textarea>
            <input type="text" placeholder="Genre" className="genre" value={genre} onChange={e => setGenre(e.target.value)}/>
            <input type="text" placeholder="Poster" className="poster" value={poster} onChange={e => setPoster(e.target.value)}/>
            <input type="text" placeholder="Slug" className="slug" value={slug} onChange={e => setSlug(e.target.value)}/>
            <input type="button" value="Submit" onClick={handleSubmit}/>
            {isSubmitted === null ? (
                  <span className="remind hidden"></span>
                ) : (
                  <span className={`remind ${isSubmitted ? 'success' : 'error'}`}>
                    {isSubmitted ? 'Submitted successfully' : 'Please fill in the complete movie information'}
                  </span>
            )}
            
        </div>
    </div>
  )
}

export default AddMovie