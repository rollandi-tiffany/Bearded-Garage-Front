import React from 'react';
import { useState } from 'react';
import { useLoaderData, Form } from 'react-router-dom';
import Post from '../components/Post';

const Index = (props) => {
  const vehicle = useLoaderData();

  return (
    <>
      <h2 style={{ color: 'black', backgroundColor: 'grey' }}>
        We are here to help! Fill out below:
      </h2>
      <Form action="/vehicle" method="post">
        <input type="text" name="make" placeholder="Enter vehicle make" />
        <input type="text" name="model" placeholder="Enter vehicle model" />
        <input type="text" name="year" placeholder="Enter vehicle year" />
        <input type="text" name="services" placeholder="Enter services needed" />
        <button>Create New Inquiry</button>
      </Form>

      {vehicle.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};

export default Index;