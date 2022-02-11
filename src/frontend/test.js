import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ symptomes: [] });

  useEffect(async () => {
    const result = await axios(
      'https://onlinemjcard.com/omcapp/api/wGetSymptomes',
    );

    setData(result.data);
  });

  return (
    <>
    {data.symptomes.map(item => (
      <div className="col-6 col-md-4 col-lg-4" key={item.objectID}>
          <div className="form-group">
              <label className="control control--checkbox">{item.qualify_condition}
                  <input type="checkbox" name="symptoms[]" value="{item.qualify_condition}"  />
                  <div className="control__indicator"></div>
              </label>
          </div>
      </div>
    ))}
    </>
    
  );
}

export default App;