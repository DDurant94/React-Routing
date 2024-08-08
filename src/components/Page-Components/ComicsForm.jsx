import { useEffect, useState } from "react";
import axios from "axios";

// will need to change this for searching Comics
// NOT USED!!!!!!!
const ComicForm = () => {
  const [name, setName] = useState('');

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

  },[submitting]); 


  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    return errors;
  };

  const handleSubmit =(event) => {
    event.preventDefault();
    const errors = validateForm();
    if(Object.keys(errors).length === 0){
      setSubmitting(true);
      setError(null); 
    } else {
      setErrors(errors);
      
    } 
  };

  if(submitting) return <p>Submitting Search data...</p>;
  if(error) return <p>Error getting Search data:</p>;

  return (
    <div>

      <h2>Enter Characters Name:</h2>

      <form onSubmit={handleSubmit}>

        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        {errors.name && <div style={{color: 'red'}}>{errors.name}</div>}

        <button>Submit</button>

      </form>

    </div>
  );
};

export default ComicForm;