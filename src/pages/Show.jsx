import React, { useState, useEffect } from 'react';
import { Link, useParams, useLoaderData, Form } from 'react-router-dom';
const URL=""

const Show = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [post, setPost] = useState(data);

  useEffect(() => {
    // Fetch data based on the ID using the `id` variable from useParams
    // Update the post state accordingly
  }, [id]);

  const handleChange = (e) => {
    setPost((prevPost) => ({ ...prevPost, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedVehicle = {
      make: post.make,
      model: post.model,
      year: post.year,
      services: post.services,
    };

    await fetch(URL + `/vehicle/${id}/`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedVehicle),
    });

    setPost((prevPost) => ({ ...prevPost, ...updatedVehicle }));
  };

  const handleDelete = async () => {
    await fetch(URL + `/vehicle/${id}/`, {
      method: 'delete',
    });
    // Handle the deletion logic, such as redirecting to a different page
  };

  return (
    <div style={div}>
      <h1>{post.make}</h1>
      <h2>{post.model}</h2>
      <h2>{post.year}</h2>
      <h2>{post.services}</h2>
      <div style={{ textAlign: 'center', backgroundColor: 'grey' }}>
        <h2 style={{ backgroundColor: 'grey', color: 'black' }}>Schedule Today!</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="make"
            placeholder="Enter vehicle make"
            defaultValue={post.make}
          />
          <input
            onChange={handleChange}
            type="text"
            name="model"
            placeholder="Enter vehicle model"
            defaultValue={post.model}
          />
          <input
            onChange={handleChange}
            type="text"
            name="year"
            placeholder="Enter vehicle year"
            defaultValue={post.year}
          />
          <input
            onChange={handleChange}
            type="text"
            name="services"
            placeholder="Enter services needed"
            defaultValue={post.services}
          />
          <button type="submit">Update Schedule</button>
        </form>
        <form onSubmit={handleDelete} action={`/delete/${post.id}`} method="post">
          <button type="submit">Delete Inquiry</button>
        </form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;