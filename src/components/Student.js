import React from 'react';

function Student(props) {
  return (
    <div>
      <h1>{props.studentOnProps.name}</h1>
    </div>
  );
}

export default Student;
